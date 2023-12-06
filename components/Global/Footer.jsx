import React from 'react';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
export const Footer = () => {
  return (

      <footer>
        <div className=" bg-[#011627] border-b text-gray-400 border-t border-[#1E2D3D] h-[44px] fixed bottom-0 w-full">
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
                  <a href="" className='pt-3 pb-1  pl-4 hover:text-white flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>

                    <span className='md:block hidden pb-1'>username</span></a>
                </li>
              </span>
            </span>
          </ul>
        </div>
      </footer>
  )
}
