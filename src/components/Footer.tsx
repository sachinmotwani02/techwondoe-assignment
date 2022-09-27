import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';
import instagram from '../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container w-full px-5 py-24 mx-auto flex flex-row justify-center flex-wrap">
        <div className="w-1/2 md:w-1/6 flex flex-row md:items-end md:order-first order-last md:mt-0 mt-10">
          <img src={facebook} className="mx-3" width={12} />
          <img src={linkedin} className="mx-3" width={18} />
          <img src={instagram} className="mx-3" width={22} />
        </div>
        <div className="w-1/2 md:w-1/6 flex flex-col">
          <nav className="list-none">
            <li className="mt-4">
              <a className="text-black text-center hover:text-primary">Home</a>
            </li>
            <li className="mt-4">
              <a className="text-black text-center hover:text-primary">About</a>
            </li>
            <li className="mt-4 ">
              <a className="text-black text-center hover:text-primary">
                Candidates
              </a>
            </li>
          </nav>
        </div>
        <div className="w-1/2 md:w-1/6 flex flex-col justify-center">
          <nav className="list-none">
            <li className="mt-4">
              <a className="text-black text-center hover:text-primary">
                Employers
              </a>
            </li>
            <li className="mt-4">
              <a className="text-black text-center hover:text-primary">
                Latest News
              </a>
            </li>
            <li className="mt-4 ">
              <a className="text-black text-center hover:text-primary">
                Contact
              </a>
            </li>
          </nav>
        </div>
        <div className="w-1/2 md:w-1/6 flex flex-col order-4 md:order-3 overflow-hidden">
          <nav className="list-none">
            <li className="mt-4">
              <a className="text-black underline hover:text-primary">
                +62 (0) 9 124 5470
              </a>
            </li>
            <li className="mt-4 w-1/2">
              <a className="text-black underline hover:text-primary">
                careers@namespace.com
              </a>
            </li>
          </nav>
        </div>
        <div className="w-1/2 md:w-1/6 flex flex-col">
          <p className="text-black mt-4">
            Level 3 79 High Street Melbourne CBD 1010
          </p>
        </div>
      </div>
      <div className="bg-gray_bg">
        <div className="container py-4 px-5 flex flex-col items-center">
          <p className="text-black">Copyright © 2021 - Beyond Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
