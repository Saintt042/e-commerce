import React, { useContext } from "react";
import { Container } from "./ContactStyles";
import Navbar from "../../components/Navbar/Navbar";
import AppContext from "../../components/Context/Appcontext";
import Cart from "../../components/Cart/Cart";

const Contact = () => {
  const { showCart } = useContext(AppContext);
  return (
    <Container>
      <div>
        Contact
        {showCart && <Cart />}
        <Navbar />
      </div>
    </Container>
  );
};

export default Contact;
