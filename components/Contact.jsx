import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_fm49a5y",
      "template_bjdztmg",
      e.target,
      "V90gDFkeCrleWXRDr"
    )
    .then((target) => {
      console.log(target);
    })
    .then(
      (result) => {},
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
  alert("Your message has been sent!");
}

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-2xl shadow-gray-600 rounded-xl p-4">
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

          <div className="col-span-3 w-full h-auto shadow-2xl shadow-gray-600 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="test"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"></textarea>
                </div>
                <div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in-duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
