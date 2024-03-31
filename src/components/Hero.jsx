import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://https://github.com/MradGhassen", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Simplify Complexity with  <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Discover a seamless reading experience with our revolutionary tool, powered by OpenAI GPT-4.
      Say goodbye to information overload as we transform lengthy articles into succinct summaries.
      Try it out now and streamline your reading with ease!
      </h2>
    </header>
  );
};

export default Hero;
