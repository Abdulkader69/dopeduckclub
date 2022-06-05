import React from 'react';
import roadMapIMG from '../assets/images/Roadmap-01-03-2022.webp'
import MintIMG from '../assets/images/Mint-03-03-2022.webp'
import AirdropIMG from '../assets/images/Airdrop-03-03-2022.webp'
import InvestIMG from '../assets/images/Invest-03-03-2022.webp'
import DiscussIMG from '../assets/images/Discuss-03-03-2022.webp'
import RewardIMG from '../assets/images/Reward-03-03-2022.webp'
import WhatSignIMG from '../assets/images/-03-03-2022.webp'

export const RoadMap = () => {
  return (
    <div className='roadmap-section pb-24 overflow-hidden'>
        <div className="w-full max-w-siteWidth m-auto px-4">
            <div className="title pb-5">
                <img className='m-auto' src={roadMapIMG} alt="roadMapIMG" />
            </div>
            <div className="road-map-wrapper relative w-full">
                <div className="roadMap-item z-20 w-full flex justify-start pb-5">
                    <div className="w-full sm:w-1/2 pr-4 sm:pr-8 before-right relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2' src={MintIMG} alt="MintIMG" />
                            <p className='text-white text-[15px] textShadow'>On April 20th 2022, Dope Duck Club successfully sold out 777 NFTs. Only 737 remain as the rest were burned!</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-end pb-5">
                    <div className="w-full sm:w-1/2 sm:pl-8 pr-4 sm:pr-0 before-left relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2' src={AirdropIMG} alt="AirdropIMG" />
                            <p className='text-white text-[15px] textShadow'>We occasionally airdrop free crypto to our holders. We also run competitions, giveaways and promotions...</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-start pb-5">
                    <div className="w-full sm:w-1/2 pr-4 sm:pr-8 before-right relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2' src={InvestIMG} alt="InvestIMG" />
                            <p className='text-white text-[15px] textShadow'>50% of all profits from initial mint and 25% of profits from resale will be added to the community-driven Pension Pot. We will reinvest this money into IDO launches with Solanium, gaming & metaverse projects and more. See our Whitepaper for full details...</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-end pb-5">
                    <div className="w-full sm:w-1/2 sm:pl-8 pr-4 sm:pr-0 before-left relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2' src={DiscussIMG} alt="DiscussIMG" />
                            <p className='text-white text-[15px] textShadow'>Our newsletter, which is posted monthly on our website, will offer a financial statement outlining how much the Pension Pot is worth at that time, any gains or losses and all up-and-coming IDO opportunities for the month ahead. Holders often get to vote on our decisions and updates are posted in real-time on our Twitter and Discord...</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-start pb-5">
                    <div className="w-full sm:w-1/2 pr-4 sm:pr-8 before-right relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2' src={RewardIMG} alt="RewardIMG" />
                            <p className='text-white text-[15px] textShadow'>In 5 years, all funds accrued in the Pension Pot will be evenly distributed between Dope Duck Club NFT holders. The more Dope Ducks you own, the higher your share of the Pension Pot...</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-end">
                    <div className="w-full sm:w-1/2 sm:pl-8 pr-4 sm:pr-0 before-left before-last relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2' src={WhatSignIMG} alt="WhatSignIMG" />
                            <p className='text-white text-[15px] textShadow'>There's a lot more to the story which we can't reveal just yet. Keep your eyes peeled and your beaks polished.</p>
                        </div>
                    </div>
                </div>

                <div className="line absolute top-0 z-10 w-[11px] h-full bg-[#FF3C00] border-2 border-solid border-Dark shadow-Site left-full sm:left-1/2 -translate-x-full sm:-translate-x-1/2"></div>
            </div>
        </div>
        <div id='NewsLetter'></div>
    </div>
  )
}
