import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axiosInstance from '../../../services/axiosInstance';
import { toast, Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function AddCategory(props) {
  let navigate = useNavigate();
  const { state } = useLocation();

  const [categoryInput, setCategoryInput] = useState(() => {
    if (state && Object.keys(state.rowData).length > 0) {
      return state.rowData.name;
    }
    return '';
  });
  const [categoryInputError, setCategoryInputError] = useState(null);
  // console.log(state?.rowData);
  const handleCategoryInput = (e) => {
    setCategoryInput(e.target.value);
  };

  function handleCategoryInputError(e) {
    if (categoryInput === '') {
      setCategoryInputError('please enter the category');
      return;
    } else if (!e.target.value.match(/[A-Z]/gi)) {
      setCategoryInputError('please enter a valid category');
      return;
    } else {
      setCategoryInputError(null);
      return;
    }
  }

  async function handleCategoryForm(e) {
    e.preventDefault();
    if (categoryInput === '') {
      setCategoryInputError('please enter the category');
      return;
    }
    //editting
    if (state && Object.keys(state.rowData).length > 0) {
      try {
        const body = {
          name: categoryInput,
          status: true,
        };
        const data = await axiosInstance.put(
          `./category/${state.rowData._id}`,
          body
        );
        console.log(data);
        toast.success('Category Edited successfully');
        navigate('/categories');
      } catch (err) {
        toast.error('category editing failed \n' + err.response.data.message);
        console.log(err);
        console.log(err.message);
        console.log(err.response.data.message);
      }
    }

    //adding
    else {
      try {
        const body = {
          name: categoryInput,
          status: true,
        };
        const data = await axiosInstance.post('./category', body);
        console.log(data);
        toast.success('New Category Added successfully');
        navigate('/categories');
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <Box
        component="form"
        autoComplete="on"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '40%',
          gap: '1.5em',
        }}
      >
        <Toaster />
        <TextField
          error={categoryInputError ? true : false}
          id="filled-error-helper-text"
          label="Category Name"
          value={categoryInput}
          helperText={categoryInputError}
          variant="filled"
          onChange={handleCategoryInput}
          required
          onBlur={handleCategoryInputError}
        />
        <Button
          variant="contained"
          onClick={handleCategoryForm}
          type="submit"
          disabled={categoryInputError ? true : false}
        >
          {state && Object.keys(state.rowData)?.length > 0
            ? 'Edit Category'
            : 'Add Category'}
        </Button>
      </Box>
    </>
  );
}

export default AddCategory;
