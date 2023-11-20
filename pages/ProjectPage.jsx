import React, { useState } from 'react'
import { Navbar } from '@/components/Global/Navbar'
import { Footer } from '@/components/Global/Footer'
import { ProjectSideBar } from '@/components/ProjectPage/ProjectSideBar'
import HtmlCss from '@/components/ProjectPage/HtmlCss'
import Bootstrap from '@/components/ProjectPage/Bootstrap'
import Tailwind from '@/components/ProjectPage/Tailwind'
import Laravel from '@/components/ProjectPage/Laravel'
import ReactProject from '@/components/ProjectPage/ReactProject'
import Shopify from '@/components/ProjectPage/Shopify'
import Vue from '@/components/ProjectPage/Vue'
import Node from '@/components/ProjectPage/Node'
import Wordpress from '@/components/ProjectPage/Wordpress'
import Next from '@/components/ProjectPage/Next'
export const ProjectPage = () => {
    const [showHtmlProjectComponent, setShowHtmlProjectComponent] = useState(true);
    const [showBootstrapProjectComponent, setShowBootstrapProjectComponent] = useState(false)
    const [showTailwindProjectComponent, setShowTailwindProjectComponent] = useState(false)
    const [showLaravelProjectComponent, setShowLaraveProjectComponent] = useState(false)
    const [showReactProjectComponent, setShowReactProjectComponent] = useState(false)
    const [showShopifyProjectComponent, setShowShopifyProjectComponent] = useState(false)
    const [showVueProjectComponent, setShowVueProjectComponent] = useState(false)
    const [showNodeProjectComponent, setShowNodeProjectComponent] = useState(false);
    const [showWordpressProjectCompnent, setShowWordpressProjectComponent] = useState(false)
    const [showNextProjectComponent, setShowNextProjectComponent] = useState(false)
    // Html/css Project
    const showHtmlProject = () => {
        setShowHtmlProjectComponent(true)
        setShowBootstrapProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowLaraveProjectComponent(false)
        setShowShopifyProjectComponent(false);
        setShowReactProjectComponent(false)
        setShowVueProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
    }
    // Bootstrap Project
    const showBootstrapProject = () => {
        setShowBootstrapProjectComponent(true);
        setShowHtmlProjectComponent(false);
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowReactProjectComponent(false)
        setShowShopifyProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowVueProjectComponent(false);
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
    }
    // Tailwind Project
    const showTailwindProject = () => {
        setShowTailwindProjectComponent(true)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowLaraveProjectComponent(false)
        setShowReactProjectComponent(false)
        setShowShopifyProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowVueProjectComponent(false);
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
    }
    // Laravel Project
    const showLaravelProject = () => {
        setShowLaraveProjectComponent(true)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowHtmlProjectComponent(false);
        setShowReactProjectComponent(false)
        setShowVueProjectComponent(false);
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
        setShowShopifyProjectComponent(false);
    }
    // React Component
    const showReactProject = () => {
        setShowReactProjectComponent(true)
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowShopifyProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowVueProjectComponent(false);
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
    }
    // Shopify Project
    const showShopifyProject = () => {
        setShowShopifyProjectComponent(true);
        setShowReactProjectComponent(false)
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowVueProjectComponent(false);
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
    }
    // Vue.js Project Component
    const showVueProject = () => {
        setShowVueProjectComponent(true)
        setShowShopifyProjectComponent(false);
        setShowReactProjectComponent(false)
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowNextProjectComponent(false)
        setShowNodeProjectComponent(false)
        setShowWordpressProjectComponent(false)
    }
    // Node.js Project
    const showNodeProject = () => {
        setShowNodeProjectComponent(true)
        setShowVueProjectComponent(false)
        setShowShopifyProjectComponent(false);
        setShowReactProjectComponent(false)
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowWordpressProjectComponent(false)
        setShowNextProjectComponent(false)
    }
    // Wordpress Project
    const showWordpressProject = () => {
        setShowWordpressProjectComponent(true)
        setShowVueProjectComponent(false)
        setShowShopifyProjectComponent(false);
        setShowReactProjectComponent(false)
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowNodeProjectComponent(false)
        setShowNextProjectComponent(false)
    }
    // Next Project
    const showNextProject = () => {
        setShowNextProjectComponent(true)
        setShowWordpressProjectComponent(false)
        setShowVueProjectComponent(false)
        setShowShopifyProjectComponent(false);
        setShowReactProjectComponent(false)
        setShowLaraveProjectComponent(false)
        setShowTailwindProjectComponent(false)
        setShowBootstrapProjectComponent(false);
        setShowHtmlProjectComponent(false);
        setShowNodeProjectComponent(false)
    }
    return (
        <div>
            <div className='bg-[#011627] text-[#607B96] text-[16px]'>
                <Navbar />
                <div className="md:flex block">
                    <span className='md:w-[357px] w-full md:border-l md:border-r md:border-[#1E2D3D]'>
                        {
                            <ProjectSideBar showHtmlProject={showHtmlProject} showBootstrapProject={showBootstrapProject}
                                showTailwindProject={showTailwindProject} showLaravelProject={showLaravelProject} showReactProject={showReactProject}
                                showShopifyProject={showShopifyProject} showVueProject={showVueProject} showNodeProject={showNodeProject} showWordpressProject={showWordpressProject} showNextProject={showNextProject} />
                        }
                    </span>
                    <span className='md:w-[77.5%] lg:min-h-full w-full'>
                        {
                            showHtmlProjectComponent && <HtmlCss />
                        }
                        {
                            showBootstrapProjectComponent && <Bootstrap />
                        }
                        {
                            showTailwindProjectComponent && <Tailwind />
                        }
                        {
                            showLaravelProjectComponent && <Laravel />
                        }
                        {
                            showReactProjectComponent && <ReactProject />
                        }
                        {
                            showShopifyProjectComponent && <Shopify />
                        }
                        {
                            showVueProjectComponent && <Vue />
                        }
                        {
                            showNodeProjectComponent && <Node />
                        }
                        {
                            showWordpressProjectCompnent && <Wordpress />
                        }
                        {
                            showNextProjectComponent && <Next />
                        }
                    </span>
                </div>
                <Footer />
            </div>


        </div>
    )
}
export default ProjectPage