import React from 'react';
import TitleIMG from '../assets/images/Give-A-Duck.webp';
import DDCIMG from '../assets/images/DDC.webp';

export const GiveADuck = () => {
  return (
    <div className='give-duck-section overflow-hidden'>
        <div className="w-full max-w-siteWidth m-auto px-4 flex flex-wrap justify-between items-end">
            <div className="right bg-[rgba(175,213,86)] mb-5 w-full md:w-[500px] pt-7 md:pt-10 pb-7 px-4 md:px-12 text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                <img className='m-auto' src={TitleIMG} alt="TitleIMG" />
                <div className="content text-base md:text-lg text-white leading-5">
                    <p className='mb-8 textShadow'>We are delighted to announce that a portion of our founders' personal profits from mint will be donated to the Give A Duck Foundation, which supports children with cancer throughout their treatment. Click below to learn more.</p>
                    <a className='py-2 px-8 rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in bg-transparent hover:bg-[rgba(255,244,55)] text-Dark' href="http://giveaduck.org.uk/">Learn More</a>
                </div>
            </div>
            <div className="left w-full md:w-[calc(100%-500px)]">
                <img className='w-[90%] h-full m-auto md:m-0' src={DDCIMG} alt="DDCIMG" />
            </div>
        </div>
    </div>
  )
}
