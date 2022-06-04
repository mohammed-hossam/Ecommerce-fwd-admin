import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Grid, Paper, Typography } from '@mui/material';
import InputContainer from './fieldsContainers/Input';
import InputContainerTextArea from './fieldsContainers/TextArea';
import SelectContainer from './fieldsContainers/Select';
import DataTimePickerContainer from './fieldsContainers/DataTimePicker';
import Deposits from '../../../../home/components/Deposits';
import axiosInstance from '../../../../../services/axiosInstance';
import { toast } from 'react-hot-toast';
const yupvalidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/[A-Z]/gi, 'please enter a correct name')
    .required('please enter the product name'),
  category: Yup.string()
    .matches(/[A-Z]/gi, 'please enter a correct category')
    .required('please enter the product category'),
  price: Yup.number()
    .positive()
    .typeError('please enter a correct number')
    .required('please enter the product price'),
  quantity: Yup.number()
    .positive()
    .integer()
    .typeError('please enter an integer number')
    .required('please enter the product quantity'),
  // rating: Yup.number()
  //   .min(0, 'Min value 0')
  //   .max(5, 'Max value 5')
  //   .integer()
  //   .typeError('please enter an integer number'),
  description: Yup.string()
    .matches(/[A-Z]/gi, 'please enter a correct description')
    .typeError('please enter a correct description'),
});

function Forms({ selectedRowDataToEdit, setFetchData, handleClose }) {
  const intialFormikState = {
    name: selectedRowDataToEdit.name || '',
    price: selectedRowDataToEdit.price || 0,
    category: selectedRowDataToEdit.category || '',
    quantity: selectedRowDataToEdit.quantity || 0,
    description: selectedRowDataToEdit.description || '',
    // rating: selectedRowDataToEdit.rating || 0,
  };

  async function handleSubmit(values) {
    console.log(values);
    console.log(Object.keys(selectedRowDataToEdit));

    if (Object.keys(selectedRowDataToEdit).length > 0) {
      try {
        const data = await axiosInstance.put(
          `/products/${selectedRowDataToEdit._id}`,
          values
        );
        console.log(data);
        toast.success('product edited');
        handleClose();
        setFetchData(true);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const data = await axiosInstance.post('/products', values);
        console.log(data);
        toast.success('product added');
        handleClose();
        setFetchData(true);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
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
              <Grid item container direction="row" xs={12} spacing={2}>
                {/* <Grid container spacing={2}> */}

                <Grid item xs={6}>
                  <InputContainer name="name" label="name" />
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="category" label="category" />
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="price" label="price" />
                </Grid>
                <Grid item xs={6}>
                  <InputContainer name="quantity" label="quantity" />
                </Grid>
                <Grid item xs={12}>
                  <InputContainerTextArea
                    name="description"
                    label="description"
                  />
                </Grid>
                {/* <Grid item xs={6}>
                  <InputContainer name="rating" label="rating" />
                </Grid> */}
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
                {Object.keys(selectedRowDataToEdit).length > 0 ? 'Edit' : 'Add'}
              </Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Forms;
