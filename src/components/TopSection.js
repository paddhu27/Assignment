import { Box, Typography, Avatar, Grid } from '@mui/material';
import logo from '../assessts/g3z57SXv_400x400.jpg'
function TopSection() {
  return (
    <Box
      style={{
        width: '70%',
        margin: '100px auto',
        padding: '20px',
        background:"transparent"
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Avatar alt="LOGO" src={logo}  style={{width:"100px", height:"100px"}}/>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4">Weekly Governance Votes</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">14-20/June</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}




export default TopSection;