import { Button } from '@mui/material';
import React, { useState } from 'react';
import useFetch from '../../../customHooks/useFetch';
import Table from './components/table/index';
import { Toaster } from 'react-hot-toast';
import { Link as RouterLink } from 'react-router-dom';

// context
import { categoriesContext } from '../context/index';

function AllCategories() {
  const [fetchData, setFetchData] = useState(true);
  console.log(fetchData);

  // async function getProductsFromServer() {
  //   const data = await axiosInstance.get('./products');
  //   console.log(data);
  // }

  const { data, loading, error } = useFetch(
    fetchData,
    setFetchData,
    './category'
  );

  const categories = data?.data;

  return (
    <>
      <categoriesContext.Provider value={{ setFetchData }}>
        <Button variant="contained" component={RouterLink} to="/categories/add">
          Add Category
        </Button>
        {error ? (
          <p>{error}</p>
        ) : loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Toaster />

            <Table categories={categories} setFetchData={setFetchData} />
          </>
        )}
      </categoriesContext.Provider>
    </>
  );
}

export default AllCategories;
