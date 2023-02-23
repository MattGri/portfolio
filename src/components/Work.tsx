import React from 'react';
import WorkItem from './WorkItem';
import data from '../data.json';

const Work = () => {
  return (
    <div
      id="work"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-[#001b5e]"
    >
      <h1 className="text-4xl font-bold text-center">Work</h1>
      {data.map(({ year, title, duration, details }, index) => {
        return (
          <WorkItem
            key={index}
            year={year}
            title={title}
            duration={duration}
            details={details}
          />
        );
      })}
    </div>
  );
};

export default Work;
