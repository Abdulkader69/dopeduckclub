import React from 'react'
import ganjaIMG from '../assets/images/imageedit.webp'
import AboutIMG from '../assets/images/About-01-03-2022.webp'

export const About = () => {
  return (
    <div className='about-section pb-20'>
        <div className="w-full max-w-siteWidth m-auto px-4 flex justify-between">
            <div className="left w-[calc(100%-526px)] h-full -mt-5">
                <img className='absolute w-[450px] h-[440px]' src={ganjaIMG} alt="ganjaIMG" />
            </div>
            <div className="right about-bg w-[526px] pt-10 pb-7 px-12 text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                <img className='m-auto' src={AboutIMG} alt="AboutIMG" />
                <div className="content text-lg text-white leading-5">
                    <p className='mb-4'>Dope Duck Club is a Solana-based NFT project which offers exclusive access to a 5-year community-driven Pension Plan built to create long-term financial freedom for our holders.</p>
                    <p className='mb-4'>For each Dope Duck NFT you own, you will receive an equal share of our Pension Pot which is used to implement high-reward strategies such as IDO investment, metaverse development and more. At the end, all profits made from these activities will be distributed equally between our holders.</p>
                    <p className='mb-4'>The aim of the game is to #MakeStonersRich!</p>
                    <p className='mb-4'>Sounds interesting? Keep reading...</p>
                </div>
            </div>
        </div>
    </div>
  )
}
