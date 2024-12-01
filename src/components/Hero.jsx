import React from 'react';
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='w-full flex justify-between items-center p-3 mb-10'>
        <div className='flex gap-3 items-center justify-center'>
          <img src={logo} alt="Logo" className='w-10 h-10 object-contain' />
          <p className='font-bold orange_gradient text-xl hidden sm:block'>AI <span className=''>Summarizer</span></p>
        </div>
        {/* <button type='button' className='black_btn' onClick={()=> window.open("https://github.com/Sahil4444")}>
          Github
        </button> */}
        <button type='button' onClick={()=> window.open("https://github.com/Sahil4444")} className="relative inline-block px-8 py-3 font-bold text-[17px] leading-none tracking-wide text-ghostwhite bg-amber-400 rounded-full overflow-hidden group">
          <span className="relative z-10 transition-colors duration-400 group-hover:text-white">GitHub</span>
          <div className="absolute top-0 left-0 w-[120%] h-full bg-white skew-x-[30deg] -translate-x-[10%] transition-transform duration-450 group-hover:translate-x-full"></div>
        </button>

      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>Accelerating Understanding Through AI-Powered Summaries</h2>
    </header>
  )
}

export default Hero
