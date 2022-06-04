import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, Paper, Typography } from '@mui/material';
import InputContainer from './fieldsContainers/Input';
import SelectContainer from './fieldsContainers/Select';
import DataTimePickerContainer from './fieldsContainers/DataTimePicker';
import Deposits from '../../../../home/components/Deposits';

const intialFormikState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  country: '',
  time: '',
};

const yupvalidationSchema = Yup.object().shape({
  name: Yup.string().required('من فضلك ادخل الاسم'),
  email: Yup.string()
    .email('البربد المدخل غير صحيح')
    .required('من فضلك ادخل البريد'),
  phone: Yup.number()
    .integer()
    .typeError('التليفون المدخل غير صحيح')
    .required('من فضلك ادخل التليفون'),
  location: Yup.string().required('من فضلك ادخل العنوان'),
  country: Yup.string().required('من فضلك ادخل البلد'),
});

function Forms() {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={intialFormikState}
      onSubmit={handleSubmit}
      validationSchema={yupvalidationSchema}
    >
      {(formikBag) => {
        return (
          <Form>
            <Grid container spacing={0} direction="row">
              <Grid item container direction="row" xs={6} spacing={2}>
                {/* <Grid container spacing={2}> */}
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    الشركة
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="name" label="name" />
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="category" label="category" />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    العنوان
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <InputContainer name="quantity" label="quantity" />
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="description" label="description" />
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="price" label="price" />
                </Grid>
                {/* </Grid> */}
              </Grid>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                disabled={!formikBag.isValid || formikBag.isSubmitting}
                sx={{ marginTop: '1em', marginBottom: '1rem', px: '2em' }}
              >
                ارسال
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Forms;
