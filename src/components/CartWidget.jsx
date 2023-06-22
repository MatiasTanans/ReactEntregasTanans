import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Badge badgeContent={5} color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
};

export default CartWidget;
