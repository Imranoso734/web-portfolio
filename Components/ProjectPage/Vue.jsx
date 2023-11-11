import React, { useState } from 'react';
import Image from 'next/image';
import { InfoCross } from '../AboutPage/InfoCross';
const Bootstrap = () => {
    const [show, setShow] = useState(true);
    const hideData= ()=>{
        setShow(false);
    }
  
    const projectGallery = [
        {
            image: '/HtmlCssProjects/html-project-1.jpg',
            projectTitle: 'Project Title',
        },
        {
            image: '/HtmlCssProjects/html-project-1.jpg',
            projectTitle: 'Project Title',
        },
        {
            image: '/HtmlCssProjects/html-project-1.jpg',
            projectTitle: 'Project Title',
        },
        {
            image: '/HtmlCssProjects/html-project-1.jpg',
            projectTitle: 'Project Title',
        },
        {
            image: '/HtmlCssProjects/html-project-1.jpg',
            projectTitle: 'Project Title',
        },
        {
            image: '/HtmlCssProjects/html-project-1.jpg',
            projectTitle: 'Project Title',
        },
    ];

    return (
        <div>
             {
              show ? (
                <InfoCross hideComponent={hideData} info="Vue.js projects" />
              ) : (
                ''
              )
            }
           {
            show && (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 border-t border-[#1E2D3D] px-5 py-5">
                {projectGallery.map((details) => (
                    <a href="#" className='relative hover: img-overley cursor-pointer'>
                        <div className="cursor-pointer" key={details.id}>
                            <Image src={details.image} alt='img-1' width={100} height={100} className='w-full h-auto rounded-lg' />
                            <h3 className='overlay absolute flex items-center justify-center text-center text-white cursor-pointer'>{details.projectTitle}</h3>
                        </div>
                    </a>
                ))}
            </div>
            )
           }
            </div>





      

    );
}

export default Bootstrap;
