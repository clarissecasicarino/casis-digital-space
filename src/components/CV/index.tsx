import React from "react";
import Link from "next/link";
import englishCV from "../../../public/pdfs/carino_english_cv.pdf";
import frenchCV from "../../../public/pdfs/carino_english_cv.pdf";

export default function CV() {
  return (
    <>
      <Link href={englishCV} className="flex h-12" target="_blank" rel="noreferrer">
        Peruse Casi{"'"}s English CV
      </Link>
      <Link href={frenchCV} target="_blank" rel="noreferrer">
        Consultez le CV français de Casi
      </Link>
    </>
  );
}
