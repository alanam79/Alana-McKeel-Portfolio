import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // z-[100] will ensure this will always be on top.
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* may need to move to config file */}
        <Image
          src="/../public/assets/navLogo.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        {/* overlay class for mobile menu */}
        <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
          {/* overlay div for mobile menu */}
          <div className="fixed left-0 top-o w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
            <div>
                <div className='flex w-full items-center justify-between'>
                    {/* pulling over image smaller and moving aioutline close to be in flex with image */}
                    <Image src="/../public/assets/navLogo.png" width='87' height='35' alt='/' />
                    <div className='rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p>Things aren’t always #000000 and #FFFFFF</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
