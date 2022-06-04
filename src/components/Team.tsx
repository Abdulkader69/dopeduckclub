import Ads3 from '../assets/images/ads2.gif'
import teamIMG from '../assets/images/Team-01-03-2022.webp';
import IMG1 from '../assets/images/Doxxed-and-verified-by-09-04-2022.webp';
import IMG2 from '../assets/images/logo-white.webp';
import Team1 from '../assets/images/DADDUCK.webp';
import Team2 from '../assets/images/teamArtist.webp';
import Team3 from '../assets/images/marketingJackduck.webp';
import Team4 from '../assets/images/executive.webp';
import TeamName1 from '../assets/images/J-D-Crypto-Founder.webp';
import TeamName2 from '../assets/images/DeeDeeNFT-Artist.webp';
import TeamName3 from '../assets/images/JXCK-Marketing-Manager.webp';
import TeamName4 from '../assets/images/SOLMAN-Marketing-Executive.webp';

export const Team = () => {
  return (
    <>
        <div className='team-section pb-11'>
            <div className="w-full max-w-siteWidth m-auto px-4">
                <img className='m-auto mb-5' src={teamIMG} alt="teamIMG" />
                <div className="link mb-8">
                    <a className='bg-[rgba(175,213,86)] flex items-center w-max m-auto py-2 px-12 rounded-full font-bold mt-6 border-2 border-solid border-Dark shadow-Site' href="/">
                        <img src={IMG1} alt="IMG1" />
                        <img src={IMG2} alt="IMG2" />
                    </a>
                </div>
                <div className="team-wrapper w-full max-w-[555px] m-auto">
                    <div className="item flex flex-wrap justify-between mb-10">
                        <div className="img w-[175px] h-[175px] flex rounded-[30px] overflow-hidden border-2 border-solid border-Dark shadow-Site">
                            <img className='w-full h-full object-cover' src={Team1} alt="Team1" />
                        </div>
                        <div className="w-[calc(100%-200px)] px-14 roadmap-bg text-center overflow-hidden rounded-[30px] border-2 border-solid border-Dark shadow-Site flex items-center justify-center h-[175px]">
                            <div className='inner'>
                                <img className='m-auto mb-2' src={TeamName1} alt="TeamName1" />
                                <a className='roadmap-bg py-2 px-14 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="/">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="item flex flex-wrap justify-between mb-10">
                        <div className="img w-[175px] h-[175px] flex rounded-[30px] overflow-hidden border-2 border-solid border-Dark shadow-Site">
                            <img className='w-full h-full object-cover' src={Team2} alt="Team2" />
                        </div>
                        <div className="w-[calc(100%-200px)] px-14 py-8 roadmap-bg text-center overflow-hidden rounded-[30px] border-2 border-solid border-Dark shadow-Site flex items-center justify-center h-[175px]">
                            <div className='inner'>
                                <img className='m-auto mb-2' src={TeamName2} alt="TeamName2" />
                                <a className='roadmap-bg py-2 px-14 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="/">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="item flex flex-wrap justify-between mb-10">
                        <div className="img w-[175px] h-[175px] flex rounded-[30px] overflow-hidden border-2 border-solid border-Dark shadow-Site">
                            <img className='w-full h-full object-cover' src={Team3} alt="Team3" />
                        </div>
                        <div className="w-[calc(100%-200px)] px-14 py-8 roadmap-bg text-center overflow-hidden rounded-[30px] border-2 border-solid border-Dark shadow-Site flex items-center justify-center h-[175px]">
                            <div className='inner'>
                                <img className='m-auto mb-2' src={TeamName3} alt="TeamName3" />
                                <a className='roadmap-bg py-2 px-14 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="/">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="item flex flex-wrap justify-between mb-10">
                        <div className="img w-[175px] h-[175px] flex rounded-[30px] overflow-hidden border-2 border-solid border-Dark shadow-Site">
                            <img className='w-full h-full object-cover' src={Team4} alt="Team4" />
                        </div>
                        <div className="w-[calc(100%-200px)] px-14 py-8 roadmap-bg text-center overflow-hidden rounded-[30px] border-2 border-solid border-Dark shadow-Site flex items-center justify-center h-[175px]">
                            <div className='inner'>
                                <img className='m-auto mb-2' src={TeamName4} alt="TeamName4" />
                                <a className='roadmap-bg py-2 px-14 text-[rgba(255,244,55)] rounded-full font-bold inline-block border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' href="/">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ads w-full max-w-siteWidth m-auto px-4">
            <img className='w-full' src={Ads3} alt="Ads3" />
        </div>
    </>
  )
}
