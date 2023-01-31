import React, { useContext } from "react";
import { Container } from "./ContactStyles";
import Navbar from "../../components/Navbar/Navbar";
import AppContext from "../../components/Context/Appcontext";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const { showCart } = useContext(AppContext);
  return (
    <Container>
      <div>
        {showCart && <Cart />}
        <Navbar />
        <Footer />
      </div>
    </Container>
  );
};

export default Contact;
