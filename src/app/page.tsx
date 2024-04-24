import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex-col">
        <p className="font-semibold text-5xl lg:text-6xl text-slateBlue">
          clarisse casi
        </p>
        <p className="text-slateBlue pb-3 text-lg">
          {"["} kla-ris kah-see {"]"}
        </p>
        <hr className="h-0.5 bg-black w-96" />
        <div className="pb-4" />
        <div className="rounded-full bg-white px-2 w-14">
          <p className="text-center text-slateBlue">noun</p>
        </div>
      </div>
    </main>
  );
}
