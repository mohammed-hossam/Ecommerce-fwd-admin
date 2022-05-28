import { Box, TextField } from '@mui/material';
import React from 'react';

function ColFilter(props) {
  console.log(props);
  const { filterValue, setFilter } = props.column;
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <TextField
        id="outlined-name"
        label="بحث"
        value={filterValue}
        onChange={handleChange}
        sx={{ minWidth: '8rem' }}
      />
    </Box>
  );
}

export default ColFilter;
