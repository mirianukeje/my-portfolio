import Navbar from "@/components/navbar";
import Projects from "@/components/project";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] text-[#111111]">
      <Navbar />

      <section className="relative isolate overflow-hidden px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[#E8CCD7] blur-3xl md:h-72 md:w-72" />
        <div className="pointer-events-none absolute -right-20 top-16 h-64 w-64 rounded-full bg-[#D4DEE8] blur-3xl md:h-80 md:w-80" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7B6A74]">Mirian | UI/UX & Software Developer</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#231A26] md:text-6xl">
            Designing and building thoughtful digital experiences that feel simple and human.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5C5660] md:text-lg">
            I&apos;m Mirian, a UI/UX designer and software developer focused on building clear, accessible, and elegant digital experiences
            that help users move with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-[#9B5E75] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(155,94,117,0.35)] transition hover:translate-y-[-1px]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-[#C6B6BE] bg-white px-6 py-3 text-sm font-semibold text-[#4C3943] transition hover:bg-[#F8F1F4]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-black/5 bg-white/70 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#241A27] md:text-4xl">About Me</h2>
            <p className="mt-5 text-base leading-8 text-[#5A535D]">
              I combine design thinking, visual craft, and development to create intuitive digital products. My process starts with understanding
              user goals, then translating those insights into clear flows and polished, functional experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#F6EEF2] p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-[#7B6A74]">Focus</p>
              <p className="mt-2 text-lg font-semibold text-[#312434]">Product & User Experience</p>
            </div>
            <div className="rounded-2xl bg-[#EEF2F6] p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-[#5F6670]">Tools</p>
              <p className="mt-2 text-lg font-semibold text-[#2D343D]">Figma, TypeScript, React</p>
            </div>
            <div className="rounded-2xl bg-[#F6F1EC] p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-[#7B6954]">Strength</p>
              <p className="mt-2 text-lg font-semibold text-[#3A2F25]">Design + Development Integration</p>
            </div>
            <div className="rounded-2xl bg-[#EEF6F2] p-5">
              <p className="text-xs uppercase tracking-[0.15em] text-[#5E7468]">Approach</p>
              <p className="mt-2 text-lg font-semibold text-[#2A3A33]">User-first, iterative design</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#231A26] md:text-4xl">Featured Projects</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#5C5660]">
            A selection of product and interface work that blends strategy, interaction, and visual design to create meaningful and intuitive digital experiences.
          </p>

          <div className="mt-10">
            <Projects />
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 pt-10 md:px-10 md:pb-28">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#201A21] p-8 text-white md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let&apos;s Build Something Meaningful</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D7CFD8] md:text-base">
            If you&apos;re building a product and need a UI/UX designer and fullstack developer to design and build seamless user experiences,
            I&apos;d love to collaborate with you.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 text-sm">
            <a className="rounded-xl bg-white px-5 py-3 font-semibold text-[#1F1820]" href="mailto:mirian@example.com">
              ukejemirian@gmail.com
            </a>
            <a
              className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10"
              href="https://www.linkedin.com/in/mirian-ukeje-9122311a0"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
