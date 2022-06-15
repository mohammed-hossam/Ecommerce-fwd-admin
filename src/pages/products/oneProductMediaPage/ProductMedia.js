import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../services/axiosInstance';

import { toast, Toaster } from 'react-hot-toast';

function Product() {
  const { state } = useLocation();
  console.log(state);
  const [imgs, setImgs] = useState(
    state.rowData.images.length > 0 ? state.rowData.images : []
  );

  function handleUploadImages(e) {
    console.log(e.target.files);
    const uploadedImgsArray = e.target.files;

    // validate that the overall is not more than  5
    if (imgs.length + uploadedImgsArray.length > 5) {
      // toast error 5 images per product is the max number
      return toast.error('5 images per product is the max number');
    }
    // here
    let arrofCalls = [];
    for (let i = 0; i < uploadedImgsArray.length; i++) {
      const ele = uploadedImgsArray[i];
      let data = new FormData();
      data.append('image', ele, ele.name);
      data.append('id', state.rowData._id);
      if (imgs.length === 0) {
        data.append('index', i);
      } else {
        data.append('index', imgs.length + i);
      }
      arrofCalls.push(axiosInstance.post('/image', data));
    }
    Promise.all(arrofCalls)
      .then((values) => {
        console.log(values);
        const imgsArray = values.map((el) => {
          return el.data.file.filename;
        });
        console.log(imgsArray);
        setImgs((prev) => [...prev, ...imgsArray]);
      })
      .catch((e) => console.error(e));
    // axiosInstance
    //   .post('/product/image/upload', data)
    //   .then((response) => {
    //     console.log(response.data.link);
    //     setImgs(response.data.link);
    //     // toast.success(`تم رفع الصورة / ${file?.name}`);
    //   })
    // .catch((e) => console.error(e));
    // setImgs([]);
  }

  async function handleImageDelete(i) {
    console.log();
    const body = { id: state.rowData._id, index: i };
    const data = await axiosInstance.delete('image', body);
    console.log(data);
  }

  return (
    <Box>
      <Toaster />
      <Grid item xs={6}>
        <label htmlFor="contained-button-file">
          <input
            accept="image/png, image/jpeg"
            id="contained-button-file"
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={handleUploadImages}
          />

          <Button variant="contained" component="span">
            Upload Images
          </Button>
        </label>
      </Grid>
      <Box sx={{ display: 'flex' }}>
        {imgs.map((img, i) => {
          console.log(img);
          return imgs.length > 0 ? (
            <Box sx={{ height: '23em', width: '23em', position: 'relative' }}>
              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
                onClick={(e) => handleImageDelete(i)}
              >
                Delete Image
              </Button>

              <img
                src={`https://e-shop-udacity-13.herokuapp.com/image/${img}`}
                alt={img}
                style={{ width: '100%', maxHeight: '100%', height: '100%' }}
              />
            </Box>
          ) : (
            <p>No images add yet</p>
          );
        })}
      </Box>
    </Box>
  );
}

export default Product;
