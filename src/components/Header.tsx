import Logo from '../assets/images/Dope-Duck-Club.webp'
import About from '../assets/images/about.webp'
import RoadMap from '../assets/images/Roadmap.webp'
import NewsLetter from '../assets/images/Newsletter-.webp'
import WhitePaper from '../assets/images/Whitepaper.webp'
import Team from '../assets/images/Team.webp';
import React, { useState } from 'react'
import { Link } from 'react-scroll'

export const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header id="main-header" className={`${showMenu ? 'bg-[rgba(35,35,35)]' : 'bg-[rgba(35,35,35)]/60'} h-16 fixed top-0 left-0 w-full z-50 overflow-hidden`}>
        <div className="w-full max-w-siteWidth m-auto px-4 flex items-center justify-between">
            <div className="logo">
                <Link className="cursor-pointer" to="Banner" spy={true} smooth={true} duration={500}><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="menu-items hidden md:block">
                <ul className='flex items-center justify-end'>
                    <li className='ml-5'><Link className="cursor-pointer" to="About" spy={true} smooth={true} duration={500}><img src={About} alt="" /></Link></li>
                    <li className='ml-5'><Link className="cursor-pointer" to="RoadMap" spy={true} smooth={true} duration={500}><img src={RoadMap} alt="" /></Link></li>
                    <li className='ml-5'><Link className="cursor-pointer" to="NewsLetter" spy={true} smooth={true} duration={500}><img src={NewsLetter} alt="" /></Link></li>
                    <li className='ml-5'><Link className="cursor-pointer" to="WhitePaper" spy={true} smooth={true} duration={500}><img src={WhitePaper} alt="" /></Link></li>
                    <li className='ml-5'><Link className="cursor-pointer" to="Team" spy={true} smooth={true} duration={500}><img src={Team} alt="" /></Link></li>
                </ul>
            </div>
            <div className="navigator block md:hidden">
                <button type='button' className='p-2 relative' onClick={() => setShowMenu((prevMode) => !prevMode)}>
                    <span className={`w-5 h-[2px] bg-white block relative transition ease-in mb-1 ${showMenu ? 'rotate-45 top-[6px]' : 'rotate-0'}`} />
                    <span className={`w-5 h-[2px] bg-white block relative transition ease-in mb-1 ${showMenu ? '-rotate-45' : 'rotate-0'}`} />
                    <span className={`w-5 h-[2px] bg-white block relative transition ease-in ${showMenu ? 'opacity-0' : 'opacity-100'}`} />
                </button>
            </div>
        </div>
        <div className={`mobile-menu-items opacity-100 md:opacity-0 fixed w-full h-[calc(100%-64px)] top-[64px] px-4 bg-[rgba(35,35,35)] ${showMenu ? 'right-0' : '-right-full'}`}>
            <ul className='block'>
                <li className='ml-5 my-4'><Link onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2" to="About" spy={true} smooth={true} duration={500}><img className='w-full max-w-[14%]' src={About} alt="" /></Link></li>
                <li className='ml-5 my-4'><Link onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2" to="RoadMap" spy={true} smooth={true} duration={500}><img className='w-full max-w-[20%]' src={RoadMap} alt="" /></Link></li>
                <li className='ml-5 my-4'><Link onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2" to="NewsLetter" spy={true} smooth={true} duration={500}><img className='w-full max-w-[20%]' src={NewsLetter} alt="" /></Link></li>
                <li className='ml-5 my-4'><Link onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2" to="WhitePaper" spy={true} smooth={true} duration={500}><img className='w-full max-w-[20%]' src={WhitePaper} alt="" /></Link></li>
                <li className='ml-5 my-4'><Link onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2" to="Team" spy={true} smooth={true} duration={500}><img className='w-full max-w-[14%]' src={Team} alt="" /></Link></li>
            </ul>
        </div>
    </header>
  )
}
