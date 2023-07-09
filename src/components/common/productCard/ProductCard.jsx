import {
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
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="DarkBlue">
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
