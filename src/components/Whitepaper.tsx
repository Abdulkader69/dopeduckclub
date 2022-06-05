import { PDFViewer } from './PDFViewer';
import WhitePaperIMG from '../assets/images/Whitepaper-01-03-2022.webp';
import whitePaperPDF from '../assets/sample.pdf';
import Ads2 from '../assets/images/ads2.gif'

export const Whitepaper = () => {
  return (
    <>
        <div className='whitepaper-section pb-11 overflow-hidden'>
            <div className="w-full max-w-siteWidth m-auto px-4">
                <img className='m-auto mb-5' src={WhitePaperIMG} alt="WhitePaperIMG" />
                <div className="pdf max-w-[545px] m-auto bg-Dark md:px-5 md:py-4">
                    <PDFViewer file={whitePaperPDF} />
                </div>
            </div>
        </div>
        <div id="Team"></div>
        <div className="ads pb-16 w-full max-w-siteWidth m-auto px-4">
            <img className='w-full' src={Ads2} alt="Ads2" />
        </div>
    </>
  )
}
