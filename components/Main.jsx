import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Things aren’t always #000000 and #FFFFFF
          </p>
          <h1 className="py-4 text-gray-700">
            Hi there, I'm <span className="text-[#154e15]">Alana</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            A Full Stack Software Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a recently graduated Full Stack Software Developer from
            Michigan State University. During my bootcamp, I learned numerous
            languages for front-end and back-end software development. This
            includes: HTML, CSS, Javascript, Tailwind, MongoDB, SQL, React,
            MERN, and several more! I enjoy all aspects of Software Development,
            while being focused currently on building responsive back-end
            applications while sharpening my skills on front-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
              <a
                href="https://www.linkedin.com/in/alana-mckeel-web-dev/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
              <a
                href="https://github.com/alanam79"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
              <a href="mailto:name@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in-duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
