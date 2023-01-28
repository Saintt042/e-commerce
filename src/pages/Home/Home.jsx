import React from 'react'
import { Container } from './HomesStyle'
import Navbar from '../../components/Navbar/Navbar';
import Herobanner from '../../components/Herobanner/Herobanner';

const Home = () => {
  return (
    <Container>
        <div>Home
            <Navbar />
            <Herobanner />
        </div>
    </Container>
  )
}

export default Home