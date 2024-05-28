import About from "@/components/About";
import Definition from "@/components/Definition";
import DevProjects from "@/components/DevProjects";
import Skills from "@/components/Skills";
import Image from "next/image";
import HeartIcon from "../../public/assets/images/heart-50.png";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const DynamicPDF = dynamic(() => import("@/components/CV"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen p-10 lg:p-24 justify-evenly bg-frenchGray flex-col lg:flex-row">
        <div className="container max-w-3xl">
          <section className="flex">
            <p className="font-semibold text-5xl lg:text-6xl text-slateBlue">
              clarisse casi
            </p>
            <span className="flex self-center h-8 w-8 rounded-full bg-white hover:bg-lavender ml-4 active:animate-ping">
              <Image
                src={HeartIcon}
                width={18}
                height={18}
                alt="Heart Icon"
                className="m-auto aspect-square overflow-hidden rounded-full object-cover"
              />
            </span>
          </section>
          <p className="text-slateBlue pb-3 text-lg">
            {"["} kla-ris kah-see {"]"}
          </p>
          <hr className="my-2 border-black w-full" />
          <div className="pb-2" />
          <div className="rounded-full bg-white px-2 w-14">
            <p className="text-center text-slateBlue">noun</p>
          </div>
          <Definition />
          <DevProjects />
          <DynamicPDF />
        </div>
        <div className="flex flex-col space-y-8">
          <About />
          <Skills />
        </div>
      </main>
      <Footer />
    </>
  );
}
