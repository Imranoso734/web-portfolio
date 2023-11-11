import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const Background = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
  return (
    <div>
           <div className="flex">
        {show && (
          <InfoCross info="professional background" hideComponent={hideData} />
        )}

      </div>
      { show && (
              <div className="border-t border-[#1E2D3D] px-5">
  <h2 className='text-white text-xl my-3'>Professional Background:</h2>
  <p >
  I hold a <span className='text-white'>bachelor</span> in <span className='text-white'>IT</span> from <span className='text-white'>University of Education Lahore</span>,
   where I gained a solid foundation in <span className='text-white'>software development</span> principles.
   My journey into the world of web development began <span className='text-white italic'>5 years ago</span>,
   and I have since continued to expand my expertise through continuous
   learning and professional development.
  </p>

</div>
)}
    </div>
  )
}
