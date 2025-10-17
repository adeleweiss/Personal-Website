"use client"
import Navbar from '../navbar.jsx';
import { useState } from 'react';
import { PhoneArrowDownLeftIcon, EnvelopeIcon, } from '@heroicons/react/24/outline'
export default function Contact() {
  //form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //success data
  const [popup, setPopup] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted. data: ", { firstName, lastName, email, message });
    {/* send email to myself with form info */ }

    const res = await fetch("/.netlify/functions/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, message }),
    });

    if (res.ok) {
      setPopup({ type: 'success', text: 'Message sent successfully!' });
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } else {
      const errorData = await res.json();
      setPopup({ type: 'error', text: errorData.message || 'Failed to send message.' });
    }

    setTimeout(() => setPopup(null), 3000);
  }

  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="flex grid grid-cols-1 text-[#4B6274] font-semibold md:grid-cols-2 flex items-center justify-center "
      >
        <div className="flex flex-col m-10 bg-[#E4F2F8] p-10 rounded-sm">
          <div className="text-2xl font-bold text-[#4B6274] mb-2">
            Contact Me
          </div>
          <div className="flex items-center justify-start m-2">
            <div className='bg-[#F4A261] p-2 mr-3 rounded-4xl'>
              <PhoneArrowDownLeftIcon className="text-white size-10 p-1" />
            </div>
            <a className="cursor-pointer" href="tel:+12037229769" target="_blank">+1 (203)-722-9769</a>
          </div>
          <div className="flex items-center justify-start m-2">
            <div className='bg-[#F4A261] p-2 mr-3 rounded-4xl'>
              <EnvelopeIcon className="text-white size-10 p-1" />
            </div>
            <a className="cursor-pointer" href="mailto:adelesweiss1@gmail.com" target="_blank">adelesweiss1@gmail.com</a>
          </div>
          <div className="flex items-center justify-start m-2">
            <div className='bg-[#F4A261] p-2 mr-3 rounded-4xl'>
              <img className="text-white size-10 p-1" src="../images/InBug-White.png" alt="LinkedIn logo" />
            </div>
            <a className="cursor-pointer" href="https://linkedin.com/in/adele-weiss/" target="_blank">linkedin.com/in/adele-weiss/</a>
          </div>
          <div className="flex items-center justify-start m-2">
            <div className='bg-[#F4A261] p-2 mr-3 rounded-4xl'>
              <img className="text-white size-10 p-1" src="../images/github-mark-white.png" alt="Github logo" />
            </div>
            <a className="cursor-pointer" href="https://github.com/adeleweiss" target="_blank">github.com/adeleweiss</a>
          </div>

        </div>
        <form className="flex flex-col m-10 bg-[#E4F2F8] p-10 rounded-sm" onSubmit={handleSubmit}>
          <div className='text-2xl font-bold text-[#4B6274] mb-2'>
            Send Me a Message
          </div>
          <div className="flex grid grid-cols-2 items-center justify-start m-2">
            <input
              className='bg-white pl-2 mr-2 rounded-sm py-2'
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required />
            <input
              className='bg-white ml-2 pl-2 rounded-sm py-2'
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required />
          </div>
          <div className="flex items-center grid grid-cols-1 justify-start m-2 bg-white rounded-sm">
            <input
              className='bg-white pl-2 py-2'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>
          <div className="flex items-center justify-start m-2">
            <textarea
              placeholder="Message..."
              className='w-full pl-2 bg-white rounded-sm py-2'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required />
          </div>
          <button type="submit" className='cursor-pointer ml-auto m-2 bg-[#F4A261] text-white p-2 rounded-sm px-5'>Send</button>
          
        </form>
      </section>
      {popup && (
            <div
              className={`fixed bottom-5 right-5 p-3 rounded-lg text-white font-semibold shadow-lg transition-opacity ${
                popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {popup.text}
            </div>
          )}
    </div>
  );
}