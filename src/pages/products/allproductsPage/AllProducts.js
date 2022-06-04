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
  const [fetchData, setFetchData] = useState(true);
  console.log(fetchData);

  // async function getProductsFromServer() {
  //   const data = await axiosInstance.get('./products');
  //   console.log(data);
  // }

  const { data, loading, error } = useFetch(
    fetchData,
    setFetchData,
    './products'
  );
  const products = data?.data;
  console.log(products);
  console.log(22222);

  useEffect(() => {
    console.log(44444);
    // getProductsFromServer();
  }, []);

  return (
    <>
      {/* Modal to add new rows in the table */}
      <Toaster />
      <productsFormModalContext.Provider
        value={{ handleOpen, setSelectedRowDataToEdit }}
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
            />
          </Box>
        </Modal>

        {/* the table to show the data */}
        {loading ? <p>Loading</p> : <TablesMain products={products} />}
      </productsFormModalContext.Provider>
    </>
  );
}

export default ProductsPage;
