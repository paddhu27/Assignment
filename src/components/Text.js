import { Grid, Typography } from '@mui/material';

function Text({ item }) {
  return (
    <Grid container alignItems="center" spacing={2} style={{margin:"10px auto"}}>
      <Grid item xs={2}>
        <Typography variant="h6" style={{ wordWrap: 'break-word', maxWidth: '50px' }}>
          #{item.number}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6">|</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" style={{ wordWrap: 'break-word', maxWidth: '250px' }}>
          {item.text}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h6">|</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography 
          variant="h6" 
          style={{ color: item.yesNo === "YES" ? "green" : "red", wordWrap: 'break-word', maxWidth: '50px' }}
        >
          {item.yesNo}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Text;