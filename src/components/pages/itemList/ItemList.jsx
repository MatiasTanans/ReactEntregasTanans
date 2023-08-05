import ProductCard from "../../common/productCard/ProductCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./ItemList.css";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3];
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "20px",
        paddingBottom: "20px",
        gap: "20px",
      }}
    >
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((elemento) => (
            <Stack spacing={1} key={elemento}>
              <Skeleton variant="rounded" width={300} height={200} />
              <Skeleton variant="text" width={290} height={60} />
              <Skeleton variant="text" width={290} height={120} />
              <Skeleton variant="text" width={100} height={60} />
            </Stack>
          ))}
    </section>
  );
};

export default ItemList;
