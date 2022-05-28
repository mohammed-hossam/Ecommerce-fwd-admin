import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

//components
import Forms from './components/form/index';
import TablesMain from './components/tables';

import styles from './products.module.css';

function ProductsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Modal to add new rows in the table */}

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
    </>
  );
}

export default ProductsPage;
