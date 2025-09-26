import React, { useEffect, useRef, useState } from 'react'
import homePic from "../photos/homePic.png"
import "../style-css/home.css"


function Home() {
    const [key, setKey] = useState(0)
    const glitchRefs = useRef([]); // array of refs

    // make sure refs don’t stack on re-renders
  glitchRefs.current = [];
    
 const addToRefs = (el) => {
    if (el && !glitchRefs.current.includes(el)) {
      glitchRefs.current.push(el);
    }
  };

console.log(glitchRefs.current)
   useEffect(() => {
    const glitchRandomWord = () => {
      const words = glitchRefs.current;
      if (words.length === 0) return;

      const randomWord = words[Math.floor(Math.random() * words.length)];
      randomWord.classList.add("glitching");

      setTimeout(() => {
        randomWord.classList.remove("glitching");
      }, 300); // match animation length
    };

    const interval = setInterval(() => {
      glitchRandomWord();
    }, Math.floor(Math.random() * 1000) + 1000); // 2–4s random

    return () => clearInterval(interval);
  }, []);


  return (
    <section id='about' className=" relative w-full h-screen">
      {/* Background Image */}
      <img
        src={homePic}
        alt="Anime Hacker Samurai"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
        {/* Subtext */}
        <p 
        key={key}
        onClick={() => setKey(prev => prev + 1)}
        className="mt-6 cursor-pointer text-3xl md:text-2xl font-mono text-green-300 ">
          <span className="typing-text select-none">
            Access Granted... Welcome, Tester.
          </span>
        </p>

        {/* Cool Title */}
        <h1 className="text-5xl md:text-7xl font-mono font-extrabold text-green-400 
                       drop-shadow-[0_0_20px_rgba(34,197,94,0.9)] animate-pulse select-none">
          CODE SAMURAI 
        </h1>

        <p className=" text-center text-2xl font-semibold w-2/3
             text-green-600 bg-black/60 px-4 py-2 rounded-lg
             drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]
             "
             >
          I’m <span className="inline-block" ref={addToRefs}>Dor</span>, a full-stack <span className="inline-block" ref={addToRefs}>developer</span> committed to building <span className="inline-block" ref={addToRefs}> clean</span>, effective 
          solutions with <span className="inline-block" ref={addToRefs}>precision</span> and <span className="inline-block" ref={addToRefs}>discipline</span> — approaching every project 
          with <span className="inline-block" ref={addToRefs}> the</span> focus of a modern <span className="inline-block" ref={addToRefs}> samurai.</span>
        </p>

      </div>
    </section>
  )
}

export default Home