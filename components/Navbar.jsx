import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter;

  useEffect(() => {
    if (
      window.location.pathname === "/socialNetwork" ||
      window.location.pathname === "/pawedcaster" ||
      window.location.pathname === "/netflix" ||
      window.location.pathname === "/budgetTracker"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    // empty dependency array, if blank, it will run once, when the component mounts,
  }, []);

  // z-[100] will ensure this will always be on top.
  return (
    // parent container for navbar, creating shadow on navbar when the party scrolls

    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* may need to move to config file */}
        <Link href="/">
          <Image
            src="/../public/assets/navLogo.png"
            alt="/"
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        {/* overlay class for mobile menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }>
          {/* overlay div for mobile menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            {/* MOBILE MENU */}
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <a>
                    <Image
                      src="/../public/assets/navLogo.png"
                      width="87"
                      height="35"
                      alt="/"
                    />
                  </a>
                </Link>
                <div
                  style={{ color: `${linkColor}` }}
                  /* pulling over image smaller and moving aioutline close to be in flex with image */
                  onClick={handleNav}
                  className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w=[85%] md:w-[90%] py-4">
                  Things aren’t always #000000 and #FFFFFF
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40 ">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect!
                </p>
                {/* a href anchor tags only for external links, internal will cause errors and a constant refresh on pages within app */}
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-duration-300">
                    <a
                      href="https://www.linkedin.com/in/alana-mckeel-web-dev/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-duration-300">
                    <a
                      href="https://github.com/alanam79"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-duration-300">
                    <a href="mailto:name@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in-duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
