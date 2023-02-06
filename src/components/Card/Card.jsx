import React from "react";
import { Container } from "./CardStyle";
// import nn from '../../nn.jpg'

const Card = ({ item }) => {

  return (
    <Container>
      <figure>
        <img src={item.avatar[0].fields.file.url} alt="product-img" />
      </figure>

      <section className="info">
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      </section>
    </Container>
  );
};

export default Card;
