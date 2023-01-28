import React from 'react'
import { Container } from './FooterbannerStyle'

const Footerbanner = () => {
  return (
    <Container>
      <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>discount</p>
          <h3>largeText1</h3>
          <h3>largeText2</h3>
          <p>saleTime</p>
        </div>
        <div className="right">
          <p>smallText</p>
          <h3>midText</h3>
          <p>desc</p>
          
            <button type="button">buttonText</button>
          
        </div>

        <img 
          src=''
           width={350} 
           height={350} 
           className="footer-banner-image"
          alt=''
        />
      </div>
    </div>
   </Container>
  )
}

export default Footerbanner