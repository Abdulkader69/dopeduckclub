import React from 'react'

export const Footer = () => {
  return (
    <div className='main-footer bg-[rgba(35,35,35)]/60 py-5'>
        <div className="w-full max-w-siteWidth m-auto px-4 flex items-center justify-between">
            <div className="footer-text text-base text-white">
                <p>© 2022 Dope Duck Club. All Rights Reserved.</p>
            </div>
            <div className="link">
                <a className='roadmap-bg mr-5 py-2 px-10 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="/">Discord</a>
                <a className='roadmap-bg py-2 px-10 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="/">Discord</a>
            </div>
        </div>
    </div>
  )
}
