'use client';
import Navbar from '../navbar.jsx';
import { useState } from 'react';

export default function Resume() {

  return (
    <div>
      <Navbar/>
    <iframe
    src="https://docs.google.com/document/d/1RP63AtUMzBY6XhnQU4B_XTMnqDFLYso4-L0Vl1b0pJc/edit?usp=sharing"
    width="100%"
    height="600px" // Adjust height as needed
    title="Google Document Viewer"
  ></iframe>
  </div>
  );
}