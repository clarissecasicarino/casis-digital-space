export default function About() {
  return (
    <div className="flex flex-col rounded-lg bg-white max-w-sm max-h-min justify-center py-4 px-6 hover:bg-lavender">
      <h1 className="text-slateBlue text-2xl pb-1 font-medium">About</h1>
      <p>Program: Bachelor of Science in Computer Science</p>
      <p>School: Schiller International University</p>
      <p>Experience: 1 1/2 years as a Full Stack Developer</p>
      <p>Languages Spoken: English (native), Tagalog (native), French (basic)</p>
      <p>
        Motto:{" "}
        <span className="italic">
          &quot;If at first you don{"'t"} succeed, find out why.&quot;
        </span>
      </p>
    </div>
  );
}
