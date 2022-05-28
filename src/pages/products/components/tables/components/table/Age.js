import React from 'react';

function Age({ value, x }) {
  return (
    <div style={{ color: value > 50 ? 'red' : 'blue' }}>{value + ' admin'}</div>
  );
}

export default Age;
