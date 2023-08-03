import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import "./Counter.css";

const Counter = ({ counter, setCounter, agregarAlCarrito, stock }) => {
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            disabled={counter <= 1}
            onClick={() => setCounter(counter - 1)}
          >
            <RemoveIcon />
          </Button>

          <h2>{counter}</h2>
          <Button
            disabled={counter >= stock}
            onClick={() => setCounter(counter + 1)}
          >
            <AddIcon />
          </Button>
        </Box>
      </div>
      <br />
      <Button variant="contained" onClick={() => agregarAlCarrito(counter)}>
        <AddShoppingCartIcon />
      </Button>
    </div>
  );
};

export default Counter;
