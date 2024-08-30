import Link from 'next/link';
import React from 'react';

const projects = [
  {
    title: 'Rivoj Yulduz',
    mockup: '/mockups/rivojyulduzMock.png',
    live: 'https://rivojyulduz.uz/',
    code: '',
    desc: '"RIVOJ YULDUZ" is a top advertising and production company with 15 years of experience, offering a full range of advertising services. It has 2 workshops and a team of professionals who create bright advertising on any media - from billboards to social networks.',
  },
  {
    title: 'World SAMO',
    mockup: '/mockups/samoMock.png',
    live: 'https://sales-up-one.vercel.app/',
    code: 'https://github.com/atabekdeveloper/sales-up',
    desc: 'The CRM system for WorldSamo.com features a sleek and user-friendly UI/UX design tailored to enhance efficiency in managing customer relationships.',
  },
  {
    title: 'NewAction',
    mockup: '/mockups/newactionMock.png',
    live: 'https://newaction.uz/',
    code: '',
    desc: 'Online learning platform for online and hybrid learning. Monitoring of courses, sales department, management of students and employees.',
  },
  {
    title: 'Karsoft IT Solutions',
    mockup: '/mockups/karsoftMock.png',
    live: '',
    code: '',
    desc: 'A CRM system developed for Karsoft IT Solution fully automates business processes, including CRM and ERP management, and integrates website and Telegram bot functionalities.',
  },
  {
    title: 'React Pizza',
    mockup: '/mockups/reactpizzaMock.png',
    live: 'https://react-pizza-a.vercel.app/',
    code: 'https://github.com/atabekdeveloper/react-pizza',
    desc: 'A web app for ordering pizza. Allows you to select a pizza, configure parameters, add to cart and place an order. Includes filtering, sorting and modern design.',
  },
  {
    title: 'To-Do List',
    mockup: '/mockups/todoAppMock.png',
    live: 'https://todo-tasks-app.vercel.app/',
    code: 'https://github.com/atabekdeveloper/todo-tasks-app',
    desc: 'Web application for task management. Allows you to create, edit and delete tasks, as well as mark them as completed. Has a simple and convenient interface for effective organization of affairs.',
  },
  {
    title: 'Alarm Clock',
    mockup: '/mockups/clockMock.png',
    live: 'https://analog-alarm-clock.vercel.app/',
    code: 'https://github.com/atabekdeveloper/analog-clock',
    desc: '',
  },
];

const Portfolio = () => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div key={index} className="md:w-1/2 flex flex-col items-center justify-center mb-4">
            <img src={project.mockup} className="mb-4 p-2" />
            <h1 className="text-3xl mb-2">{project.title}</h1>
            <p className="mb-4 md:max-w-[300px] overflow-hidden line-clamp-3">{project.desc}</p>
            <div className="flex gap-2">
              {project.live && (
                <Link href={project.live} target="_blank" className="btn btn-secondary">
                  Live
                </Link>
              )}
              {project.code && (
                <Link href={project.code} target="_blank" className="btn btn-primary">
                  Source
                </Link>
              )}
              {!project.code && (
                <button className="btn btn-primary" disabled>
                  Source (Private)
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
