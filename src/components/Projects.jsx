import React from "react";
import SectionWrapper from "./SectionWrapper";
import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <SectionWrapper id='projects'>
      <div className='section-container bg-gray-50'>
        <h2 className='section-title'>Featured Projects</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className='card hover:shadow-xl transition-shadow duration-300 flex flex-col h-full'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className='text-xl font-bold mb-3 text-primary'>
                {project.title}
              </h3>

              {/* Description with bullet points styling */}
              <div className='text-gray-600 mb-4 text-sm space-y-2'>
                {project.description.split(". ").map((sentence, idx) => (
                  <p key={idx} className='flex items-start'>
                    <span className='inline-block w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                    <span>
                      {sentence}
                      {!sentence.endsWith(".") ? "." : ""}
                    </span>
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact - Highlighted */}
              <div className='mt-auto pt-4 border-t border-gray-100'>
                <p className='text-sm font-semibold text-primary'>
                  <span className='text-gray-500 font-normal'>Impact: </span>
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
