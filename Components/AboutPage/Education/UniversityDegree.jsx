import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const UniversityDegree = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
    }
    const CloudPractitioner = [
        {
            college : 'University of Education Lahore',
            year : 'March 2018',
            location : 'Multan',
            degree : 'FSc',
        }
    ]
  return (
    <div>
        <div className="flex">
        {
        show ? (
          <InfoCross info="university" hideComponent={hideData} />
        ) : ('')}
          
      </div>
      {
        show && (
            <div className="border-t border-[#1E2D3D] px-5">
            <h2 className='text-white text-xl my-3 '>Education:</h2>
           <table class="table w-full">
            <thead>
              <tr className="border border-[#1E2D3D]">
                <th className="border border-[#1E2D3D] p-2 text-white">University</th>
                <th className="border border-[#1E2D3D] p-2 text-white">Year</th>
                <th className="border border-[#1E2D3D] p-2 text-white">Location</th>
                <th className="border border-[#1E2D3D] p-2 text-white">Degree Earned</th>
              </tr>
            </thead>
            <tbody>
            {
                CloudPractitioner.map((detail,index) => (
                  <tr key={index} className='text-center'>
                  <td scope="row"className="border border-[#1E2D3D] p-2">{detail.college}</td>
                  <td className="border border-[#1E2D3D] p-2">{detail.year}</td>
                  <td className="border border-[#1E2D3D] p-2">{detail.location}</td>
                  <td className="border border-[#1E2D3D] p-2">{detail.degree}</td>
                </tr>
            ))}
            </tbody>
           </table>
             </div> 
        )
      }
    </div>
  )
}
