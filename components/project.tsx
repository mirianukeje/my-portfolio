import Image from "next/image";

type ProjectCardProps = {
  title: string;
  summary: string;
  tags: string[];
  image: string;
};

function ProjectCard({ title, summary, tags, image }: ProjectCardProps) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
      <div className="mb-5 overflow-hidden rounded-2xl border border-black/5">
        <Image
          src={image}
          alt={`${title} project preview`}
          width={1200}
          height={800}
          className="h-44 w-full object-cover transition duration-300 hover:scale-[1.02]"
        />
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5C5660]">{summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-[#D6CDD2] bg-[#F8F4F6] px-3 py-1 text-xs font-medium text-[#5E4753]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

const projects = [
  {
    title: "Recipe Bud",
    summary:
      "A recipe discovery and meal planning app designed to help users find, save, and cook meals effortlessly.",
    tags: ["HTML", "CSS", "JavaScript", "API Integration"],
    image: "/images/project.png"
  },
  {
    title: "Handcrafted Haven",
    summary:
      "A design-focused concept for a handcrafted products platform, centered on creating a warm, inviting, and visually engaging user experience.",
    tags: ["Next.js", "TypeScript", "Prisma", "Database", "GitHub"],
    image: "/images/project.png"
  },
];

export default function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          summary={project.summary}
          tags={project.tags}
          image={project.image}
        />
      ))}
    </div>
  );
}
