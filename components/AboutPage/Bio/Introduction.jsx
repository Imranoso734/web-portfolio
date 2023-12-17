import { useState } from "react"
import React from 'react'
import { InfoCross } from "../InfoCross"
export const Introduction = () => {
  const [show, setShow] = useState(true)
  const hideData = () => {
    setShow(false);

  }
  return (
    <div>
      <div className="flex">
        {
          show ? (
            <InfoCross info="introduction" hideComponent={hideData} />
          ) : ('')}

      </div>
      {show && (
        <div className="border-t border-[#1E2D3D] px-5 text-[17px]">
          <h2 className='text-white text-xl my-3 '>Introduction:</h2>

          <p>
            I'm <span className='text-white underline italic'>Muhammad Imran</span>, 
            a dedicated full-stack web developer with a passion for creating outstanding digital experiences.
          </p>

         <p>My commitment to transforming innovative concepts into reality has led me to specialize in both front-end and back-end development.</p>
          <p>Through continuous learning and honing of my skills, I excel in crafting dynamic, user-centric web applications. My profound fascination for technology fuels my drive to stay abreast of the latest trends and deliver cutting-edge solutions.</p>
          <p>In essence, I'm driven by the challenge of turning ideas into tangible, impactful digital solutions.</p>
{/*  
          <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills Overview</h2>


            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Logistic System</h3>
              <p className="text-gray-700">
                I excel in designing and implementing logistic systems that streamline supply chain processes, ensuring efficient management, tracking, and optimization of resources.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Requisition System</h3>
              <p className="text-gray-700">
                My proficiency extends to developing requisition systems that enhance the request and approval workflow, providing a seamless and organized solution for resource requisition.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Delivery Management System</h3>
              <p className="text-gray-700">
                I have a proven track record in crafting Delivery Management Systems that optimize routes, manage deliveries, and provide real-time tracking, ensuring a smooth and reliable delivery process.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Face Recognition System</h3>
              <p className="text-gray-700">
                In the realm of biometrics, I specialize in Face Recognition Systems, implementing cutting-edge technology to enhance security measures and provide seamless user authentication.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Waste Management System</h3>
              <p className="text-gray-700">
                My skills include creating Waste Management Systems that contribute to sustainable practices, facilitating efficient waste disposal, recycling, and overall environmental responsibility.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Technical Proficiencies</h3>
              <ul className="list-disc pl-6">
                <li>Backend Development: Expertise in [mention backend technologies/frameworks you are proficient in].</li>
                <li>Database Management: Proficient in designing and managing databases to ensure data integrity and accessibility.</li>
                <li>System Integration: Adept at integrating diverse systems for seamless communication and functionality.</li>
              </ul>
            </div>

            <p className="text-gray-700">
              I am passionate about leveraging technology to solve complex problems and contribute to the efficiency and innovation of diverse systems.
            </p>
          </div>
*/}
        </div>)}
    </div>
  )
}
