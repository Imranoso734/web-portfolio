import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const Skills = () => {
  const [show, setShow] = useState(true)
  const hideData = () => {
    setShow(false);

  }
  return (
    <div>
      <div className="flex">
        {show && (
          <InfoCross info="Skills" hideComponent={hideData} />
        )}

      </div>
      {show && (
        <div className="border-t border-[#1E2D3D] px-5">
          <h2 className='text-white text-xl my-3'>Skills:</h2>
          <ul className='list-disc ml-4'>
            <li className='writing-animation'><span className='text-white'>Front-end:</span> NextJS, ReactJS, VueJS, JavaScript, HTML, CSS, Tailwind.</li>
            <li><span className='text-white'>Back-end:</span> Node.js, ExpressJS, Fastify, Laravel, PhP .</li>
            <li><span className='text-white'>Databases:</span> MongoDB, PostgreSQL, MySQL .  </li>
            <li><span className='text-white'>Version Control:</span> Git, GitHub .  </li>
            <li><span className='text-white'>Deployment and Hosting:</span> AWS, digitalocean & More .</li>
            <li><span className='text-white'>Additional Tools:</span> RESTful APIs, GraphQL, Webpack, Babel, Vite .</li>
          </ul>

        </div>
      )}
    </div>
  )
}
