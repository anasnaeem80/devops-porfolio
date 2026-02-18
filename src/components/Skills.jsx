import React from "react";
import SectionWrapper from "./SectionWrapper";
import { skillsData } from "../data/skills";
import { Cloud, Box, GitBranch, Code2, Activity, Database } from "lucide-react";

const Skills = () => {
  const categories = [
    { name: "Cloud Platforms", data: skillsData.cloudPlatforms, icon: Cloud },
    { name: "Containerization", data: skillsData.containerization, icon: Box },
    { name: "CI/CD Tools", data: skillsData.cicd, icon: GitBranch },
    { name: "Infrastructure as Code", data: skillsData.iac, icon: Code2 },
    { name: "Monitoring", data: skillsData.monitoring, icon: Activity },
    { name: "Programming", data: skillsData.programming, icon: Database },
  ];

  return (
    <SectionWrapper id='skills'>
      <div className='section-container'>
        <h2 className='section-title'>Technical Skills</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className='card'>
                <div className='flex items-center mb-4'>
                  <Icon className='w-6 h-6 text-primary mr-2' />
                  <h3 className='text-lg font-semibold'>{category.name}</h3>
                </div>

                <div className='flex flex-wrap gap-2'>
                  {Array.isArray(category.data)
                    ? category.data.map((item, i) =>
                        typeof item === "string" ? (
                          <span key={i} className='skill-tag'>
                            {item}
                          </span>
                        ) : (
                          <span key={i} className='skill-tag'>
                            {item.name}
                          </span>
                        ),
                      )
                    : category.data.map((item, i) => (
                        <span key={i} className='skill-tag'>
                          {item.name}
                        </span>
                      ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills - Databases */}
        <div className='mt-8'>
          <h3 className='text-xl font-semibold mb-4 text-center'>
            Databases & Others
          </h3>
          <div className='flex flex-wrap justify-center gap-3'>
            {skillsData.databases.map((db, idx) => (
              <span key={idx} className='skill-tag text-lg'>
                {db}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
