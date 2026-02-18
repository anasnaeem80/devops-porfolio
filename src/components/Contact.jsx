import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./SectionWrapper";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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

            {/* Social Links */}
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
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label
                  htmlFor='from_name'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='from_name'
                  name='from_name'
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  autoComplete='name'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='from_email'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='from_email'
                  name='from_email'
                  value={formData.from_email}
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

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded'>
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
                  ❌ Failed to send message. Please try again or email me
                  directly.
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <Send className='w-5 h-5' />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
