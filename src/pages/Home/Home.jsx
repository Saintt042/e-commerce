import React, { useContext } from "react";
import { Container } from "./HomesStyle";
import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import Footer from "../../components/Footer/Footer";
import Footerbanner from "../../components/Footerbanner/Footerbanner";
import Cart from "../../components/Cart/Cart";
import AppContext from "../../components/Context/Appcontext";
import Card from "../../components/Card/Card";
import Product from "./Products/Product";

const Home = () => {
  const { showCart } = useContext(AppContext);
  return (
    <Container>
      <div>
        {showCart && <Cart />}
        <Navbar />
        <Herobanner />
        <div className="products-heading">
          <Product />
          <h2>Best Seller Products</h2>
          <p>Select from our list of properties</p>
        </div>
        <div className="products-container"><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> </div>
        <Footerbanner />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
