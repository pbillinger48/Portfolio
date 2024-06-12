import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Parker Billinger</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 text-white hover:text-gray-400">About</a>
          <a href="#projects" className="mr-5 text-white hover:text-gray-400">Projects</a>
          <a href="#skills" className="mr-5 text-white hover:text-gray-400">Skills</a>
          <a href="#contact" className="mr-5 text-white hover:text-gray-400">Contact Me</a>
        </nav>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/parker-billinger-209bb2231/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/pbillinger48" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}
