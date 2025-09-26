import React, { useEffect, useState } from 'react'
import backG from '../photos/blackSmith.png'
import '../style-css/skills.css'

function Skills() {
    const [level, setLevel] = useState(1);
     const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if ( level%10 === 0) {
      setAnimate(true);
      // remove animation after it plays once
      setTimeout(() => setAnimate(false), 1500);
    }
  }, [level]);

    const createSparks =(event)=>{
        for(let i =0; i<=10;i++){
            const spark= document.createElement("div")
            spark.classList.add("spark");
            spark.style.top = `${Math.floor(Math.random() * 101)}%`
            spark.style.right = `${Math.floor(Math.random() * 101)}%`
            spark.style.transform = `rotate(${Math.floor(Math.random() * 361)}deg)`
            spark.id = i
            event.target.appendChild(spark);

            let x = 0, y = 0;
            let dx = (Math.random() - 0.5) * 6;   // horizontal speed
            let dy = -(Math.random() * 6 + 4);    // initial upward speed
            const gravity = 0.25;
            let life = 60; // ~2s at 60fps
            const step = () => {
                if (life-- <= 0) { spark.remove();return; }
                x += dx;
                y += dy;
                dy += gravity;
                // keep the centering translate, then add motion translate
                spark.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
                spark.style.opacity = (life / 60).toFixed(2);
                requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }

        setLevel(level+1);
    }

  

  return (
    <section
      id="skills"
      className=" w-full min-h-screen flex flex-col items-center justify-center bg-black relative"
      style={{ backgroundImage: `url(${backG})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
       {/* overlay for readability */}
    <div className="absolute inset-0 bg-black/40" />
    <div className={`mb-6 text-center relative text-4xl text-green-600
    drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] font-bold select-none
      ${animate ? "level-up" : ""}`}
    > {level < 30 ? "Help me level UP: " + level : "Thank you! Level: Max"}</div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center relative">
        <div id='html' className='skill-wrapper' onClick={createSparks}>
        <div className="skill-card">HTML</div>
        </div>
        <div className='skill-wrapper' onClick={createSparks}>
        <div className="skill-card">CSS</div>
        </div>
        <div className='skill-wrapper' onClick={createSparks}>
        <div className="skill-card">JavaScript</div>
        </div>
        <div className='skill-wrapper' onClick={createSparks}>
        <div className="skill-card">React</div>
        </div>
        <div className='skill-wrapper' onClick={createSparks}>
        <div className="skill-card">Node.js</div>
        </div>
        <div className='skill-wrapper' onClick={createSparks}>
        <div className="skill-card">MongoDB</div>
        </div>
    </div>

    </section>
  )
}

export default Skills