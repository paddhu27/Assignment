import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import Text from './Text';

function CustomCard({ data }) {
  return (
    <Card variant="outlined" style={{ width: "550px", margin: '10px', borderRadius:"20px" }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2} >
            <Avatar alt={data.title} src={data.logoSrc} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h5" component="div">
              {data.title}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2}>
          {data.randomText.map((item, index) => (
            <Text key={index} item={item} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
