"use client";
import Navbar from '../navbar.jsx';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const projects = [
  {
    title: "Bias Busters",
    description: "A Hackathon creation to analyze bias in articles.",
    fullDescription:
      "Bias Busters takes an article URL or allows users to search by keyword to analyze the sentiment of the article. Once an article is selected or searched the application will tell the user if the article is deemed left or right politically and positive or negative sentiment with two sliders to help the user visualize where the article lands on the two spectrums. There is also a graph created of similar articles to allow the user to see how their article compares to others on the same spectrums. The user can select these articles or search for a new one. We created this application in 24 hours during a Hack-a-thon. I did a majority of the front end, using react, react-bootstrap and motion. The backend was created with machine learning and natural language processing with python and pickle.",
    image: "/images/BiasBusters.png",
    tech: ["React", "Bootstrap", "Python", "Pickle"],
    github: "https://github.com/adeleweiss/Bias_Busters",
    demovideo: "https://drive.google.com/file/d/1ooYhsmjYOpIJcJf1KnovuwHlYpKaSteD/view?resourcekey",
    //demo: "https://adeleweiss.netlify.app",
  },
  {
    title: "Chore Tracker",
    description: "Automatically assigns and tracks chores using React, Node.js, and MongoDB.",
    fullDescription:
      "Chore Tracker helps roommates and families stay organized. Completed chores are reshuffled every two weeks using a fair algorithm, where chores are rarely repeated back to back. Users are emailed their new chores after they are shuffled, and are given a warning when they have uncompleted chores close to the reshuffle date. Users can add chores to the chores list, and can view chores based on the assigned area, chores that are assigned to them, and all chores. Built with React for the frontend, Node.js/Express for the backend, and MongoDB for data persistence.",
    image: "/images/Chore_Tracker.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/adeleweiss/Chores",
    //demo: "https://choretracker.netlify.app",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    fullDescription:
      "This is the website you are currently viewing! I built this website using React, tailwind and Next.js. I made this website to make it easier for people to get to know me and what I do on a personal level past a simple resume. You have the option to read in depth about my professional experience and projects, as well as the option to message me directly from the contact page. I deploy this site on Netlify.",
    image: "/images/portfolio.png",
    tech: ["React", "Next.js", "Tailwind", "Resend"],
    github: "https://github.com/adeleweiss/Personal-Website",
    demo: "https://adeleweiss.netlify.app",
  },

];

export default function Projects() {

  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-[#E4F2F8] min-h-screen text-[#4B6274]">
      <Navbar />
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layoutId={`card-${index}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-400 hover:scale-110 cursor-pointer overflow-hidden"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <p className="mt-2 text-[#F4A261] text-sm font-semibold">Learn more</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Fullscreen View */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 fixed inset-0 backdrop-blur-md bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                layoutId={`card-${projects.indexOf(selected)}`}
                className="bg-white rounded-2xl shadow-xl max-w-5xl h-[90%] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // prevent closing on inner click
              >
                <button
                  className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-[55%] object-cover rounded-t-2xl"
                />

                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-3">{selected.title}</h2>
                  <p className="text-gray-700 text-lg mb-4">{selected.fullDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm bg-[#F4A261] text-white px-4 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={selected.github}
                      target="_blank"
                      className="text-[#4B6274] font-semibold hover:underline"
                    >
                      Check out the Github
                    </a>
                    {selected.demo && (
                      <a
                        href={selected.demo}
                        target="_blank"
                        className="text-[#F4A261] font-semibold hover:underline"
                      >
                        Live Demo →
                      </a>
                    )}
                    {selected.demovideo && (
                      <a
                        href={selected.demovideo}
                        target="_blank"
                        className="text-[#F4A261] font-semibold hover:underline"
                      >
                        View Demo Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}