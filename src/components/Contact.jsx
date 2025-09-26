import React from 'react'

function Contact() {
  return (
    <section
  id="contact"
  className="w-full min-h-screen bg-black text-green-400 flex flex-col items-center justify-center px-6 py-16"
>
  {/* Title */}
  <h2 className="text-4xl md:text-5xl font-bold mb-12 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
    💻 Contact Me
  </h2>


  {/* Social Links */}
  <div className="flex space-x-6 mt-8">
    <a href="mailto:dor.programming11@gmail.com" className="hover:text-green-300 text-2xl">Email</a>
    <a href="https://github.com/dorP2W" target="_blank" rel="noreferrer" className="text-2xl hover:text-green-300">GitHub</a>
    <a href="https://linkedin.com/in/dor-dorgo-golan/" target="_blank" rel="noreferrer" className="text-2xl hover:text-green-300">LinkedIn</a>
  </div>
</section>

  )
}

export default Contact