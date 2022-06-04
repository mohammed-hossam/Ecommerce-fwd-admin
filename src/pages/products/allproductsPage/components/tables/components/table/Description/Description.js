import React from 'react';
import styles from './description.module.css';

function Description({ value }) {
  return <div className={styles.wrapText}>{value}</div>;
}

export default Description;
