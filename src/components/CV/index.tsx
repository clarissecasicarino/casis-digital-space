"use client";
import { ReactElement, useState } from "react";
import EnglishCV from "../../app/pdfs/carino-cv-e.pdf";
import FrenchCV from "../../app/pdfs/carino-cv-f.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CV(): ReactElement {

  const handleEnglishCVDownload = async () => {
    try {
      const response = await fetch(EnglishCV);
      const blob = await response.blob();
      const pdfURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = pdfURL;
      link.download = "Carino_English_CV.pdf"; // Specify the file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfURL);
    } catch (error) {
      console.error("Error downloading the PDF", error);
    }
  };

  const handleFrenchCVDownload = async () => {
    try {
      const response = await fetch(FrenchCV);
      const blob = await response.blob();
      const pdfURL = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = pdfURL;
      link.download = "Carino_French_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfURL);
    } catch (error) {
      console.error("Error downloading the PDF", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-evenly lg:justify-around lg:space-x-4 text-white space-y-10 lg:space-y-0 items-center py-10">
      {/* ENGLISH CV */}
      <div>
        <button
          onClick={handleEnglishCVDownload}
          className="rounded-full bg-slateBlue px-4 py-1 hover:bg-russianViolet"
        >
          Download English CV
        </button>
      </div>
      {/* FRENCH CV */}
      <div>
        <button
          onClick={handleFrenchCVDownload}
          className="rounded-full bg-slateBlue px-4 py-1 hover:bg-russianViolet"
        >
          {"Télécharger CV Français"}
        </button>
      </div>
    </div>
  );
}
