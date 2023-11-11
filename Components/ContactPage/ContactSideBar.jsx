import React, { useState } from 'react'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
export const ContactSideBar = () => {
    const [showAccount, setShowAccoutn] = useState(false)
    const [showContact, setShowContact] = useState(true)
    const showAccountsList = ()=>{
        setShowAccoutn(!showAccount)
    }
    const showContactList = ()=>{
        setShowContact(!showContact)
    }
    

  return (
    <div>
      <div className="md:flex bg-[#011627]">
      
        <div className="w-full border-l  border-[#1E2D3D]">
      
          <ul className='text-[16px]'>
          <li className='hover:text-white cursor-pointer border-t border-b border-[#1E2D3D] px-5  flex items-center gap-2 py-2'onClick={showContactList} > {showContact ? <FaAngleDown/> : <FaAngleRight/>} contacts</li>
        
         {
            showContact ? (
                <ul className='ml-6 my-3'>
                <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2'><Image alt='image' src='./mail-icon.svg' width={16} height={14}></Image> imranoso734@gmail.com</li>
                <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2'><Image alt='image' src='./phone-icon.svg' width={16} height={14}></Image> +923467026734</li>
    
                </ul>
            ) : (
                ''
            )
         }

            <li className='hover:text-white cursor-pointer border-t border-b border-[#1E2D3D] px-5  flex items-center gap-2 py-2' onClick={showAccountsList}> {showAccount ? <FaAngleDown/> : <FaAngleRight/>} <Image alt='image' src='./Vector.svg' width={16} height={14} ></Image> find-me-also-in </li>
           {
            showAccount ? (
              <ul className='ml-6 mt-3'>
              <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' ><Image alt='image' src='./social-icon.svg' width={16} height={14}></Image>facebook</li>
              <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' ><Image alt='image' src='./social-icon.svg' width={16} height={14}></Image>instagram</li>
              <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2'><Image alt='image' src='./social-icon.svg' width={16} height={14}></Image>twitter</li>
          </ul>
            ) : (
              ''
            )
            }
          </ul>
        
        </div>
      </div>
    </div>

  )
}
