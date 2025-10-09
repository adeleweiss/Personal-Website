'use client';
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useState } from "react";
import Navbar from './navbar.jsx';

export default function Home() {

  return (
    <div>
      <Navbar/>
      <section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 flex items-center justify-center bg-[#E4F2F8]"
      >
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-6xl text-center font-bold text-[#4B6274]">Adele Weiss</h1>
          <h3 className="text-xl text-[#757575]">Software Developer</h3>
        </div>
        <div>
          <img
            src="/images/headshot.png"
            alt="Headshot of Adele Weiss"
            className="object-contain justify-center"
          />

        </div>

      </section>

      <section
        id="about"
        className="justify-center bg-white"
      >
        <img
          src="/images/uw-crest.png"
          alt="Flexible image"
          className="max-w-20 max-h-20 object-contain m-auto my-5"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 flex gap-6 pt-6 mb-10 m-10">
          <div className="flex max-w-160 max-h-160 items-start justify-center m-10">
            <img
              src="/images/DSC_0591.jpg"
              alt="Flexible image"
              className="max-h-160 object-contain flex md:shadow-[-3em_3em_0px_0px_#0077B6]"
            />
          </div>
          <div className="justify-center mx-5 flex flex-col">
            <div className="flex-grow">
            <h2 className="text-6xl font-semibold text-[#4B6274] flex justify-center">Who am I?</h2>
            <br></br>
            <p className="text-xl">My name is Adele. I am 22 years old and I recently graduated from the University of Wisconsin-Madison with a bachelors of science in Computer Science.
            </p>
            <br></br>
            <p className="text-xl">I have two previous internship experiences. My first was with Wisconsin Athletics as a Full-Stack Developer.
              My second was with iManage in Chicago as a Front-End Developer. </p>
            </div>
            <br></br>
            <a href="/experience" className="mb-10">
              <h1 className="experience p-2 text-center text-2xl font-bold text-white">Read more about my experience</h1>
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="flex bg-[#E4F2F8] pt-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap gap-6 pt-6 m-10">
          <div className="justify-center mx-5" >
            <h2 className="text-5xl font-semibold text-[#4B6274] flex justify-center">Life before Madison</h2>
            <br></br>
            <p className="text-xl">My name is Adele. I am 22 years old and I recently graduated from the University of Wisconsin-Madison with a bachelors of science in Computer Science.
            </p>
            <br></br>
            <p className="text-xl">I have two previous internship experiences. My first was with Wisconsin Athletics as a Full-Stack Developer.
              My second was with iManage in Chicago as a Front-End Developer. </p>
            <br></br>
          </div>
          <div className="flex max-w-160 max-h-screen items-start m-10">
            <img
              src="/images/DSC_0866.jpg"
              alt="Flexible image"
              className="w-full h-auto object-contain flex justify-center md:shadow-[3em_-3em_0px_0px_#0077B6]"
            />

          </div>
        </div>
      </section>
    </div>
  );
}
