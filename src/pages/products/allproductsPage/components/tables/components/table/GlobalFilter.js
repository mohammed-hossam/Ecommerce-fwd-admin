import React, { useState } from 'react';
import { TextField } from '@mui/material';
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const handleChange = (event) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <TextField
      id="outlined-name"
      label="search for row"
      value={globalFilter}
      onChange={handleChange}
      sx={{ marginTop: '1.7em', width: '100%', backgroundColor: '#d9d9d9' }}
    />
  );
}

export default GlobalFilter;
