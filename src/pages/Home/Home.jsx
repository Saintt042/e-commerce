import React from 'react'
import { Container } from './HomesStyle'
import Navbar from '../../components/Navbar/Navbar';
import Herobanner from '../../components/Herobanner/Herobanner';
import Footer from '../../components/Footer/Footer';
import Footerbanner from '../../components/Footerbanner/Footerbanner';

const Home = () => {
  return (
    <Container>
        <div>Home
            <Navbar />
            <Herobanner />
            <Footerbanner />
            <Footer />
        </div>
    </Container>
  )
}

export default Home