import React from 'react'

export const Footer = () => {
  return (
    <div className='main-footer bg-[rgba(35,35,35)]/60 py-5 overflow-hidden'>
        <div className="w-full max-w-siteWidth m-auto px-4 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-auto footer-text text-sm md:text-base text-white text-center md:text-left mb-4 md:mb-0">
                <p>© 2022 Dope Duck Club. All Rights Reserved.</p>
            </div>
            <div className="link w-full md:w-auto flex justify-center md:justify-end">
                <a className='roadmap-bg mr-5 py-2 px-10 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://discord.gg/tgChmTewMr">Discord</a>
                <a className='roadmap-bg py-2 px-10 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="https://twitter.com/DopeDuckClub">Discord</a>
            </div>
        </div>
    </div>
  )
}
