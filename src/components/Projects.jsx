import React from 'react'
import workout1p from '../photos/workoutPlaner1.jpg'
import workout2p from '../photos/workoutPlaner2.jpg'
import workout3p from '../photos/workoutPlaner3.jpg'
import budget1p from '../photos/budgetTracker1.jpg'
import budget2p from '../photos/budgetTracker2.jpg'
import budget3p from '../photos/budgetTracker3.jpg'
import "../style-css/projects.css"

function Projects() {

  return (
    <section id='projects' className=" w-full min-h-screen bg-black text-green-300 px-6 py-16">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]">
        My Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl auto-rows-fr mx-auto">
        {/* Project Card */}
        <a href='https://dorp2w.github.io/Workout-Planer/#/'
          target="_blank" rel="noreferrer"
         className="relative group rounded-xl overflow-hidden shadow-lg border border-green-500/30 hover:scale-105 transition-transform" >
         {/* Background Slideshow */}
      <div className="slideshow w-full h-64">
        <img src={workout1p} alt="Preview 1" className="absolute inset-0 w-full h-full object-cover" />
        <img src={workout2p} alt="Preview 2" className="absolute inset-0 w-full h-full object-cover" />
        <img src={workout3p} alt="Preview 3" className="absolute inset-0 w-full h-full object-cover" />
      </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-green-400 mb-2">Workout Planner</h3>
          <p className="text-gray-300 m-3">Go plan your perfect gym workout plan for free.</p>
        </div>
        </a>

        {/* Project Card */}
        <a href='https://dorp2w.github.io/Budget-Tracker/'
          target="_blank" rel="noreferrer"
         className="relative group rounded-xl overflow-hidden shadow-lg border border-green-500/30 hover:scale-105 transition-transform" >
         {/* Background Slideshow */}
      <div className="slideshow w-full h-64">
        <img src={budget3p} alt="Preview 1" className="absolute inset-0 w-full h-full object-cover" />
        <img src={budget2p} alt="Preview 2" className="absolute inset-0 w-full h-full object-cover" />
        <img src={budget1p} alt="Preview 3" className="absolute inset-0 w-full h-full object-cover" />
      </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-green-400 mb-2">Budget Tracker</h3>
          <p className="text-gray-300 m-3">Help track your budget for free in an easy way.</p>
        </div>
        </a>

        <div className="p-6 bg-black/60 border border-green-500/30 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform">
        <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
        <p className="text-gray-300">Coming soon...</p>
        </div>

        <div className="p-6 bg-black/60 border border-green-500/30 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform">
        <h3 className="text-2xl font-semibold mb-2">Project Four</h3>
        <p className="text-gray-300">Coming soon...</p>
        </div>

    </div>
    </section>
  )
}

export default Projects