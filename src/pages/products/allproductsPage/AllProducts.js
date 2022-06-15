import { Box, Button, Modal, Typography } from '@mui/material';
import React, { createContext, useCallback, useEffect, useState } from 'react';

//components
import Forms from './components/form/index';
import TablesMain from './components/tables';
import axiosInstance from '../../../services/axiosInstance';
import styles from './products.module.css';
import useFetch from '../../../customHooks/useFetch';
import { Toaster } from 'react-hot-toast';

// context
import { productsFormModalContext } from '../context/index';

function ProductsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
    setSelectedRowDataToEdit({});
  }, []);

  const [selectedRowDataToEdit, setSelectedRowDataToEdit] = useState({});
  const [categories, setCategories] = useState([]);
  const [fetchData, setFetchData] = useState(true); //to trigger fetching data(of products) any time we want

  //get products
  const { data, loading, error } = useFetch(
    fetchData,
    setFetchData,
    './product'
  );
  const products = data?.data;
  console.log(products);

  //get categories for the select dropdown menu
  useEffect(() => {
    async function getCategories() {
      const data = await axiosInstance.get('/category');
      setCategories(data.data);
    }

    getCategories();
  }, []);

  return (
    <>
      {/* Modal to add new rows in the table */}
      <Toaster />
      <productsFormModalContext.Provider
        value={{ handleOpen, setSelectedRowDataToEdit, setFetchData }}
      >
        <Button onClick={handleOpen} variant="contained">
          Add product
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={styles.add_product_modal}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Product
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              product details
            </Typography>
            <Forms
              selectedRowDataToEdit={selectedRowDataToEdit}
              setFetchData={setFetchData}
              handleClose={handleClose}
              categories={categories}
            />
          </Box>
        </Modal>

        {/* the table to show the data */}
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Loading</p>
        ) : (
          <TablesMain products={products} />
        )}
      </productsFormModalContext.Provider>
    </>
  );
}

export default ProductsPage;
