import Navbar from '../navbar.jsx';
export default function Experience() {
  const wisconsinTech = ["ASP.NET", "MVC", "Entity Framework", "Bootstrap", "HTML", "CSS", "Microsoft SQL"];
  const imanage = ["Python", "Selenium", "HTML", "CSS", "Bootstrap", "JQuery", "Javascript", "ASP.NET", "Entity Framework", "SignalR", "Azure"];
  return (
    <div className="bg-[#E4F2F8] min-h-screen text-[#4B6274]">
    <Navbar/>
    <section className="px-8 py-16 max-w-10xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-center">My Professional Experience</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 flex gap-6 md:pt-6 md:m-5 m-3">
          
          <div className="justify-center flex flex-col ">
            <div className="">
            <h2 className="text-2xl font-semibold">Wisconsin Athletics - Full Stack Developer Student Intern (May 2023-May 2024)</h2>
            <br></br>
            <p className="text-xl">I started my first internship in May of 2023 with Wisconsin athletics as a Full-stack developer. 
            </p>
            <br></br>
            <p className="text-xl font-bold">Overview:</p>
            <p className="text-xl"> I built and maintained parts of the internal company website. I collaborated with senior developers as well as other interns. 
            </p>
            <br></br>
            
            <p className="text-xl font-bold">Tech Stack:</p>

            <div className="flex flex-wrap gap-2 mb-6">
                    {wisconsinTech.map((t) => (
                      <span
                        key={t}
                        className="text-sm bg-[#F4A261] text-white px-4 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
            <p className="text-xl font-bold">What I learned:</p>
            <p className="text-xl"> How to develop in an agile environment with independent portions of the project with deadlines. Each day we had standup meetings where we shared our progress and got feedback from our mentors. I learned how to be independent while developing and sticking to deadlines in a professional environment. 
            </p>
            <br></br>

            </div>
          </div>
          <div className="flex max-w-160 max-h-160 items-start justify-center m-10">
            <img
              src="/images/Camp-Randall.webp"
              alt="Photo of Camp Randall"
              className="max-h-160 object-contain flex lg:shadow-[2em_-2em_0px_0px_#0077B6] rounded outline-10 outline-[#0077B6] lg:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 flex gap-6 md:pt-6 md:m-5 m-3">

        <div className="flex max-w-160 max-h-160 items-start justify-center m-10">
            <img
              src="/images/internship_photo.jpeg"
              alt="Photo of interns of iManage 2024"
              className="max-h-160 object-contain flex lg:shadow-[-2em_2em_0px_0px_#0077B6] rounded outline-10 outline-[#0077B6] lg:outline-none"
            />
          </div>
          
          <div className="justify-center flex flex-col ">
            <div className="">
            <h2 className="text-2xl font-semibold">iManage - Front-end Developer Intern (June 2024-August 2024)</h2>
            <br></br>
            <p className="text-xl">My second internship was with iManage in Chicago. In the first half of the internship I worked with the automation team where we developed automated tests for the front-end of the product. The second half is when I collaborated with my fellow intern to develop a proof of concept extension for the company product, integrating real time notifications and messages for users. 
            </p>
            <br></br>
            <p className="text-xl font-bold">Overview:</p>
            <p className="text-xl"> I collaborated with the test automation team, and then built an extension for the company product.  
            </p>
            <br></br>
            
            <p className="text-xl font-bold">Tech Stack:</p>

            <div className="flex flex-wrap gap-2 mb-6">
                    {imanage.map((t) => (
                      <span
                        key={t}
                        className="text-sm bg-[#F4A261] text-white px-4 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
            <p className="text-xl font-bold">What I learned:</p>
            <p className="text-xl"> My most important takeaway from this internship is collaboration. I often ran into tough moments when developing but learning to collaborate with either other interns or senior developers and meteors helped me grow and understand the team mindset when it comes to developing a product. 
            </p>
            <br></br>

            </div>
          </div>
          </div>
        </section>
    </div>
  );
}