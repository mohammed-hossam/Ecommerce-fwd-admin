import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Field } from 'formik';
import React from 'react';

function SelectContainer(props) {
  const { name, label, categories } = props;

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
          // <FormControl
          //   sx={{ m: 1, minWidth: 120, direction: 'rtl' }}
          //   error={form.errors[name] && form.touched[name] ? true : false}
          // >
          //   <InputLabel
          //     id="demo-simple-select-helper-label"
          //     sx={{
          //       direction: 'rtl',
          //       right: '1.3em',
          //       top: '0',
          //       left: '6em',
          //       //  transformOrigin: 'top right',
          //     }}
          //   >
          //     {label}
          //   </InputLabel>
          //   <Select
          //     labelId="demo-simple-select-error-label"
          //     id="demo-simple-select-error"
          //     label={label}
          //     sx={{ textAlign: 'right' }}
          //     {...field}
          //   >
          //     {/* <MenuItem value=""><em>None</em></MenuItem> */}
          //     <MenuItem value={'مصر'}>مصر</MenuItem>
          //     <MenuItem value={'مصر'}>مصر</MenuItem>
          //     <MenuItem value={'مصر'}>مصر</MenuItem>
          //   </Select>
          //   <FormHelperText>اختر البلد</FormHelperText>
          // </FormControl>
          <FormControl
            sx={{ width: '100%' }}
            error={form.errors[name] && form.touched[name] ? true : false}
          >
            <InputLabel
              id="demo-simple-select-error-label"
              // sx={{
              //   direction: 'rtl',
              //   right: '1.2em',
              //   top: '0',
              //   left: '3em',
              //   //  transformOrigin: 'top right',
              // }}
            >
              {label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              label={label}
              // sx={{ textAlign: 'right' }}
              {...field}
              renderValue={(value) => `${value} Category`}
            >
              {categories?.map((category) => {
                return (
                  <MenuItem value={category.name} key={category._id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
            {form.errors[name] && form.touched[name] && (
              <FormHelperText
                id="component-error-text"
                sx={{
                  textAlign: 'center',
                  fontSize: '0.8rem',
                }}
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

export default SelectContainer;
