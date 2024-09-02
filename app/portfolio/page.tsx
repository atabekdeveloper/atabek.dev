import { projects } from '@/data';
import Link from 'next/link';
import React from 'react';

function replaceDesc(text: string, searchText?: string, link?: string) {
  return text.replace(
    `${searchText}`,
    `<a href="${link}" style="color: #7480FF" target="_blank">${searchText}</a>`,
  );
}

const Portfolio = () => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-start mb-10">
        {projects.map((project, index) => (
          <div key={index} className="md:w-1/2 flex flex-col items-center justify-center mb-4">
            <img src={project.mockup} className="mb-4 p-2" />
            <h1 className="text-3xl mb-2">{project.title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: replaceDesc(project.desc, project.replaceText, project.link),
              }}
              className="mb-4 md:max-w-[300px] overflow-hidden line-clamp-3"
            />
            <div className="flex items-center mb-4">
              {project.iconLists?.map(({ icon, name }, index) => (
                <div
                  key={index}
                  className="relative group border border-white/[.2] rounded-full bg-gray-200 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <img src={icon} alt={`icon${index}`} className="p-2" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap overflow-hidden text-ellipsis transition duration-300">
                    {name}
                  </div>
                </div>
              ))}
            </div>
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
