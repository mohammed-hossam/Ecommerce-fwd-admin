import { Box, Button, Modal, Typography } from '@mui/material';
import React, { createContext, useCallback, useEffect, useState } from 'react';

//components
import Forms from './components/form/index';
import TablesMain from './components/tables';
import axiosInstance from '../../../services/axiosInstance';
import styles from './products.module.css';
import useFetch from '../../../customHooks/useFetch';

// context
import { productsFormModalContext } from '../context/index';

function ProductsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // async function getProductsFromServer() {
  //   const data = await axiosInstance.get('./products');
  //   console.log(data);
  // }

  const { products: data, loading, error } = useFetch('./products', 'get');
  console.log(22222);

  useEffect(() => {
    console.log(44444);
    // getProductsFromServer();
  }, []);

  return (
    <>
      {/* Modal to add new rows in the table */}
      <productsFormModalContext.Provider value={{ handleOpen }}>
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Forms />
          </Box>
        </Modal>

        {/* the table to show the data */}
        <TablesMain />
      </productsFormModalContext.Provider>
    </>
  );
}

export default ProductsPage;
