import animationIMG from '../assets/images/banner-animation.gif'
import Ads1 from '../assets/images/ads.gif'

export const Banner = () => {
  return (
    <>
        <div className='home-banner pt-32 pb-12'>
            <div className="w-full max-w-siteWidth m-auto pl-4 pr-8 relative overflow-hidden h-[415px]">
                <div className="bg-[rgba(175,213,86)] overflow-hidden w-full pt-28 pb-3 rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">

                </div>
                <div className="image absolute right-4 top-0 overflow-hidden rounded-[30px] flex h-full w-[324px] border-2 border-solid border-Dark shadow-Site">
                    <img className='w-full h-full object-cover' src={animationIMG} alt="animation" />
                </div>
            </div>
        </div>
        <div className="ads pb-16 w-full max-w-siteWidth m-auto px-4">
            <img className='w-full' src={Ads1} alt="https://codesandbox.io/s/2vces" />
        </div>
    </>
  )
}
