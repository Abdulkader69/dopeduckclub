import Logo from '../assets/images/Dope-Duck-Club.webp'
import About from '../assets/images/about.webp'
import RoadMap from '../assets/images/Roadmap.webp'
import NewsLetter from '../assets/images/Newsletter-.webp'
import WhitePaper from '../assets/images/Whitepaper.webp'
import Term from '../assets/images/Team.webp'

export const Header = () => {
  return (
    <header id="main-header" className="bg-[rgba(35,35,35)]/60 h-16 fixed top-0 left-0 w-full z-50">
        <div className="w-full max-w-siteWidth m-auto px-4 flex items-center justify-between">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="menu-items">
                <ul className='flex items-center justify-end'>
                    <li className='ml-5'><a href="/"><img src={About} alt="" /></a></li>
                    <li className='ml-5'><a href="/"><img src={RoadMap} alt="" /></a></li>
                    <li className='ml-5'><a href="/"><img src={NewsLetter} alt="" /></a></li>
                    <li className='ml-5'><a href="/"><img src={WhitePaper} alt="" /></a></li>
                    <li className='ml-5'><a href="/"><img src={Term} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
