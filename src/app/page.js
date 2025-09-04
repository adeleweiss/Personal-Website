import Image from "next/image";

export default function Home() {
  return (
    <div>
    <header className="flex flex-row justify-between nav px-4 py-1 sticky top-0">
      
      <div>
        <a href="/" className="logo">AW</a> 
      </div>

      <div className="ml-auto flex space-x-15 pt-1 text-large font-semibold">
        <a href="/resume">Resume</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/contact" className="contact px-6 pt-0.5 mb-1">Contact Me!</a>
      </div>
    </header>

    
    <section
        id="hero"
        className="h-screen flex flex-row items-center justify-center bg-[#E4F2F8]"
      >
        <h1 className="p-10 text-5xl font-bold text-[#4B6274]">Adele Weiss</h1>
        <img
          src="/images/headshot.png"
          alt="Headshot of Adele Weiss"
          className="max-w-full max-h-screen object-contain"
        />
        
      </section>

      <section
        id="about"
        className="h-screen justify-center bg-white"
      >
        <img
          src="/images/uw-crest.png"
          alt="Flexible image"
          className="max-w-20 max-h-20 object-contain m-auto my-5"
        />
        <div className="grid grid-cols-2 flex gap-6 pt-6">
          <div className="flex items-center justify-center">
        <img
          src="/images/DSC_0591.jpg"
          alt="Flexible image"
          className="max-w-full max-h-160 flex justify-center shadow-[-3em_3em_0px_0px_#0077B6]" 
        />
        </div>
        <h2 className="text-4xl font-semibold text-[#4B6274] flex justify-center">Who am I?</h2>
        </div>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-[#E4F2F8]"
      >
        <h2 className="text-4xl font-semibold text-[#4B6274]">My Projects</h2>
      </section>
    </div>
  );
}
