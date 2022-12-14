import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "../public/assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Ready to Rock and Code!</p>
          <p className="py-2 text-gray-600">
            My name is Alana McKeel, professionally, I have had prior experience
            in Business and Hotel management as well as Title and Escrow
            experience. Currently, I am focused on securing a full-time position
            as a Full Stack Developer.
          </p>
          <p className="py-2 text-gray-600">
            As I have progressed thru the course, I have been drawn to the back
            end and have really enjoyed learning and understanding the
            processes. Thank you for visiting, let's connect!
          </p>
          <Link href="https://docs.google.com/document/d/1UTvsO2uZk4rzMDuMpkkbIr3HTHx_CJsc/edit?usp=sharing&ouid=104711669634292889827&rtpof=true&sd=true">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my resume!
            </p>
          </Link>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
