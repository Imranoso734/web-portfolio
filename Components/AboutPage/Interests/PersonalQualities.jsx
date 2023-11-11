import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const PersonalQualities = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
  return (
    <div>
        <div className="flex">
        {show && (
          <InfoCross info="personal qualities" hideComponent={hideData} />
        )}

      </div>
      { show && (
              <div className="border-t border-[#1E2D3D] px-5">
                <h2 className='text-lg text-white my-3 '>Personal Qualities:</h2>
                <p>As a <span className='text-white'>developer,</span> I bring a strong <span className='text-white'>problem-solving mindset</span>,
                    keen attention to detail, and a commitment to <span className='text-white'>writing
                        clean and maintainable code.</span> I am dedicated to <span className='text-white'>continuous
                            improvement</span> and am always eager to take on new challenges.
                </p>

</div>
)}
    </div>
  )
}
