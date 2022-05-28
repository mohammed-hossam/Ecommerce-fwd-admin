import { Fab, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

function ActionButtons() {
  return (
    <Box>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </Box>
  );
}

export default ActionButtons;
