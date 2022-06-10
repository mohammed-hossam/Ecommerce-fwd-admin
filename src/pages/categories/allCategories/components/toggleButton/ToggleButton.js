import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../../../../../services/axiosInstance';
// import { Spinner } from 'reactstrap';
// import axios from 'services/axios.inercept';
import styles from './toggleButton.module.css';

function ToggleButton({ row }) {
  console.log(row);
  const [activation, setActivation] = useState(row?.status);
  const [loading, setLoading] = useState(false);

  //https://stackoverflow.com/questions/61683928/why-does-parent-onclick-trigger-before-child-onchange
  function handleClick(e) {
    e.stopPropagation();
  }

  async function handleActivation(active, id) {
    setLoading(true);
    if (active === true) {
      try {
        const body = {
          name: row.name,
          status: false,
        };
        const data = await axiosInstance.put(`./category/${row._id}`, body);
        toast.success(`category deactivated successfully`);
        console.log(data);
        setActivation(false);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const body = {
          name: row.name,
          status: true,
        };
        const data = await axiosInstance.put(`./category/${row._id}`, body);
        toast.success(`category activated successfully`);
        console.log(data);
        setActivation(true);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <label className={[styles.switch].join(' ')} onClick={handleClick}>
      <input
        name="activation"
        type="checkbox"
        onChange={(e) => {
          handleActivation(activation, row._id);
        }}
        checked={activation}
      />
      <div className={[styles.slider, styles.round].join(' ')}>
        <span className={[styles.on].join(' ')}>
          {loading ? <CircularProgress /> : 'active'}
        </span>
        <span className={[styles.off].join(' ')}>
          {loading ? <CircularProgress /> : 'not active'}
        </span>
      </div>
    </label>
  );
}

export default ToggleButton;
