import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const FrontEnd = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
    }
    const CloudPractitioner = [
        {
            title : 'Front-End Web Developer',
            source : 'Udacity',
            year : 'December 2018',
            description : 'Completing the Front-End Web Developer Nanodegree program at Udacity was a significant milestone in my journey. It provided hands-on experience with modern web technologies, responsive design, and performance optimization.'

        }
    ]
  return (
    <div>
        <div className="flex">
        {
        show ? (
          <InfoCross info="frontend-developer" hideComponent={hideData} />
        ) : ('')}
          
      </div>
      {
        show && (
            <div className="border-t border-[#1E2D3D] px-5">
            <h2 className='text-white text-xl my-3 '>AWS Certified Cloud Practitioner:</h2>
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
            {
                CloudPractitioner.map((detail,index) => (
                  <tr key={index}>
                  <td scope="row"className="border border-[#1E2D3D] p-2">{detail.title}</td>
                  <td className="border border-[#1E2D3D] p-2">{detail.source}</td>
                  <td className="border border-[#1E2D3D] p-2">{detail.year}</td>
                  <td className="border border-[#1E2D3D] p-2">{detail.description}</td>
                </tr>
            ))}
            </tbody>
           </table>
        </div>
             </div> 
        )
      }
    </div>
  )
}
