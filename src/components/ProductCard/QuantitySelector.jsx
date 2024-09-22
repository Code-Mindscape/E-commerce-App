import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className='py-5' style={{ display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleDecrement}>
        <RemoveIcon />
      </IconButton>
      <TextField
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        inputProps={{ style: { textAlign: 'center', width: '40px', height: '10px' } }}
      />
      <IconButton onClick={handleIncrement}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default QuantitySelector;
