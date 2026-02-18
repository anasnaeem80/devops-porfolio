import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <SectionWrapper id='contact'>
      <div className='section-container bg-gray-50'>
        <h2 className='section-title'>Get In Touch</h2>

        <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
          {/* Contact Info */}
          <div className='space-y-6'>
            <div className='card'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Mail className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='text-sm text-gray-500'>Email</h3>
                  <a
                    href='mailto:anasnaeem240@gmail.com'
                    className='text-gray-800 hover:text-primary'
                  >
                    anasnaeem240@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Phone className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='text-sm text-gray-500'>Phone</h3>
                  <a
                    href='tel:+923242009744'
                    className='text-gray-800 hover:text-primary'
                  >
                    +92 324 2009744
                  </a>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <MapPin className='w-5 h-5 text-primary' />
                </div>
                <div>
                  <h3 className='text-sm text-gray-500'>Location</h3>
                  <p className='text-gray-800'>Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links - Updated with correct URLs */}
            <div className='flex space-x-4'>
              <a
                href='https://github.com/anasnaeem80'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 card text-center hover:bg-primary group transition-colors'
              >
                <Github className='w-6 h-6 mx-auto mb-2 text-gray-600 group-hover:text-white' />
                <span className='text-sm text-gray-600 group-hover:text-white'>
                  GitHub
                </span>
              </a>
              <a
                href='https://www.linkedin.com/in/muhammad-anas-naeem-832229246/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 card text-center hover:bg-primary group transition-colors'
              >
                <Linkedin className='w-6 h-6 mx-auto mb-2 text-gray-600 group-hover:text-white' />
                <span className='text-sm text-gray-600 group-hover:text-white'>
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className='card'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete='name'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete='email'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                  placeholder='john@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='4'
                  autoComplete='off'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none'
                  placeholder='Your message here...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2'
              >
                <Send className='w-5 h-5' />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
