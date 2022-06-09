import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { ImportExportOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";

const App = () => {

  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);


  useEffect( () => {
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setAllProducts(json));
    }
    try {
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, [])
  
  return (
    <Router>
      <Switch>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/product-list"}>
          <ProductList />
        </Route>
        <Route path={"/product"}>
          <Product />
        </Route>
        <Route path={"/cart"}>
          <Cart />
        </Route>
        <Route path={"/"}>
          <Home allProducts={allProducts} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;