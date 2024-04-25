export default function About() {
  return (
    <div className="flex flex-col rounded-lg bg-white max-w-sm max-h-48 justify-center py-4 px-6 hover:bg-lavender">
      <h1 className="text-slateBlue text-2xl pb-1 font-medium">About</h1>
      <p>Program: Bachelor of Science in Computer Science</p>
      <p>School: Schiller International University</p>
      <p>Experience: 1.5-year experience as a Junior Developer</p>
      <p>Honors & Awards: Global Citizen Scholarship</p>
      <p>
        Motto:{" "}
        <span className="italic">
          &quot;If at first you don{"'t"} succeed, find out why.&quot;
        </span>
      </p>
    </div>
  );
}
