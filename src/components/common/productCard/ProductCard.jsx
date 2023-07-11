import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ width: 350 }} style={{ backgroundColor: "burlywood" }}>
      <CardMedia sx={{ height: 200 }} image={item.img} />
      <CardContent>
        <Typography
          backgroundColor="#b71c1c"
          color="burlywood"
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
      <CardActions style={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
