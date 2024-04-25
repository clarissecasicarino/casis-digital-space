import About from "@/components/About";
import Definition from "@/components/Definition";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen p-10 lg:p-24 justify-evenly bg-frenchGray flex-col lg:flex-row">
      <div className="container max-w-3xl">
        <p className="font-semibold text-5xl lg:text-6xl text-slateBlue">
          clarisse casi
        </p>
        <p className="text-slateBlue pb-3 text-lg">
          {"["} kla-ris kah-see {"]"}
        </p>
        <hr className="my-2 border-black w-full" />
        <div className="pb-2" />
        <div className="rounded-full bg-white px-2 w-14">
          <p className="text-center text-slateBlue">noun</p>
        </div>
        <Definition />
      </div>
      <div className="flex flex-col space-y-8">
        <About />
        <Skills />
      </div>
    </main>
  );
}
