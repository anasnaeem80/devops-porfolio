import React from "react";
import SectionWrapper from "./SectionWrapper";
import { educationData } from "../data/education";
import { GraduationCap, Calendar, CheckCircle } from "lucide-react";

const Education = () => {
  return (
    <SectionWrapper id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="card hover:border-primary transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {edu.degree}
                      </h3>

                      <p className="text-gray-600 mt-1">
                        {edu.institution}
                        {edu.grade && (
                          <span className="text-gray-500">
                            {" "}
                            | {edu.grade}
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center text-primary font-medium mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>

                  {edu.highlights && (
                    <ul className="mt-4 space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;