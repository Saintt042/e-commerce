import React, { useContext } from "react";
import { Container } from "./HomesStyle";
import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import Footer from "../../components/Footer/Footer";
import Footerbanner from "../../components/Footerbanner/Footerbanner";
import Cart from "../../components/Cart/Cart";
import AppContext from "../../components/Context/Appcontext";

const Home = () => {
  const { showCart } = useContext(AppContext);
  return (
    <Container>
      <div>
        Home
        {showCart && <Cart />}
        <Navbar />
        <Herobanner />
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>Select from our list of properties</p>
        </div>
        <div className="products-container"></div>
        <Footerbanner />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
