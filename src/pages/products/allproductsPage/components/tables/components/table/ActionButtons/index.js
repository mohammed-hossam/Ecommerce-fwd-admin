import { Fab, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext } from 'react';
import { productsFormModalContext } from '../../../../../../context';

//context

function ActionButtons() {
  //context
  const productsFormModalContextData = useContext(productsFormModalContext);
  console.log(productsFormModalContextData);

  return (
    <Box>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <IconButton
        aria-label="edit"
        onClick={productsFormModalContextData.handleOpen}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}

export default ActionButtons;
