import React, { useState } from 'react'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
export const ProjectSideBar = (props) => {
    const [showProject, setShowProject] = useState(true);
    const showProjectList = ()=>{
        setShowProject(!showProject);
    }
    return (
        <div>
            <div className="md:flex bg-[#011627] lg:h-[100vh]">
                <div className="w-full border-l  border-[#1E2D3D]">
                    <ul className='text-[16px]'>
                        <li  className='flex items-center gap-2 hover:text-white cursor-pointer px-5 border-b border-[#1E2D3D] py-2' onClick={showProjectList}> {showProject ? <FaAngleDown /> : <FaAngleRight />} <Image alt='image' src='./Vector.svg' width={16} height={14} ></Image> projects</li>
                        {
                            showProject ? (
                                <ul className='ml-6 my-3'>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showHtmlProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>HTML/CSS</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showBootstrapProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Bootstrap</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showTailwindProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Tailwind</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showLaravelProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Laravel</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showReactProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>React</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showShopifyProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Shopify</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showNextProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Next</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showVueProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Vue.Js</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showNodeProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>NodeJS</li>
                                    <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 py-1' onClick={props.showWordpressProject}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Wordpress</li>
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
