import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia sx={{ height: 200 }} image={item.img} />
      <CardContent>
        <Typography
          backgroundColor="#b71c1c"
          color="#f5f5f5"
          textAlign="center"
          gutterBottom
          variant="h6"
          component="div"
        >
          {item.title}
        </Typography>
        <Typography textAlign="center" variant="body2" color="#212121">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Detalles
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
