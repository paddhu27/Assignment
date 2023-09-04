import * as React from 'react'; 
import Stack from '@mui/material/Stack';  
import Button from '@mui/material/Button';  
import { useState } from 'react';
import DatePicker from '@mui/lab/DatePicker';



export default function BasicButtons() {  

  return (
    <Stack spacing={2} direction="row" style={{ display: 'flex', justifyContent: 'flex-end' }}> 
    <Button variant="contained">Start Date</Button>   
      <Button variant="contained">End date</Button>
    </Stack>  
  );  
}  
