import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">My Portfolio</h2>
            <p className="text-gray-400">Showcasing my skills and projects.</p>
          </div>
          {/* Navigation Links */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <nav>
              <ul className="flex flex-wrap justify-center space-x-6">
                <li>
                  <a href="#home" className="hover:text-gray-400">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-400">About</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-400">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <nav>
              <ul className="flex justify-center md:justify-end space-x-6">
                <li>
                  <a href="https://github.com/yourprofile" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6.2 0-1.4.5-2.5 1.2-3.3-.1-.3-.5-1.4.1-2.8 0 0 1-.3 3.3 1.3.9-.2 1.8-.4 2.7-.4s1.8.1 2.7.4c2.3-1.6 3.3-1.3 3.3-1.3.6 1.4.2 2.5.1 2.8.8.9 1.2 2 1.2 3.3 0 4.8-2.8 5.9-5.5 6.2.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/yourprofile" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.5C0 23.2.8 24 1.8 24h20.5c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8zM7.1 20.2H3.6V9h3.6v11.2zM5.3 7.5C4.2 7.5 3.2 6.5 3.2 5.4S4.2 3.4 5.3 3.4c1.1 0 2.1 1 2.1 2.1s-1 2-2.1 2zM20.2 20.2h-3.5v-5.4c0-1.3 0-3-1.8-3-1.8 0-2 1.4-2 2.9v5.5H9.5V9h3.3v1.5h.1c.4-.8 1.5-1.6 3.1-1.6 3.4 0 4.1 2.2 4.1 5.1v6.2z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yourprofile" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-1.2 1.8-2.6 2-4.2-.9.5-1.9.9-2.9 1.1-1.7-1.8-4.5-2-6.3-.5-1.1 1-1.7 2.5-1.5 4C7.7 5 4.1 3.4 1.7.9c-.9 1.5-.4 3.5 1.1 4.5-.8 0-1.5-.2-2.2-.6 0 2.3 1.6 4.2 3.7 4.6-.8.2-1.6.2-2.4.1.7 2.1 2.6 3.5 4.8 3.5-2.2 1.7-4.9 2.7-7.8 2.6C2.4 17.6 5.3 18.7 8.3 18.7c10 0 15.5-8.2 15.5-15.5 0-.2 0-.3-.1-.5 1.1-.9 1.9-1.8 2.3-3.1z" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
