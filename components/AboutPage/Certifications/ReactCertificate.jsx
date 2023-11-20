import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const ReactCertificate = () => {
  const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
    const reactCertificate = [
        {
            title : 'React',
            source : 'Reactify Online',
            year : 'August/2020',
            description : 'The React.js Certification from Reactify Online demonstrates my expertise in building dynamic and interactive user interfaces using the React JavaScript library. I have successfully completed a series of in-depth courses, including React fundamentals, state management, and component architecture.'
            
        }
    ]
  return (
  
    <div>
  <div className="flex">
        {
        show ? (
          <InfoCross info="react.js" hideComponent={hideData} />
        ) : ('')}
          
      </div>
      {
        show && (
            <div className="border-t border-[#1E2D3D] px-5">
            <h2 className='text-white text-xl my-3 '>React.js Certificate:</h2>
         <div className="overflow-x-auto mb-3 w-full">
         <table class="table w-[900px]">
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
                reactCertificate.map((detail,index) => (
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
