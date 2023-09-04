import React, { useState } from 'react';
import { DatePicker, LocalizationProvider, DesktopDatePicker } from '@mui/lab';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Container, Grid } from '@mui/material';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <DesktopDatePicker {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <DesktopDatePicker {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <Button>hiii</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DateSelector;