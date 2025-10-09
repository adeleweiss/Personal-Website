'use client';
import { useState } from 'react';
import { Bars3Icon, DocumentTextIcon, ChatBubbleBottomCenterIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
export default function NavBar() {

    {/* sidebar state */}
    const [open, setOpen] = useState(false);

    return (
        <header className="flex flex-row justify-between nav p-1">

        {/* Medium screens and up */}
        <div>
          <a href="/" className="logo hidden md:flex ml-2">AW</a>
        </div>

        
        <div className="ml-auto flex gap-4 pt-1 text-large font-semibold hidden md:flex mr-2">
          <a href="/resume">Resume</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/contact" className="contact px-6 pt-0.5 mb-1">Contact Me!</a>
        </div>

        {/* Small screens and down, meant for mobile usage */}
       
        <Bars3Icon
            onClick={() => setOpen(true)}
            className="cursor-pointer size-8 flex md:hidden mr-auto ml-2 m-1"
        />
        
        {/* Overlay */}
      {open && (
        <div
          className="cursor-pointer fixed inset-0 bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-50 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        {/* Sidebar content */}
        <nav className="flex flex-col p-4  text-lg text-black">
            <div className="inline-flex items-center">
            <a href="/" className="logo text-black">AW</a>
            <XMarkIcon onClick={() => setOpen(false)} className="ml-auto  flex justify-end text-black heroicon-sw-3 cursor-pointer size-6"/>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-3 mt-2">
        <a href="/resume">Resume</a>
          <a href="/experience">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/contact" >Contact Me</a>
        </div>
        </nav>
        
      </div>
      
      </header>
    )
}