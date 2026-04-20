export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 border-b border-black/5 bg-[#F8F5F2]/90 px-6 py-4 backdrop-blur md:px-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-[#2E2330] md:text-2xl">
          Mirian
        </a>

        <div className="flex items-center gap-5 text-base font-medium text-[#4E4650] md:gap-8 md:text-lg">
          <a className="hover:text-[#9B5E75]" href="#about">
            About
          </a>
          <a className="hover:text-[#9B5E75]" href="#projects">
            Projects
          </a>
          <a className="hover:text-[#9B5E75]" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
