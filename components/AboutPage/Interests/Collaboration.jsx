import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const Collaboration = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
  return (
    <div>
        <div className="flex">
        {show && (
          <InfoCross info="collaboration" hideComponent={hideData} />
        )}

      </div>
      { show && (
              <div className="border-t border-[#1E2D3D] px-5">
                <h2  className='text-lg text-white my-3'>Collaboration:</h2>
                <p>My ability to communicate effectively and work collaboratively with cross-functional 
                    teams has been pivotal in the success of numerous projects. I value teamwork and
                     believe in fostering a positive and creative work environment.</p>

</div>
)}
    </div>
  )
}
