'use client';
import Navbar from '../navbar.jsx';
import { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function Resume() {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };
  return (
    <div>
      <Navbar/>
      <section className="h-screen">
    <button className="flex mt-5 ml-5 mb-2 p-1 bg-[#F4A261] p-2 pt-1 pb-1 rounded-lg text-md font-semibold text-white cursor-pointer" 
    onClick={() => {
      window.open(
        "https://docs.google.com/document/d/1RP63AtUMzBY6XhnQU4B_XTMnqDFLYso4-L0Vl1b0pJc/export?format=pdf",
        "_blank"
      );
    }}>
      Download My Resume
      <ArrowDownTrayIcon className="size-5 ml-2"/></button>

    {/* spinner */}
    {loading && (
            <div className="ml-2">
              Loading...
            </div>
          )}
    
    <div className="flex box-border w-full h-full p-4 bg-gray-100">
      <iframe
      src="https://docs.google.com/document/d/1RP63AtUMzBY6XhnQU4B_XTMnqDFLYso4-L0Vl1b0pJc/preview?tab=t.0"
      title="Google Document Viewer"
      onLoad={handleIframeLoad}
      style={{ display: loading ? 'none' : 'block' }}
      className="border-none h-full w-full rounded-xl shadow-lg "
    ></iframe>
  </div>
  </section>
  </div>
  );
}