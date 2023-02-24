import React from 'react';

interface ProjectItemProps {
  img: string;
  title: string;
  githubLink: string;
}

const ProjectItem = ({ img, title, githubLink }: ProjectItemProps) => {
  return (
    <div className="">
      <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
      <img src={img} alt={title} className="" />
      <a href={githubLink} target="_blank" rel="noreferrer">
        <p className="cursor-pointer text-center p-3 font-bold text-gray-700">
          More info
        </p>
      </a>
    </div>
  );
};

export default ProjectItem;
