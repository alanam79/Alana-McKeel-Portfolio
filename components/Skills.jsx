import Image from "next/image";
import React from "react";
import HtmlImg from "../public/assets/skills/html.png";
import CssImg from "../public/assets/skills/css.png";
import JavascriptImg from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import TailwindImg from "../public/assets/skills/tailwind.png";
import MongodbImg from "../public/assets/skills/mongo.png";
import FirebaseImg from "../public/assets/skills/firebase.png";
import NodeImg from "../public/assets/skills/node.png";
import GithubImg from "../public/assets/skills/github1.png";
import NextImg from "../public/assets/skills/nextjs.png";
import SqlImg from "../public/assets/skills/sql.jpg";
import GraphqlImg from "../public/assets/skills/graphQL.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        {/* grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HtmlImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  HTML
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CssImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  CSS
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JavascriptImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Javascript
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  React
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Tailwind
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MongodbImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  MongoDB
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FirebaseImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Firebase
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NodeImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Node.js
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GithubImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Github
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  Next.js
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SqlImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  MySQL
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GraphqlImg} width="64px" height="64px" alt="/" />
              </div>
              <div>
                <h3 className="flex flex-col items-center justify-center">
                  GraphQL
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
