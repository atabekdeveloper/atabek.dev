import Link from 'next/link';
import React from 'react';

const projects = [
  {
    title: 'Rivoj Yulduz',
    mockup: '/mockups/rivojyulduzMock.png',
    live: 'https://rivojyulduz.uz/',
    code: 'https://github.com/atabekdeveloper/rivoj-yulduz',
  },
  {
    title: 'NewAction',
    mockup: '/mockups/newactionMock.png',
    live: 'https://newaction.uz/',
    code: 'https://github.com/atabekdeveloper/newaction',
  },
  {
    title: 'React Pizza',
    mockup: '/mockups/reactpizzaMock.png',
    live: 'https://react-pizza-a.vercel.app/',
    code: 'https://github.com/atabekdeveloper/react-pizza',
  },
  {
    title: 'To-Do List',
    mockup: '/mockups/todoAppMock.png',
    live: 'https://todo-tasks-app.vercel.app/',
    code: 'https://github.com/atabekdeveloper/todo-tasks-app',
  },
];

const Portfolio = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-5">Portfolio</h2>
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div key={index} className="md:w-1/2 flex flex-col items-center justify-center mb-4">
            <img src={project.mockup} className="mb-4 p-2" />
            <h1 className="text-3xl mb-2">{project.title}</h1>
            <div className="flex gap-2">
              <Link href={project.live} target="_blank" className="btn btn-secondary">
                Live
              </Link>
              <Link href={project.code} target="_blank" className="btn btn-primary">
                Source
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
