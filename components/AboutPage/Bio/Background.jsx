import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const Background = () => {
  const [show, setShow] = useState(true)
  const hideData = () => {
    setShow(false);

  }
  return (
    <div>
      <div className="flex">
        {show && (
          <InfoCross info="professional background" hideComponent={hideData} />
        )}

      </div>
      {show && (
        <div className="border-t border-[#1E2D3D] px-5">
          <h2 className='text-white text-xl my-3'>Professional Background:</h2>
          <p >
            During my undergraduate studies, I gained a foundational understanding of software development principles. My foray into web development commenced five years ago, and throughout this period, I've actively expanded my expertise through continuous learning and hands-on projects.
          </p>
          <br />
          <p>
            Some notable projects that showcase my skills include:
          </p>

          <br />

          <ul className='list-decimal px-3 md:text-[15px]'>
            <li>E-commerce Platform: Led the development of a fully functional e-commerce website, implementing secure payment gateways and enhancing user experience.</li>
            <li>
              Task Management App: Created a task management application with collaborative features, allowing team members to streamline project workflows efficiently.
            </li>
            <li>
              Portfolio Website: Designed and developed a personal portfolio website to showcase my work and skills, incorporating responsive design principles for optimal user engagement.


            </li>
          </ul>

        </div>
      )}
    </div>
  )
}
