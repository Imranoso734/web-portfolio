
import React, { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/Components/Global/Navbar'
import { Footer } from '@/Components/Global/Footer'

import { FaAngleRight } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'

const ProjectsPage = () => {
    const projectGallery = {

        html: {
            title: "HTML/CSS",
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        bootstrap: {
            title: 'Bootstrap',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Tailwind: {
            title: 'Tailwind',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Laravel: {
            title: 'Laravel',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        ReactProject: {
            title: 'ReactProject',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Shopify: {
            title: 'Shopify',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Vue: {
            title: 'Vue',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Node: {
            title: 'Node',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Wordpress: {
            title: 'Wordpress',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        },
        Next: {
            title: 'Next',
            images: [
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
                '/HtmlCssProjects/html-project-1.jpg',
            ],
            projectDetail: 'some detail of the project',
        }

    }
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
    };
    // Hide and Show the list of projects
    const [showProject, setShowProject] = useState(true);
    const showProjectList = () => {
        setShowProject(!showProject);
    }


    return (
        <div>
            <div className='bg-[#011627] text-[#607B96] text-[16px]'>
                <Navbar />
                <div className="md:flex bg-[#011627]">
                    <div className="w-full">
                        <li className='flex items-center gap-2 hover:text-white cursor-pointer px-5 border-b border-[#1E2D3D] py-2'
                            onClick={showProjectList}> {showProject ? <FaAngleDown /> : <FaAngleRight />}
                            <Image alt='image' src='./Vector.svg' width={16} height={14} ></Image> projects</li>
                        <div className="md:flex block">
                            <span className={` border-[#1E2D3D] md:border-r ${setSelectedLanguage ? 'h-[100vh]' : 'h-fit'}`}>
                                {
                                    showProject ? (
                                        <ul className={`ml-6 pb-5 w-60 ${showProject ? 'h-fit' : 'h-[100vh]'}`}>
                                            {Object.keys(projectGallery).map((project) => (
                                                <li
                                                    key={project}
                                                    onClick={() => handleLanguageClick(project)}
                                                    className={`hover:text-white cursor-pointer leading-5 pt-4
                                                     ${selectedLanguage === project ? 'selected text-white' : ''}`}
                                                >
                                                    {projectGallery[project].title}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        ''
                                    )
                                }
                            </span>
                            <span className='w-full '>
                                {selectedLanguage && (
                                    <div className=''>
                                        <h3 className='px-5 py-3 flex gap-3 border-[#1E2D3D] border-r w-[150px]'>
                                            {projectGallery[selectedLanguage].title}
                                            <Image alt='image' src='./close-icon.svg' width={20} height={20}
                                                className=' cursor-pointer'
                                           
                                                onClick={() => setSelectedLanguage(null)}></Image>
                                        </h3>
                                 
                                    <LanguageImages images={projectGallery[selectedLanguage].images}
                                            projectDetail={projectGallery[selectedLanguage].projectDetail} />
                                 
                                    </div>
                                )}
                            </span>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ProjectsPage


const LanguageImages = ({ images, projectDetail }) => {
    const [showDetail, setShowDetail] = useState(false);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 px-5 py-5 border-t border-[#1E2D3D]'>
            {images.map((imageUrl, index) => (
                <a href="#" className='relative hover: img-overley cursor-pointer rounded-lg'
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}>
                    <div key={index}>
                        <Image src={imageUrl} alt={`Image ${index + 1}`} width={100} height={100} className='w-full h-auto rounded-lg relative ' />
                        {showDetail && (
                            <h3 className='overlay rounded-lg absolute flex items-center justify-center text-center text-white cursor-pointer'>
                                {projectDetail}
                            </h3>
                        )}

                    </div>
                </a>
            ))}


        </div>
    );
};

