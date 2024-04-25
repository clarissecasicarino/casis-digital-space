import Image from "next/image";
import ArrowIcon from "../../../public/assets/images/arrow-64.png";

export default function DevProjects() {
  return (
    <>
      <div className="border-2 border-slateBlue my-4 w-24 p-1 bg-lavender">
        <h1 className="text-xl font-medium text-slateBlue text-center">
          Projects
        </h1>
      </div>
      <div className="mb-6 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left">
        <a
          href="https://mamma-mia-tours.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-lavender"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-slateBlue">
            Mamma Mia Tours
          </h2>
          <p className="m-0 max-w-[50ch] text-sm">
            A project aimed to highlight my improved frontend skills. This is a
            Travel Agency website developed using Next.js, React, TypeScript,
            and Prismic CMS.
          </p>
          <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <Image
              src={ArrowIcon}
              width={50}
              height={50}
              alt="Arrow Icon"
              className="aspect-square overflow-hidden object-cover"
            />
          </div>
        </a>

        <a
          href="https://emporium-delta.vercel.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-400 hover:bg-lavender"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-slateBlue">
            Emporium Shopping Website
          </h2>
          <p className="m-0 max-w-[50ch] text-sm">
            A full stack e-commerce platform developed using MERN Stack
            (MongoDB, Express, React.js, Node.js).
          </p>
          <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <Image
              src={ArrowIcon}
              width={50}
              height={50}
              alt="Arrow Icon"
              className="aspect-square overflow-hidden object-cover"
            />
          </div>
        </a>
      </div>
    </>
  );
}
