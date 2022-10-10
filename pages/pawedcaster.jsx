import Image from "next/image";
import pawedCasterImg from "../public/assets/projects/group-project.png";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pawedcaster = () => {
  return (
    <div className="w-full">
      {/* top banner */}
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pawedCasterImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2]">
          <h2 className="py-2">PawedCaster - Group Project</h2>
          <h3>React</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            We are a group of software developers with a passion for podcasts
            and animals. We created this app for users that want to discover a
            wide variety of pet & animal related podcasts, while also being able
            to directly support our furry, scaly, and feathery friends.
            PawedCaster creatively monetizes user traffic and ad space to
            contribute the proceeds directly to local animal shelters, rescues,
            and ASPCA chapters. We hope you find what you are looking for while
            exploring the possibilities.
          </p>
          <a href="https://nameless-reef-29126.herokuapp.com/">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a href="https://github.com/alanam79/group-project-3">
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default pawedcaster;
