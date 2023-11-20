import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div>
        <footer>
            <div className=" bg-[#011627] border-b text-gray-400 border-t border-[#1E2D3D] relative">
                <ul className='flex items-center justify-between'>
              <span className='flex items-center md:gap-2 md:justify-between'>
             <span>
             <li className=' px-5 py-2'>find me in:</li>
             </span> 
                 
              <span className='flex items-center'>
               
                      <li className=' border-l border-l-[#1E2D3D] border-r border-r-[#1E2D3D]'>
                       <a href="" className='hover:text-white px-5 py-3 flex'><FaTwitter /></a>
                   </li>
                   <li className=' border-r border-r-[#1E2D3D] '>
                       <a href="" className='hover:text-white px-5 py-3 flex'><FaFacebookF /></a>
               
                   </li>
                      <li className='md:border-l md:border-l-[#1E2D3D] pr-5 md:absolute md:right-5'>
                            <a href="" className='py-3  pl-4 hover:text-white'>@ <span className='md:inline-block hidden'>username</span></a>
                        </li>
                      </span>
                      </span>
                </ul>
            </div>
        </footer>
    </div>
  )
}
