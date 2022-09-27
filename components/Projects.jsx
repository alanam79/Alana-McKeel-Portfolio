import Image from "next/image";
import Link from "next/link";
import React from "react";
import socialNetworkImg from "../public/assets/projects/social-network-api.jpg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Created</h2>
        {/* projects container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* parent container for project item */}
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={socialNetworkImg}
              alt="/"
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-enter'>Social Network API</h3>
                <p className='pb-4 pt-2 text-white text-center'>NoSQL</p>
                <Link href='https://github.com/alanam79/Social-Network-API'>
                    <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
