import { useState } from "react"
import React from 'react'
import { InfoCross } from "../InfoCross"
export const FullStack = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
  return (
    <div>
         <div className="flex">
        {
        show ? (
          <InfoCross info="full-stack" hideComponent={hideData} />
        ) : ('')}

      </div>
        { show && (
            <div className="border-t border-[#1E2D3D] px-5">
        <h2 className='text-white text-xl my-3 '>Full Stack Certificate:</h2>
      <div className="overflow-x-auto mb-3">
      <table class="table w-[810px]">
        <thead>
          <tr className="border border-[#1E2D3D]">
            <th className="border border-[#1E2D3D] p-2 text-white">Title</th>
            <th className="border border-[#1E2D3D] p-2 text-white">Source</th>
            <th className="border border-[#1E2D3D] p-2 text-white">Month/Year</th>
            <th className="border border-[#1E2D3D] p-2 text-white">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row"className="border border-[#1E2D3D] p-2">Full-Stack Developer</td>
            <td className="border border-[#1E2D3D] p-2">XYZ Academy</td>
            <td className="border border-[#1E2D3D] p-2">January 2021</td>
            <td className="border border-[#1E2D3D] p-2">This certification from XYZ Academy is a testament to my comprehensive knowledge and proficiency in full-stack web development. It covers a wide range of technologies and best practices, including front-end frameworks, back-end languages, databases, and deployment strategies.</td>
          </tr>
        </tbody>
       </table>
      </div>
         </div> )}
    </div>
  )
}
