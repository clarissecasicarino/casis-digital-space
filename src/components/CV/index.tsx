"use client";
import { useState } from "react";
import EnglishCV from "../../app/pdfs/carino-cv-e.pdf";
import FrenchCV from "../../app/pdfs/carino-cv-f.pdf";
import { pdfjs, Document, Page } from "react-pdf";
import styles from "./styles.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CV() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showEnglishCV, setShowEnglishCV] = useState<boolean>(false);
  const [showFrenchCV, setShowFrenchCV] = useState<boolean>(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-evenly lg:justify-around lg:space-x-4 text-white space-y-10 lg:space-y-0 items-center py-16">
      <div>
        <button
          onClick={() => setShowEnglishCV(!showEnglishCV)}
          className="rounded-full bg-slateBlue px-4 py-1"
        >
          {showEnglishCV ? "Hide English CV" : "Show English CV"}
        </button>
        {showEnglishCV && (
          <div className={`${styles["pdf-container"]}`}>
            <Document file={EnglishCV} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowFrenchCV(!showFrenchCV)}
          className="rounded-full bg-slateBlue px-4 py-1"
        >
          {showFrenchCV ? "Conceal French CV" : "Reveal French CV"}
        </button>
        {showFrenchCV && (
          <div className={`${styles["pdf-container"]}`}>
            <Document file={FrenchCV} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
}
