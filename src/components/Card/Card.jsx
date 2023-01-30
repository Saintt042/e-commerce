import React from "react";
import { Container } from "./CardStyle";

const Card = () => {
  return (
    <Container>
      <figure>
        <img src="" alt="product-img" />
      </figure>

      <section className="info">
        <div>
          <p>name</p>
          <p>₦price</p>
        </div>
      </section>
    </Container>
  );
};

export default Card;
