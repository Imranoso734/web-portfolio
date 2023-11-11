import React from 'react'
import { Navbar } from '@/Components/Global/Navbar'
import { InfoCross } from '@/Components/AboutPage/InfoCross'
import { useState } from 'react'
import { Footer } from '@/Components/Global/Footer'
import { ContactForm } from '@/Components/ContactPage/ContactForm'
import { ContactSideBar } from '@/Components/ContactPage/ContactSideBar'
export  const ContactPage = () => {
    const [show, setShow] = useState(true)
    const [showFormComponent, setShowFormComponent] = useState(true)
    const hideData = () => {
        setShow(false);
        setShowFormComponent(false);
    }
    return (
        <div>
          <div className='bg-[#011627] text-[#607B96] text-[16px]'>
        <Navbar />
        <div className="md:flex block">
          <span className='md:w-[357px] w-full md:border-l md:border-r md:border-[#1E2D3D]'>
            {
              <ContactSideBar/>
            }
          </span>
          <span className='md:w-[77.5%] lg:h-[100vh] w-full'>
            {
              show ? (
                <InfoCross hideComponent={hideData} info="contact form" />
              ) : (
                ''
              )
            }
            {
                showFormComponent && <ContactForm/>
            }
            </span>
        </div>
        <Footer />
      </div>
   

        </div>
    )
}
export default ContactPage