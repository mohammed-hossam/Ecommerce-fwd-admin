import { Box, FormControl, Input, InputLabel, TextField } from '@mui/material';
import React from 'react';

function ColFilter(props) {
  // console.log(props);
  const { filterValue, setFilter } = props.column;
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl
      size="small"
      onClick={(e) => {
        e.stopPropagation();
      }}
      fullWidth
      sx={{ marginTop: '0.5em' }}
    >
      {/* <InputLabel htmlFor="component-simple">بحث</InputLabel> */}
      <Input placeholder="search" value={filterValue} onChange={handleChange} />
    </FormControl>
  );
}

export default ColFilter;
{
  /* <Box
onClick={(e) => {
  e.stopPropagation();
}}
sx={{ padding: 0 }}
>
<FormControl size="small">
  {/* <InputLabel htmlFor="component-simple">بحث</InputLabel> */
}
// <Input placeholder="بحث"value={filterValue} onChange={handleChange} />
// </FormControl>

{
  /* <TextField
  // id="margin-none"
  label="بحث"
  value={filterValue}
  onChange={handleChange}
  variant="standard"
  size="small"
  sx={{
    minWidth: '8rem',
    padding: 0,
    // height: '3rem',
    // backgroundColor: 'white',
    // marginTop:'3em'
  }}
/> */
}
// </Box> */}
