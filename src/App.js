import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import ContactUs from "./component/Contact";
import AboutUs from "./component/About";
import LoginForm from "./component/Login";
import SignupForm from "./component/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={SignupForm} />
      <Footer />
    </>
  );
}

export default App;
