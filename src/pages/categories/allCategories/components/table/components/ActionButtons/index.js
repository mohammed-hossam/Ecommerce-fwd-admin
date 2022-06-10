import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../../../../services/axiosInstance';

import { toast } from 'react-hot-toast';

import { categoriesContext } from '../../../../../context/index';

function ActionButtons({ row }) {
  const navigate = useNavigate();
  // console.log(row);
  const categoriesContextData = useContext(categoriesContext);

  return (
    <Box>
      <IconButton
        aria-label="delete"
        onClick={async () => {
          try {
            const data = await axiosInstance.delete(
              `/category/${row.values._id}`
            );
            console.log(data);
            toast.success('category is removed successfully');
            categoriesContextData.setFetchData(true);
          } catch (err) {
            console.log(err);
            console.log(err.message);
            console.log(err.response.data.message);
            toast.error(
              'category removing failed \n' + err.response.data.message
            );
          }
        }}
      >
        <DeleteIcon />
      </IconButton>

      <IconButton
        aria-label="edit"
        onClick={() => {
          navigate('/categories/add', { state: { rowData: row.values } });
        }}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}

export default ActionButtons;
