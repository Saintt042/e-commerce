import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './HerobannerStyle'

const Herobanner = ({item}) => {
  return (
    <Container>
          <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{item.smallText}</p>
        <h3>{item.midText}</h3>
        <h1>{item.largeText1}</h1>
        <img src={item.avatar.fields.file.url} alt="headphones" className="hero-banner-image" />

        <div>
          {/* <Link href={`/product/${heroBanner.product}`}>
          <Link href="/ShopNow"> */}
            <Link to="/products">
            <button type="button">{item.buttonText}</button>
            </Link>
            {/* </Link>
          </Link> */}
          <div className="desc">
            <h5>Description</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default Herobanner