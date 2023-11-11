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
          <InfoCross info="skills" hideComponent={hideData} />
        )}

      </div>
      { show && (
              <div className="border-t border-[#1E2D3D] px-5">
  <h2 className='text-white text-xl my-3'>Skills:</h2>
       <ul className='list-disc ml-4'>
       <li className='writing-animation'><span className='text-white'>Front-end:</span> HTML, CSS, JavaScript, React, Vue.js, Next.js .</li>
        <li><span className='text-white'>Back-end:</span> Node.js, Express, Ruby on Rails, Django, PhP .</li>
        <li><span className='text-white'>Databases:</span> MongoDB, PostgreSQL, MySQL .  </li>
        <li><span className='text-white'>Version Control:</span> Git, GitHub .  </li>
        <li><span className='text-white'>Deployment and Hosting:</span> AWS, Heroku, Netlify .</li>
        <li><span className='text-white'>Additional Tools:</span> RESTful APIs, GraphQL, Webpack, Babel .</li>
       </ul>

</div>
)}
    </div>
  )
}
