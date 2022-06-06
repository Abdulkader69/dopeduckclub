import React from 'react'
import ganjaIMG from '../assets/images/imageedit.webp'
import AboutIMG from '../assets/images/About-01-03-2022.webp'

export const About = () => {
  return (
    <div className='about-section pb-20 overflow-hidden'>
        <div className="w-full max-w-siteWidth m-auto px-4 flex justify-between">
            <div className="left w-[calc(100%-526px)] h-full -mt-5 hidden md:block">
                <img className='absolute w-[270px] lg:w-[450px] h-[240px] lg:h-[440px]' src={ganjaIMG} alt="ganjaIMG" />
            </div>
            <div className="right about-bg w-full md:w-[526px] pt-7 md:pt-10 pb-7 px-4 md:px-12 text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                <img className='m-auto' src={AboutIMG} alt="AboutIMG" />
                <div className="content text-base md:text-lg text-white leading-5">
                    <p className='mb-4'>Xtra Terrestials is a Solana-based NFT project which offers exclusive utility to all of its holders. Each of our 3,333 Xtra Terrestrials are special with a variation and combination of 10 trait categories, containing 60 total triat</p>
                    <p className='mb-4'>Holders of an Xtra Terrestial will have access to Planet X, which will be designed to reward our holders for staking through a passive income stream. Planet X is a staking play-to earn game which consists of staking your Xtra Terrestrials for SOL as a reward. As a team, we are looking forward to a +100% APY. As soon as you stake your NFT’s sit back, relax and watch it take life on Planet X</p>
                    <p className='mb-4'>Sounds interesting? Keep reading...</p>
                </div>
            </div>
        </div>
        <div id="RoadMap"></div>
    </div>
  )
}
