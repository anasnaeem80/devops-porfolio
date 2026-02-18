import React from "react";
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100'
    >
      <div className='section-container text-center'>
        <div className='mb-8 animate-slide-up'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>
            Muhammad Anas <span className='text-primary'>Naeem</span>
          </h1>
          <h2 className='text-2xl md:text-3xl text-gray-600 mb-6'>
            DevOps Engineer
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto mb-8'>
            Building scalable, resilient infrastructure and automating
            everything with AWS, Docker, Kubernetes, and Terraform
          </p>

          {/* Social Links */}
          <div className='flex justify-center space-x-4 mb-8'>
            <a
              href='mailto:anasnaeem240@gmail.com'
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow'
            >
              <Mail className='w-6 h-6 text-gray-700' />
            </a>
            <a
              href='https://github.com/anasnaeem80'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow'
            >
              <Github className='w-6 h-6 text-gray-700' />
            </a>
            <a
              href='https://www.linkedin.com/in/muhammad-anas-naeem-832229246/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow'
            >
              <Linkedin className='w-6 h-6 text-gray-700' />
            </a>
          </div>

          {/* CTA Buttons - Updated */}
          <div className='flex justify-center space-x-4'>
            <a
              href='#contact'
              className='px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center'
            >
              Get In Touch
            </a>
            <a
              href='/cv/Muhammad_Anas_Naeem_DevOps_CV.pdf'
              download
              className='px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors inline-flex items-center space-x-2'
            >
              <Download className='w-5 h-5' />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
