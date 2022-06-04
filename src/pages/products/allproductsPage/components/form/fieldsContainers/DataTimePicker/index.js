import React from 'react';
import { Field } from 'formik';
import { FormControl, TextField } from '@mui/material';

function DataTimePickerContainer(props) {
  const { name, label } = props;

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
          // <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TextField type="date" {...field} />
          // </LocalizationProvider>
        );
      }}
    </Field>
  );
}

export default DataTimePickerContainer;
