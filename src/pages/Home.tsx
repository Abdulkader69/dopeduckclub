import React from 'react'
import BG from '../assets/images/bg-image.webp'

export const Home = () => {
  return (
      <>
        <div className='page-container relative z-20 pt-20 text-8xl text-red-400'>
            home
        </div>
        <div className="bg fixed top-0 left-0 w-full h-screen z-10 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(' + BG + ')'}} />
      </>
  )
}
