import React, { useContext, useEffect } from "react";
import { Container } from "./HomesStyle";
import Navbar from "../../components/Navbar/Navbar";
import Herobanner from "../../components/Herobanner/Herobanner";
import Footer from "../../components/Footer/Footer";
import Footerbanner from "../../components/Footerbanner/Footerbanner";
import Cart from "../../components/Cart/Cart";
import AppContext from "../../components/Context/Appcontext";
import Card from "../../components/Card/Card";
import Product from "../Products/Product";
import useContentful from "../../useContentful/useContentful";


const Home = () => {
  // const { showCart } = useContext(AppContext);
  const { dispatch, showCart } = useContext(AppContext);

  // const [ products, setProducts ] = useState([]);
  const { getProducts } = useContentful();

  useEffect(() => {
    const getData = async() => {
      const data = await getProducts()
      const prodFields = [];
			data.items.forEach((item) => prodFields.push(item.fields));
      dispatch ({type: 'GET_ITEMS', payload: prodFields}) 
      console.log(prodFields)
    }
    getData()
    //eslint-disable-next-line
  }, [dispatch]);


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
        <div className="products-container">
        {/* {products.map((product, index) => (
          // <Card key={index} products = {products} /> 
          <h1>{}</h1>
        ))} */}
          <Card /><Card />
          <Card /><Card /><Card /><Card /><Card />
          <Card /><Card /><Card /> 
          </div>
        <Footerbanner />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
