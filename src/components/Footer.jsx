import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-dark text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <p className='text-gray-400 flex items-center justify-center'>
          © {new Date().getFullYear()} Muhammad Anas Naeem. Built with
          <Heart className='w-4 h-4 mx-1 text-red-500 fill-current' />
          using React & Tailwind CSS
        </p>

        <div className='mt-4'>
          <a
            href='#home'
            className='text-gray-400 hover:text-white transition-colors text-sm'
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
