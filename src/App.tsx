import React from 'react';
import './App.css';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';

function App() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
}

export default App;
