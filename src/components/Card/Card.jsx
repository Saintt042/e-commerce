import React from "react";
import { Container } from "./CardStyle";
import nn from '../../nn.jpg'

const Card = () => {
  return (
    <Container>
      <figure>
        <img src={nn} alt="product-img" />
      </figure>

      <section className="info">
        <div>
          <p>name  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, aliquid tempora. Iure beatae nulla nihil quos alias repudiandae porro ea?</p>
          <p>₦price</p>
        </div>
      </section>
    </Container>
  );
};

export default Card;
