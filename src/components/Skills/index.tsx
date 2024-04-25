export default function Skills() {
  const skills = [
    "Full Stack Development",
    "React.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "Flutter",
    "React Native",
    "Next.js",
    "AWS",
    "Tailwind CSS",
    "Responsive design",
    "API Development",
    "Leadership",
    "Problem-Solving",
    "Collaboration",
    "Time Management",
  ];

  return (
    <div className="flex rounded-lg bg-white max-w-sm max-h-min p-4 hover:bg-lavender py-4 px-6">
      <div className="flex-col">
        <h1 className="text-slateBlue text-2xl pb-2 font-medium">Skills</h1>
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {skills.map((title, index) => (
            <Capsule key={index} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Capsule({ title }: { title: string }) {
  return (
    <div className="bg-slateBlue rounded-full lg:text-8 text-center px-2 text-white font-light">
      {title}
    </div>
  );
}
