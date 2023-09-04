import { Card, CardContent, Typography, Avatar, Grid, Box } from '@mui/material';
import Text from './Text';

function CustomCard({ data }) {
  return (
    <Card variant="outlined" style={{ width: "500px", margin: '8px', borderRadius:"15px" , padding:"0px" }}>
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={2} >
            <Avatar alt={data.title} src={data.logoSrc} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="div" style={{fontSize:"1.5rem"}}>
              {data.title}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={1}>
          {data.randomText.map((item, index) => (
            <Text key={index} item={item} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
export default CustomCard;
