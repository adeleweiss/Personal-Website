import Navbar from '../navbar.jsx';
import { PhoneArrowDownLeftIcon, EnvelopeIcon, } from '@heroicons/react/24/outline'
export default function Contact() {
  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 flex items-center justify-center "
      >
        <div className="flex flex-col m-10 bg-[#E4F2F8] p-10 rounded-sm">
          Contact Me
          <div className="flex items-center justify-start m-2">
            <PhoneArrowDownLeftIcon className="text-white size-13 bg-[#F4A261] rounded-xl p-2 mr-3" />
            <a className="cursor-pointer" href="tel:+12037229769" target="_blank">+1 (203)-722-9769</a>
          </div>
          <div className="flex items-center justify-start m-2">
            <EnvelopeIcon className="text-white size-13 bg-[#F4A261] rounded-xl p-2 mr-3" /> 
            <a className="cursor-pointer" href="mailto:adelesweiss1@gmail.com" target="_blank">adelesweiss1@gmail.com</a>
          </div>
          <div className="flex items-center justify-start m-2">
            <img className="text-white size-13 bg-[#F4A261] rounded-xl p-2 mr-3" src="../images/InBug-White.png" alt="LinkedIn logo" /> 
            <a className="cursor-pointer" href="https://linkedin.com/in/adele-weiss/" target="_blank">linkedin.com/in/adele-weiss/</a>
          </div>
          <div className="flex items-center justify-start m-2">
            <img className="text-white size-13 bg-[#F4A261] rounded-xl p-2 mr-3" src="../images/github-mark-white.png" alt="Github logo" /> 
            <a className="cursor-pointer" href="https://github.com/adeleweiss" target="_blank">github.com/adeleweiss</a>
          </div>

        </div>
        <div className="flex flex-col m-10 bg-[#E4F2F8] p-10 rounded-sm">
          Send Me a Message
          <div className="flex grid grid-cols-2 items-center justify-start m-2">
           <input className='bg-white pl-2 mr-2 rounded-sm py-2' type="text" placeholder="First Name" required/> 
           <input className='bg-white ml-2 pl-2 rounded-sm py-2' type="text" placeholder="Last Name" required/>
          </div>
          <div className="flex items-center justify-start m-2 bg-white rounded-sm">
           <input className='bg-white pl-2 py-2' type="email" placeholder="Email" required/>
          </div>
          <div className="flex items-center justify-start m-2">
           <textarea placeholder="Message..." className='w-full pl-2 bg-white rounded-sm py-2' required/>
          </div>
          <button className='ml-auto m-2 bg-[#F4A261] text-white p-2 rounded-sm px-5'>Send</button>
        </div>
      </section>
    </div>
  );
}