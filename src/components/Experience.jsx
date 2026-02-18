import React from "react";
import SectionWrapper from "./SectionWrapper";
import { experienceData } from "../data/experience";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <SectionWrapper id='experience'>
      <div className='section-container bg-gray-50'>
        <h2 className='section-title'>Work Experience</h2>

        <div className='max-w-4xl mx-auto'>
          <div className='relative border-l-2 border-primary pl-8 ml-4 space-y-12'>
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className='relative animate-slide-up'
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className='absolute -left-12 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
                  <Briefcase className='w-4 h-4 text-white' />
                </div>

                {/* Content */}
                <div className='card'>
                  <div className='flex flex-wrap items-center justify-between mb-4'>
                    <h3 className='text-xl font-bold text-primary'>
                      {exp.role}
                    </h3>
                    <div className='flex items-center text-gray-600'>
                      <Calendar className='w-4 h-4 mr-2' />
                      <span className='text-sm'>{exp.period}</span>
                    </div>
                  </div>

                  <p className='text-lg font-semibold text-gray-700 mb-4'>
                    {exp.company}
                  </p>

                  <ul className='space-y-3'>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className='flex items-start'>
                        <span className='inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3'></span>
                        <span className='text-gray-600'>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
