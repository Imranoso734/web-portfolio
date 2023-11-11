import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const CloudPractitioner = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
    }
    const CloudPractitioner = [
        {
            title : 'AWS Certified Cloud Practitioner',
            source : '-',
            year : 'june 2019',
            description : 'The AWS Certified Cloud Practitioner certification signifies my understanding of fundamental AWS services and cloud computing concepts. It validates my ability to navigate the AWS ecosystem and make informed decisions about cloud resources and architecture.'

        }
    ]
  return (
    <div>
        <div className="flex">
        {
        show ? (
          <InfoCross info="cloud practitioner" hideComponent={hideData} />
        ) : ('')}
          
      </div>
      {
        show && (
            <div className="border-t border-[#1E2D3D] px-5">
            <h2 className='text-white text-xl my-3 '>AWS Certified Cloud Practitioner:</h2>
         <div className="overflow-x-auto">
         <table class="table w-[810px] mb-4">
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
