import animationIMG from '../assets/images/banner-animation.gif'
import SoldOut from '../assets/images/Sold-Out.webp'
import Ads1 from '../assets/images/ads.gif'

export const Banner = () => {
  return (
    <>
        <div className='home-banner pt-24 md:pt-32 pb-12 overflow-hidden' id='Banner'>
            <div className="w-full max-w-siteWidth m-auto pl-4 pr-4 md:pr-8 relative overflow-hidden md:h-[415px]">
                <div className="flex items-center justify-center bg-[rgba(175,213,86)] overflow-hidden w-full md:w-[calc(100%-260px)] py-10 md:py-2 pl-4 md:pl-0 pr-4 md:pr-11 rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site mb-8 md:mb-0">
                    <div className="inner w-full">
                        <div className="sold-wrap mb-2">
                            <img className='m-auto' src={SoldOut} alt="SoldOut" />
                        </div>
                        <div className="link flex items-center justify-center mb-2">
                            <a className='roadmap-bg py-2 px-12 text-xs sm:text-base text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://magiceden.io/marketplace/dope_duck_club">Buy now on Magic Eden</a>
                        </div>
                        <div className="link flex items-center justify-center">
                            <a className='roadmap-bg mr-1 py-2 px-10 text-xs sm:text-base text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://discord.gg/tgChmTewMr">Discord</a>
                            <a className='roadmap-bg ml-1 py-2 px-10 text-xs sm:text-base text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://twitter.com/DopeDuckClub">Twitter</a>
                        </div>
                    </div>
                </div>
                <div className="image md:absolute right-4 top-0 overflow-hidden rounded-[30px] flex h-full w-full md:w-[324px] border-2 border-solid border-Dark shadow-Site">
                    <img className='w-full h-full object-cover' src={animationIMG} alt="animation" />
                </div>
            </div>
        </div>
        <div id='About'></div>
        <div className="ads pb-16 w-full max-w-siteWidth m-auto px-4">
            <img className='w-full' src={Ads1} alt="https://codesandbox.io/s/2vces" />
        </div>
    </>
  )
}
