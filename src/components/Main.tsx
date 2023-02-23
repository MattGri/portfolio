import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="main"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Mateusz Grzybowski
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={['Junior Frontend Developer', 1000]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '16px', paddingLeft: '5px' }}
            />
          </h2>
          <div className="flex justify-between pt-6 w-full max-w-[200px]">
            <a
              href="https://www.linkedin.com/in/mateusz-grzybowski-1685a5183/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://github.com/MattGri"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
