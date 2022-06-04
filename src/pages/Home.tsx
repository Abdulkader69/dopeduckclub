import React from 'react'
import BG from '../assets/images/bg-image.webp'
import { Banner } from '../components/Banner'
import { About } from '../components/About'
import { RoadMap } from '../components/RoadMap'
import { Newsletter } from '../components/Newsletter'
import { Whitepaper } from '../components/Whitepaper'
import { Team } from '../components/Team'
import { GiveADuck } from '../components/GiveADuck'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
      <>
        <div className='page-container relative z-20'>
            <Banner />
            <About />
            <RoadMap />
            <Newsletter />
            <Whitepaper />
            <Team />
            <GiveADuck />
            <Footer />
        </div>
        <div className="bg fixed top-0 left-0 w-full h-screen z-10 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(' + BG + ')'}} />
      </>
  )
}
