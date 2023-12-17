import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react'
import Image from "next/image";
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const router = useRouter();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);

  };

  return (
    <div className={`bg-[#011627] w-full sticky border-b border-b-[#1E2D3D] ${isNavbarVisible ? 'navbar fixed top-0 left-0 border-0' : 'h-[62px]'}`}>
      <div className='mx-auto'>
        <ul className="md:flex  justify-between items-center relative bg-[#011627] z-10">
          <div className="flex justify-between items-center md:px-7 px-4">
            <span>
              <Link href='/' className="cursor-pointer">
                <Image alt='image' src='/logo.png' className="py-2 md:absolute md:right-7 md:top-1 cursor-pointer" width={65} height={70}></Image>
              </Link>
            </span>
            <span className="md:hidden">
              {isNavbarVisible ? (
                <p onClick={toggleNavbar}>X</p>
              ) : (
                <FaBars className="text-gray-400 text-xlg" onClick={toggleNavbar} />
              )}
            </span>
          </div>
          <span className={`md:flex md:absolute md:left-0 md:top-1  inline-grid  w-full ${isNavbarVisible ? 'block' : 'hidden'}`}>
            <Link href='/' className={router.pathname == '/' ? 'text-white  border-b-[#FEA55F] border-b-2 cursor-pointer pr-5 pl-7 py-4 md:border-r md:border-r-[#1E2D3D]' : ' md:border-r md:border-r-[#1E2D3D] hover-text-white cursor-pointer pr-5 pl-7 py-4 border-b border-b-[#1E2D3D] md:border-b-0'}>Muhammad Imran</Link>
            <Link href='/AboutPage' className={router.pathname == '/AboutPage' ? 'text-white  border-b-[#FEA55F] border-b-2 hover:text-white cursor-pointer px-5 py-4 md:border-r md:border-r-[#1E2D3D]' : 'hover:text-white cursor-pointer px-5 py-4 md:border-r md:border-[#1E2D3D] border-b border-b-[#1E2D3D] md:border-b-0'} >About Me</Link>
            {/* <Link href='/ProjectsPage' className={router.pathname == '/ProjectsPage' ? 'text-white  border-b-[#FEA55F] border-b-2 hover:text-white cursor-pointer px-5  md:border-r md:border-r-[#1E2D3D] py-4' : 'hover:text-white cursor-pointer px-5 py-4 md:border-r md:border-[#1E2D3D] border-b border-b-[#1E2D3D] md:border-b-0'} >Projects</Link> */}
            <Link href='/ContactPage' className={router.pathname == '/ContactPage' ? 'text-white  border-b-[#FEA55F] border-b-2 hover:text-white cursor-pointer px-5 md:border-r md:border-r-[#1E2D3D] py-4' : 'hover:text-white cursor-pointer px-5 py-4 md:border-r md:border-[#1E2D3D]  md:border-b-none'}>Contact Me</Link>
          </span>
        </ul>
      </div>
    </div>
  )
}
