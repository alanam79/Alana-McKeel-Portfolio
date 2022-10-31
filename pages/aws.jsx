// import Image from "next/image";
// import awsImg from "../public/assets/projects/aws.png";
// import React from "react";
// import { RiRadioButtonFill } from "react-icons/ri";
// import Link from "next/link";

// const awsProject = () => {
//   return (
//     <div className="w-full">
//       {/* top banner */}
//       <div className="w-screen h-[50vh] relative">
//         <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
//         <Image
//           className="absolute z-1"
//           layout="fill"
//           objectFit="cover"
//           src={awsImg}
//           alt="/"
//         />
//         <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2]">
//           <h2 className="py-2">AWS for JavaScript Developers</h2>
//           <h3>NoSQL</h3>
//         </div>
//       </div>

//       <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
//         <div className="col-span-4">
//           <p>Project</p>
//           <h2>Overview</h2>
//           <p>
//             This is the first continuation course I took after the Bootcamp
//             ended. This is a work in progress as I am still working on having
//             the application fully deployed in the EC2 instance. However, I take
//             quite pride in this application as to the state it current is in, as
//             the module work was extremely outdated, which forced me to seek out
//             how to correct the issues. Several issues I encountered were: the
//             script was written incorrectly for the current version of
//             javascript, the interaction with the ULI had changed, the steps to
//             set up the EC2 and Amazon S3 bucket had changed, the versions of the
//             programs being installed had changed or no longer were in use.
//             Currently, this is working on the local server.
//           </p>
//           {/* <a href="https://rocky-bayou-47037.herokuapp.com/">
//             <button className="px-8 py-2 mt-4 mr-8">Demo</button>
//           </a> */}
//           <a href="https://github.com/alanam79/aws-thought">
//             <button className="px-8 py-2 mt-4">Code</button>
//           </a>
//         </div>
//         <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
//           <div className="p-2">
//             <p className="text-center font-bold pb-2">Technologies</p>
//             <div className="grid grid-cols-3 md:grid-cols-1">
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-1" /> AWS
//               </p>
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-1" /> DynamoDB
//               </p>
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-1" /> Amazon S3 bucket
//               </p>
//               <p className="text-gray-600 py-2 flex items-center">
//                 <RiRadioButtonFill className="pr-1" /> Insomnia
//               </p>
//             </div>
//           </div>
//         </div>
//         <Link href="/#projects">
//           <p className="underline cursor-pointer">Back</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default awsProject;
