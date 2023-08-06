import { Button } from "@mui/material";
import { products } from "../../../../productsMock";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
  const rellenarBase = () => {
    /*    let refCollection = collection(db, "products");
    products.forEach((prod) => {
      addDoc(refCollection, prod);
    }); */
  };

  return (
    <div>
      <h1>Ruta Administrador</h1>
      <Button variant="contained" size="small" /* onClick={rellenarBase} */>
        Base de datos
      </Button>
    </div>
  );
};

export default Dashboard;
