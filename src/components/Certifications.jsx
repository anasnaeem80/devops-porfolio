import React from "react";
import SectionWrapper from "./SectionWrapper";
import { certificationsData } from "../data/certifications";
import {
  Award,
  CheckCircle,
  Cloud,
  Code,
  Terminal,
  Cpu,
  Box,
  GitBranch,
} from "lucide-react";

const Certifications = () => {
  // Function to get appropriate icon based on certification name
  const getIcon = (cert) => {
    const iconProps = "w-6 h-6 text-primary";

    if (cert.name.includes("Jenkins") || cert.name.includes("CI/CD")) {
      return <GitBranch className={iconProps} />;
    } else if (cert.name.includes("Linux")) {
      return <Terminal className={iconProps} />;
    } else if (cert.name.includes("AWS")) {
      return <Cloud className={iconProps} />;
    } else if (cert.name.includes("Docker")) {
      return <Box className={iconProps} />;
    } else if (cert.name.includes("AI") || cert.name.includes("IaC")) {
      return <Cpu className={iconProps} />;
    } else {
      return <Code className={iconProps} />;
    }
  };

  return (
    <SectionWrapper id='certifications'>
      <div className='section-container'>
        <h2 className='section-title'>Certifications & Training</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              className='card flex items-start space-x-4 hover:border-primary transition-colors hover:shadow-lg'
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className='flex-shrink-0'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  {getIcon(cert)}
                </div>
              </div>

              <div className='flex-1'>
                <h3 className='font-semibold text-gray-800 mb-1'>
                  {cert.name}
                </h3>
                <p className='text-sm text-gray-600 mb-2'>{cert.issuer}</p>
                <div className='flex items-center mt-2'>
                  <CheckCircle className='w-4 h-4 text-green-500 mr-1' />
                  <span className='text-xs text-green-600 font-medium'>
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className='mt-10 text-center'>
          <div className='inline-block bg-primary/5 rounded-lg px-6 py-4'>
            <p className='text-gray-700'>
              <span className='font-bold text-primary'>
                {certificationsData.length}
              </span>{" "}
              Professional Certifications
              <span className='mx-2'>•</span>
              <span className='font-bold text-primary'>7</span> Udemy Courses
              <span className='mx-2'>•</span>
              <span className='font-bold text-primary'>1</span> TrainWithShubham
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
