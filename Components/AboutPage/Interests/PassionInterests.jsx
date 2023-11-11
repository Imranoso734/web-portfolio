import React from 'react'
import { useState } from 'react'
import { InfoCross } from '../InfoCross'
export const PassionInterests = () => {
    const [show, setShow] = useState(true)
    const hideData = () => {
      setShow(false);
     
    }
  return (
    <div>
        <div className="flex">
        {show && (
          <InfoCross info="passion & interests" hideComponent={hideData} />
        )}

      </div>
      { show && (
              <div className="border-t border-[#1E2D3D] px-5">
   <h2 className='text-lg text-white my-3 '>Passion and Interests:</h2>
                <p>I am deeply passionate about <span className='text-white'>staying </span>at the forefront of <span className='text-white'></span>
                    trends and emerging technologies. I find inspiration in <span className='text-white'>solving complex
                        problems</span> and delivering seamless user experiences.
                </p>

</div>
)}
    </div>
  )
}
