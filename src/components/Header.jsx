import React, { useEffect, useState } from 'react'

function Header() {
 const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolling up → fade back in smoothly
      if (window.scrollY < lastScrollY) {
        setVisible(true);
      }
      //if scroll down disappear
      if(window.scrollY > lastScrollY){
        setVisible(false)
      }
      // If not at the very top, start fade-out timer
      if (window.scrollY > 0) {
        if (timeoutId) clearTimeout(timeoutId);
        const id = setTimeout(() => setVisible(false), 3000); // 3s delay
        setTimeoutId(id);
      } else {
        // At very top → always show
        setVisible(true);
        if (timeoutId) clearTimeout(timeoutId);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, timeoutId]);

  return (
    <header className={`flex flex-col sm:flex-row justify-between p-2 px-5 m-4 rounded-2xl
     bg-gradient-to-r from-black via-green-600 to-gray-600 
       w-3/4 items-center 
      fixed z-50 left-1/2 -translate-x-1/2  
      border border-white
      transition-all duration-1000 ease-in-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                  }`}>
        <div className="text-2xl font-bold  tracking-wide
         text-amber-100 
         drop-shadow-lg 
         hover:scale-110 transition-transform duration-300">Dor Golan</div>
        <div className='flex gap-3'>
        <a href="#about"
        className="hover:scale-105 text-2xl hover:text-gray-200 transition">About</a>
        <a href="#projects"
        className="hover:scale-105 text-2xl hover:text-gray-200 transition">Projects</a>
        </div>
        <a href="#contact"
        className="hover:scale-105 hover:text-gray-200 transition">Contact</a>
    </header>
  )
}

export default Header