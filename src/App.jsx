import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
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
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;