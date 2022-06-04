import React from 'react';
import NewsIMG from '../assets/images/Newsletter-1-is-out-now-11-05-2022.webp';
import { PDFViewer } from './PDFViewer';
import NewsPDF from '../assets/MAY2022Newsletter.pdf';

export const Newsletter = () => {
  return (
    <div className='newsletter-section pb-20'>
        <div className="w-full max-w-[865px] m-auto px-4">
            <div className="bg-[rgba(175,213,86)] py-12 px-10 text-center overflow-hidden w-full rounded-[30px] h-full border-2 border-solid border-Dark shadow-Site">
                <img className='m-auto mb-5' src={NewsIMG} alt="NewsIMG" />
                <div className="pdf max-w-[400px] m-auto">
                    <PDFViewer file={NewsPDF} />
                </div>
                <a className='roadmap-bg py-2 px-14 text-[rgba(255,244,55)] rounded-full font-bold inline-block mt-6 border-2 border-solid border-Dark transition ease-in hover:bg-[rgba(255,244,55)] hover:text-Dark' download={true} href={NewsPDF}>Click here to download</a>
            </div>
        </div>
    </div>
  )
}
