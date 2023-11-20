import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const Achievements = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
  return (
    <div>
        <div className="flex">
        {show && (
          <InfoCross info="achievements" hideComponent={hideData} />
        )}

      </div>
      { show && (
              <div className="border-t border-[#1E2D3D] px-5">
                <h2 className='text-lg text-white my-3' >Achievements:</h2>
                <p>I am proud to have received recognition for my work,
                    including [mention any awards, certifications, or acknowledgments
                    relevant to your field].
                </p>

</div>
)}
    </div>
  )
}
