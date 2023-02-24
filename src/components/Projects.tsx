import React from 'react';
import ProjectItem from './ProjectItem';
import photosnap from './assets/photosnap.png';
import weather from './assets/weather.png';
import crypto from './assets/crypto.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Projects
      </h1>
      <div className="flex flex-wrap gap-12 flex-col justify-center sm:flex-row items-center">
        <ProjectItem
          img={photosnap}
          title="Photosnap Website"
          githubLink="https://github.com/MattGri/photosnap-website"
        />
        <ProjectItem
          img={weather}
          title="Weather App"
          githubLink="https://github.com/MattGri/weather-app-typescript"
        />
        <ProjectItem
          img={crypto}
          title="Crypto App"
          githubLink="https://github.com/MattGri/crypto-app"
        />
      </div>
    </div>
  );
};

export default Projects;
