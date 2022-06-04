import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from '@mui/material';
import { Field, useField } from 'formik';
import React from 'react';

function InputContainer(props) {
  const { name, label } = props;

  //   const [field, meta, form] = useField(name);
  //   console.log(field);
  //   console.log(meta);
  //   console.log(form);
  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form, // formbag: errors,touched, values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta, //error: "من فضلك ادخل الاسم",initialError: undefined,initialTouched: false,initialValue: "",touched: true,value: "",
      }) => {
        //       console.log(meta);
        //    we can use form.errors and . touched or meta.error and .touched
        return (
          <FormControl
            variant="filled"
            fullWidth
            error={form.errors[name] && form.touched[name] ? true : false}
          >
            <InputLabel
              htmlFor={name}
              // sx={{ color: (theme) => theme.palette.primary.main }}
              // sx={{
              //   direction: 'rtl',
              //   right: '1em',
              //   top: '0',
              //   left: 'unset',
              //   transformOrigin: 'top right',
              // }}
            >
              {label}
            </InputLabel>
            <FilledInput
              id={name}
              // sx={{ direction: 'rtl' }}
              type="text"
              multiline
              rows={4}
              {...field}
            />

            {form.errors[name] && form.touched[name] && (
              <FormHelperText
                id="component-error-text"
                sx={{
                  textAlign: 'center',
                  fontSize: '0.8rem',
                }}
                required
              >
                {form.errors[name]}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    </Field>
  );
}

export default InputContainer;
