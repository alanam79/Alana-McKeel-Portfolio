import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="telephone"
                />
              </div>
              <div>
                <h2 className="py-2">Alana McKeel</h2>
                <p>Full Stack Software Developer</p>
                <p className="py-4">
                  I am available for full-time work. Reach out, let's talk!
                </p>
              </div>
            <div>
              <p className="uppercase pt-8">Connect with Me</p>
              <div className="flex items-center justify-between py-4">
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

          {/* right */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
