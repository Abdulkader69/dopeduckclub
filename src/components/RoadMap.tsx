import React from 'react';
import roadMapIMG from '../assets/images/Roadmap-01-03-2022.webp'
import CommunityBuildUp from '../assets/images/CommunityBuildUp.png'
import Minting from '../assets/images/Minting.png'
import InitialRewards from '../assets/images/InitialRewards.png'
import P2EStakingGame from '../assets/images/P2EStakingGame.png'
// import RewardIMG from '../assets/images/Reward-03-03-2022.webp'
// import WhatSignIMG from '../assets/images/-03-03-2022.webp'

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
                            <img className='m-auto mb-2 w-full h-auto' src={CommunityBuildUp} alt="MintIMG" />
                            {/* <h2 className="roadMap-headline text-3xl font-bold text-[#fff537] textShadow mb-4">Community Build Up</h2> */}
                            <p className='text-white text-[15px] textShadow'>The deployment of our engaging earning system requires initial interest, which we plan to generate through the building of a strong community.<br/>
                            We’re eager to build a network of supporters that want to help us achieve our goals, and create something that we can all be proud of. Those that arrive early will be rewarded for their support.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-end pb-5">
                    <div className="w-full sm:w-1/2 sm:pl-8 pr-4 sm:pr-0 before-left relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2 w-full max-w-[130px] h-auto' src={Minting} alt="MintIMG" />
                            {/* <h2 className="roadMap-headline text-3xl font-bold text-[#fff537] textShadow mb-4">Minting</h2> */}
                            <p className='text-white text-[15px] textShadow'>Our mint will be split between a presale and public mint. Early supporters of our project will be rewarded with whitelist spots and guaranteed a mint of our genesis collection. The total supply of our collection will be 3333 NFTs. NFT variations will be revealed a week after mint, with the rarity scale decided by a combination of 10 trait categories, containing 60 total traits. A few lucky supporters will mint our 1/1 unique E.T. NFT’s, which are some of our rarest collectibles. When minting a E.T. you’ll instantly become a V.I.P. member of our community, getting exclusive benefits like winning 10 SOL monthly, free merchandise</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-start pb-5">
                    <div className="w-full sm:w-1/2 pr-4 sm:pr-8 before-right relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2 w-full max-w-[260px] h-auto' src={InitialRewards} alt="InvestIMG" />
                            {/* <h2 className="roadMap-headline text-3xl font-bold text-[#fff537] textShadow mb-4">Initial Rewards</h2> */}
                            <p className='text-white text-[15px] textShadow'>Before we initiate plans to build our platform, we’ll take the opportunity to give back to our holders as well as lucky members of our community.<br/>
                            We’ll give away 5 SOL to 10 lucky holders, as well as giving away a total of 100 SOL to random holder. We plan to continue rewarding our holders with giveaways at any given opportunity.</p>
                        </div>
                    </div>
                </div>
                <div className="roadMap-item z-20 w-full flex justify-end pb-5">
                    <div className="w-full sm:w-1/2 sm:pl-8 pr-4 sm:pr-0 before-left before-last relative">
                        <div className="item-content px-8 md:px-14 py-5 roadmap-bg text-center overflow-hidden rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                            <img className='m-auto mb-2 w-full max-w-[280px] h-auto' src={P2EStakingGame} alt="DiscussIMG" />
                            {/* <h2 className="roadMap-headline text-3xl font-bold text-[#fff537] textShadow mb-4">P2E Staking Game</h2> */}
                            <p className='text-white text-[15px] textShadow'>One month after mint, we’ll release our play-to earn game on our website, called Planet X, which will be designed to reward our holders for playing through a passive income stream. Planet X is a staking play-to earn game which consists of staking your Xtra Terrestrials for SOL as a reward. As a team, we are looking forward to a +100% APY. As soon as you stake your NFT’s sit back, relax and watch it take life on Planet X.<br />
                            The rarity of your NFT will determine how much you’ll be able to generate, with 1/1 NFTs and our exclusive ETs yielding the most profits. We would like our game to be fun and engaging, and provide users with an experience like no other on the project on the Solana Blockchain.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="roadMap-item z-20 w-full flex justify-start pb-5">
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
                </div> */}

                <div className="line absolute top-0 z-10 w-[11px] h-full bg-[#FF3C00] border-2 border-solid border-Dark shadow-Site left-full sm:left-1/2 -translate-x-full sm:-translate-x-1/2"></div>
            </div>
        </div>
        <div id='NewsLetter'></div>
    </div>
  )
}
