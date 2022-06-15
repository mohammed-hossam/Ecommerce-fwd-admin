import { Fab, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import React, { useContext } from 'react';
import { productsFormModalContext } from '../../../../../../context';
import axiosInstance from '../../../../../../../../services/axiosInstance';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

//context

function ActionButtons(props) {
  // console.log(props.row.values);
  // console.log(props.row.original);
  //context
  const navigate = useNavigate();

  const productsFormModalContextData = useContext(productsFormModalContext);
  // console.log(productsFormModalContextData);

  return (
    <Box sx={{ display: 'inline-flex' }}>
      <IconButton
        aria-label="delete"
        onClick={async () => {
          try {
            const data = await axiosInstance.delete(
              `/product/${props.row.values._id}`
            );
            console.log(data);
            toast.success('product is removed successfully');
            productsFormModalContextData.setFetchData(true);
          } catch (err) {
            console.log(err);
            console.log(err.message);
            console.log(err.response.data.message);
            toast.error(
              'product removing failed \n' + err.response.data.message
            );
          }
        }}
      >
        <DeleteIcon />
      </IconButton>

      <IconButton
        aria-label="edit"
        onClick={() => {
          productsFormModalContextData.handleOpen();
          productsFormModalContextData.setSelectedRowDataToEdit(
            props.row.values
          );
        }}
      >
        <EditIcon />
      </IconButton>

      <IconButton
        aria-label="edit"
        onClick={() => {
          navigate(`/products/media/${props.row.values._id}`, {
            state: { rowData: props.row.original },
          });
        }}
      >
        <PermMediaIcon />
      </IconButton>
    </Box>
  );
}

export default ActionButtons;
