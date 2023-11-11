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
        { show && (
            <div className="border-t border-[#1E2D3D] px-5">
        <h2 className='text-white text-xl my-3 '>Introduction:</h2>
        <p >I am <span className='text-white underline italic'>Muhammad Imran</span>, a passionate and highly skilled full-stack web developer
          dedicated to crafting exceptional digital experiences. With a deep-rooted
          fascination for technology and a drive to turn innovative ideas into reality,
          I have honed my skills in both front-end and back-end development to create
          dynamic and user-centric web applications.</p>
         </div> )}
    </div>
  )
}
