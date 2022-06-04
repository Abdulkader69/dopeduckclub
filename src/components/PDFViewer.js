import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer = ({file}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    // const [scale, setScale] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="relative overflow-hidden">
            <div className="navigation w-full z-20 flex items-center justify-center bg-white py-2">
                <button
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                    className="h-[32px] w-[44px] border border-solid border-[#337ab7]/20 flex items-center justify-center rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#337ab7" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <p className="h-[32px] px-5 border border-solid border-[#337ab7]/20 flex items-center justify-center rounded-full mx-2 text-sm">
                    {pageNumber} / {numPages}
                </p>
                <button
                    disabled={pageNumber === numPages}
                    onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                    className="h-[32px] w-[44px] border border-solid border-[#337ab7]/20 flex items-center justify-center rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#337ab7" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            {/* <button onClick={() => setScale((s) => s + 1)}>Zoom In</button>
            <button onClick={() => setScale((s) => s - 1)}>Zoom Out</button> */}
            <div id="container" style={{ width: "100%" }}>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page
                    // scale={scale}
                    width={document.querySelector("#container")?.offsetWidth}
                    renderAnnotationLayer={false}
                    pageNumber={pageNumber}
                />
                </Document>
            </div>
        </div>
    )
}
