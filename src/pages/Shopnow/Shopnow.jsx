import React, { useContext } from 'react';
import { Container } from './ShopnowStyle';
import Navbar from "../../components/Navbar/Navbar";
import AppContext from '../../components/Context/Appcontext';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';



const Shopnow = () => {
    const { showCart } = useContext(AppContext);
  return (
    <Container>
        <div>
        {showCart && <Cart />}
            <Navbar />
            <Footer />
        </div>
    </Container>
  )
}

export default Shopnow