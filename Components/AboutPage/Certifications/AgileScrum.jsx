import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const AgileScrum = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
    }
    const CloudPractitioner = [
        {
            title : 'Agile Scrum Master Certification',
            source : 'Scrum Alliance',
            year : 'March 2018',
            description : 'As a Certified Scrum Master, I have a deep understanding of Agile principles and Scrum methodologies. This certification represents my commitment to facilitating effective teamwork, continuous improvement, and project success.'

        }
    ]
  return (
    <div>
        <div className="flex">
        {
        show ? (
          <InfoCross info="Agile Scrum Master" hideComponent={hideData} />
        ) : ('')}
          
      </div>
      {
        show && (
            <div className="border-t border-[#1E2D3D] px-5">
            <h2 className='text-white text-xl my-3 '>Agile Scrum Master:</h2>
          <div className="overflow-x-auto mb-3">
          <table class="table">
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
                  <td scope="row"className="border border-[#1E2D3D] p-2 text-center">{detail.title}</td>
                  <td className="border border-[#1E2D3D] p-2 text-center">{detail.source}</td>
                  <td className="border border-[#1E2D3D] p-2 text-center">{detail.year}</td>
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
