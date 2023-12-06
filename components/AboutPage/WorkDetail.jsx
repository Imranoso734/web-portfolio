import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
export const WorkDetail = () => {

    return (
        <div>
            <div className="md:px-6 px-3 md:py-5 pb-12">
                <p>// Code snippet showcase:</p>
                
                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2 items-center my-5">
                        <Image alt='image' src='./user image 2.svg' width={36} height={36} className="rounded-full"></Image>
                        <span>
                            <Link href='' className='text-[#5565E8]'>@mimran</Link>
                            <p className=' text-[13px]'>create 5 months ago</p>
                        </span>
                    </div>
                    <div className="flex items-center md:gap-3 gap-1 text-[14px]">
                        <Image alt='image' src='./comments-icon.svg' width={15} height={15}></Image>
                        <li className='list-none'>Details</li>
                        <Image alt='image' src='./Star.svg' width={15} height={15}></Image>
                        <li className='list-none'>3 Starts</li>
                    </div>
                </div>
                <div className=" bg-[#011627]">
                  <Image alt='image' src='/code-1.png' width={400} height={600} className='h-[170px] w-[500px] rounded-lg border border-[#1E2D3D]'></Image>
                </div>
                <div className="flex items-center justify-between ">
                    <div className="flex gap-2 items-center my-5">
                        <Image alt='image' src='./user image 2.svg' width={36} height={36} className="rounded-full"></Image>
                        <span>
                            <Link href='' className='text-[#5565E8]'>@mimran</Link>
                            <p className='text-[13px]'>create 9 months ago</p>
                        </span>
                    </div>
                    <div className="flex items-center md:gap-3 gap-1 text-[14px]">
                        <Image alt='image' src='./comments-icon.svg' width={15} height={15}></Image>
                        <li className='list-none'>Details</li>
                        <Image alt='image' src='./Star.svg' width={15} height={15}></Image>
                        <li className='list-none'>0 Starts</li>
                    </div>
                </div>
                <div className=" bg-[#011627]">
                  <Image alt='image' src='/code-1.png' width={400} height={600} className='h-[170px] w-[500px] rounded-lg border border-[#1E2D3D]'></Image>
                </div>
             
            </div>
      

        </div>
    )
}
