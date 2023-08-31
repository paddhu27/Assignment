import { Masonry } from "@mui/lab";
import CustomCard from "./CustomCard";
import { Box } from '@mui/material';
function CardList({ data }) {
  return (
    <Box style={{ width: "73%", margin: "0 auto"}}>
      <Masonry columns={2} spacing={2}>
        {data.map((data, index) => (
            <CustomCard data={data} />
        ))}
      </Masonry>
    </Box>
  );
}

export default CardList;
