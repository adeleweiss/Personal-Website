'use client';
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { AcademicCapIcon, BuildingOffice2Icon  } from '@heroicons/react/24/outline'
import { useState } from "react";
import Navbar from './navbar.jsx';

export default function Home() {

  return (
    <div>
      <Navbar/>
      <section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 flex justify-items-center bg-[#E4F2F8]"
      >
        <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
          <h1 className="text-6xl text-center font-bold text-[#4B6274]">Adele Weiss</h1>
          <h3 className="text-xl text-[#757575]">Software Developer</h3>
        </div>
        
          <img
            src="/images/headshot.png"
            alt="Headshot of Adele Weiss"
            className="object-contain max-h-screen"
          />

      

      </section>

      <section
        id="about"
        className="justify-center bg-white"
      >
        <img
          src="/images/uw-crest.png"
          alt="UW Crest"
          className="max-w-20 max-h-20 object-contain m-auto my-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 flex gap-6 md:pt-6 md:m-10 m-3">
          <div className="flex max-w-160 max-h-160 items-start justify-center m-10">
            <img
              src="/images/DSC_0591.jpg"
              alt="Graduation photo of Adele"
              className="max-h-160 object-contain flex md:shadow-[-3em_3em_0px_0px_#0077B6] rounded outline-10 outline-[#0077B6] md:outline-none"
            />
          </div>
          <div className="justify-center mx-5 flex flex-col">
            <div className="">
            <h2 className="md:text-6xl text-4xl font-semibold text-[#4B6274] flex justify-center">Who am I?</h2>
            <br></br>
            <p className="text-xl">My name is Adele. I am 22 years old and I recently graduated from the University of Wisconsin-Madison with a bachelors of science in Computer Science.
            </p>
            <br></br>
            <p className="text-xl">I have two internship experiences. </p>
            <div className="md:flex justify-items-center items-center mt-5">
              <img src="/images/OnRed.png" 
              className="size-14 rounded-4xl mb-5 mr-5"
              alt="Wisconsin logo"/> 
              <p className="text-lg">A year long internship as a student Full Stack Developer with Wisconsin Athletics. I learned how to develop in an agile environment and take on projects of my own for the company&apos;s internal employee website. I balanced work and academics. </p>
            </div>
            <div className="md:flex justify-items-center items-center mt-5">
              <img src="/images/imanage.png" className="size-14 rounded-4xl mb-5 mr-5" alt="iManage logo"/> 
              <p className="text-lg">Three month program with iManage as a Front-end Developer Intern. Worked alongside the automation team, then created a fullstack extension for the company product implementing realtime notifications.</p>
            </div>
            </div>
            <br></br>
            <a href="/experience" className="mb-10 mt-5">
              <h1 className="experience p-2 text-center text-2xl font-bold text-white">Learn more about my experiences</h1>
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="flex bg-[#E4F2F8] md:pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap md:gap-6 md:m-10 m-3">
          <div className="justify-center mx-5" >
            <h2 className="md:text-5xl text-3xl font-semibold text-[#4B6274] flex justify-center">What I&apos;ve Done</h2>
            <br></br>
            <p className="text-xl">I have worked on serveral projects, here are a few of my favorites.
            </p>
            <br></br>
            <div className="">
            <p className="text-xl font-semibold">Bias Busters </p> <p className="text-lg">Allows users to search for an article and display sentiments from positive to negative and liberal to conservative using machine learning and natural language processing. A hackathon collaboration with three teammates completed in 24 hours.  </p>
            </div>
            <div className="mt-5 mb-5">
            <p className="text-xl font-semibold">Chore Assigner</p> <p className="text-lg">Randomly assigns chores to roommates every two weeks. Tracks if chores have been completed and if they haven’t, it sends an email reminder to the assigned user. </p>
            </div>
            <a href="/projects" className="">
              <h1 className="experience p-2 text-center text-2xl font-bold text-white">Discover my other projects</h1>
            </a>
            <br></br>
          </div>
          <div className="flex max-w-160 max-h-screen items-center m-10">
            <img
              src="/images/DSC_0866.jpg"
              alt="Photo of Adele"
              className="w-full h-auto object-contain flex justify-center md:shadow-[3em_-3em_0px_0px_#0077B6] md:shadow-[-3em_3em_0px_0px_#0077B6] rounded outline-10 outline-[#0077B6] md:outline-none"
            />

          </div>
        </div>
      </section>

      <section
        id="personal"
        className="flex bg-white md:pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap md:gap-6 md:m-10 m-3">
          
          <div className="flex max-w-160 max-h-screen items-center m-10">
            <img
              src="/images/IMG_1917.jpg"
              alt="Photo of Adele and her dog"
              className="w-full h-auto object-contain flex justify-center md:shadow-[-3em_3em_0px_0px_#0077B6] md:shadow-[-3em_3em_0px_0px_#0077B6] rounded outline-10 outline-[#0077B6] md:outline-none"
            />

          </div>
          <div className="justify-center mx-5" >
            <h2 className="md:text-5xl text-3xl font-semibold text-[#4B6274] flex justify-center">What I&apos;m Doing</h2>
            <br></br>
            <p className="text-xl">For almost a year now I have been working at Whole Foods Market as a cook! Although cooking is just a hobby/passion of mine this past year has taught me a lot about leadership and personal responsibility when it comes to a workplace environment.
            </p>
            <br></br>
            <div className="">
            <p className="text-xl">This past summer I took a trip to Europe to celebrate my graduation with my best friend. We visited several cities in Greece, Italy, France and Spain.</p>
            </div>
            <br></br>
            <div className="">
            <p className="text-xl">Now I spend my time between Madison WI, Chicago and Connecticut. There&apos;s always a project that I&apos;m working on, ask me what I&apos;m doing now!</p>
            </div>
            <br></br>
            <a href="/contact" className="">
              <h1 className="experience p-2 text-center text-2xl font-bold text-white">Lets Chat!</h1>
            </a>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
}
