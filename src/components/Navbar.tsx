import React, { useState } from 'react';
import MenuIcon from '../assets/icons/menu-outline.svg';
import CloseIcon from '../assets/icons/close-outline.svg';
const Navbar = () => {
  const Links = [
    { name: 'About', link: '/' },
    { name: 'Job Search', link: '/' },
    { name: 'Candidates', link: '/' },
    { name: 'Employers', link: '/' },
    { name: 'Latest News', link: '/' },
    { name: 'Contact', link: '/' }
  ];
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className="shadow-sm w-full absolute top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl flex items-center invisible">
            Designer
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? (
              <img src={CloseIcon} width={28} />
            ) : (
              <img src={MenuIcon} width={28} />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? 'top-16 ' : 'top-[-490px]'
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 md:mr-6 text-xl md:my-0 my-7"
              >
                <a
                  href={link.link}
                  className="text-gray-800 text-base hover:text-primary duration-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
