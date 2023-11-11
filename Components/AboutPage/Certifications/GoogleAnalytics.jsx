import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const GoogleAnalytics = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
    }
    const CloudPractitioner = [
        {
            title : 'Google Analytics Certification',
            source : '-',
            year : 'October 2017',
            description : 'My Google Analytics certification demonstrates my proficiency in web analytics tools and data-driven decision-making. It allows me to analyze user behavior, optimize websites, and provide valuable insights to clients and stakeholders.'

        }
    ]
  return (
    <div>
        <div className="flex">
        {
        show ? (
          <InfoCross info="google-analytics" hideComponent={hideData} />
        ) : ('')}
          
      </div>
      {
        show && (
            <div className="border-t border-[#1E2D3D] px-5">
            <h2 className='text-white text-xl my-3 '>Google Analytics Certificate:</h2>
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
