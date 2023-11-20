import React from 'react'
import Image from 'next/image'
export const InfoCross = (props) => {
  return (
    <div className=''>
           <div className="flex border-t border-[#1E2D3D] md:border-none">
                    <li className='hover:text-white cursor-pointer border-r border-[#1E2D3D] list-none px-6 py-2 flex items-center gap-5 text-[16px]'>{props.info} <Image src='./close-icon.svg' alt='image' width={20} height={20} className='after:border-[#1E2D3D] after:h-7 after:border-r' onClick={props.hideComponent}></Image></li>
                </div>
    </div>
  )
}
