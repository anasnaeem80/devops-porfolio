import React from "react";
import SectionWrapper from "./SectionWrapper";
import { Cloud, Code, Shield, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Cloud className='w-8 h-8 text-primary' />,
      title: "Cloud Expert",
      description: "AWS, Docker, Kubernetes specialist",
    },
    {
      icon: <Code className='w-8 h-8 text-primary' />,
      title: "Infrastructure as Code",
      description: "Terraform & Ansible expert",
    },
    {
      icon: <Zap className='w-8 h-8 text-primary' />,
      title: "CI/CD Pipeline",
      description: "Jenkins, GitHub Actions, ArgoCD",
    },
    {
      icon: <Shield className='w-8 h-8 text-primary' />,
      title: "Monitoring & Security",
      description: "Prometheus, Grafana, ELK Stack",
    },
  ];

  return (
    <SectionWrapper id='about'>
      <div className='section-container'>
        <h2 className='section-title'>About Me</h2>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text */}
          <div className='space-y-6'>
            <p className='text-lg text-gray-600 leading-relaxed'>
              DevOps Engineer with hands-on experience in CI/CD pipeline
              automation, cloud infrastructure provisioning, containerization,
              and monitoring. Skilled in AWS, Docker, Kubernetes, Jenkins,
              Terraform, and Linux with strong understanding of Infrastructure
              as Code (IaC), cloud-native deployment, microservices
              architecture, and system reliability practices.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Passionate about building scalable, automated, and secure cloud
              environments. Proven track record of reducing deployment times by
              80% and implementing zero-downtime deployment strategies.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 pt-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>1+</div>
                <div className='text-sm text-gray-600'>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>20+</div>
                <div className='text-sm text-gray-600'>Projects</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>6+</div>
                <div className='text-sm text-gray-600'>Certifications</div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className='grid grid-cols-2 gap-6'>
            {highlights.map((item, index) => (
              <div
                key={index}
                className='card text-center hover:scale-105 transition-transform duration-300'
              >
                <div className='flex justify-center mb-4'>{item.icon}</div>
                <h3 className='font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
