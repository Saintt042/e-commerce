import React, { useContext } from 'react';
import { Container } from './ShopnowStyle';
import Navbar from "../../components/Navbar/Navbar";
import AppContext from '../../components/Context/Appcontext';
import Cart from '../../components/Cart/Cart';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';



const Shopnow = () => {
    const { showCart } = useContext(AppContext);
  return (
    <Container>
        <div>
        {showCart && <Cart />}
            <Navbar />
            <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>Select from our list of properties</p>
        </div>
        <div className="products-container"><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> </div>
        <Footer />
        </div>
    </Container>
  )
}

export default Shopnow