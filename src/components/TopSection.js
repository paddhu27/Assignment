import { Box, Typography, Avatar, Grid } from '@mui/material';
import logo from '../assessts/g3z57SXv_400x400.jpg'
function TopSection() {
  return (
    <Box
      style={{
        width: '70%',
        margin:"10px auto 20px auto",
        background:"transparent",
        border:"2px solid blank"
      }}
    >
      <Grid container alignItems="center" spacing={2}>
      <Grid item xs={2} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <Avatar alt="LOGO" src={logo}  style={{width:"100px", height:"100px" ,padding:'0', margin:'0'}}/>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item xs={5}>
        <Typography style={{fontSize:"2rem"}}>Weekly Governance Votes</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography style={{fontSize:"1.5rem"}}>14-20/June</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}




export default TopSection;