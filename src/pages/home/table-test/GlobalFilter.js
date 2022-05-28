import React, { useState } from 'react';
import { TextField } from '@mui/material';
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const handleChange = (event) => {
    setGlobalFilter(event.target.value);
  };

  return (
    <TextField
      id="outlined-name"
      label="بحث عن الصف"
      value={globalFilter}
      onChange={handleChange}
    />
  );
}

export default GlobalFilter;
