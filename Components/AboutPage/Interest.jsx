import React, { useState } from 'react'
import { InfoCross } from './InfoCross'

export const Interest = () => {
    const [showInterestComponent, setShowInterestComponent] = useState(true);
    const [cross, setCross] = useState(true);
    const hideData = () => {
        setCross(false);
        setShowInterestComponent(false);
    }
    return (

        <div>
            <div className="flex">
                {cross &&
                    <InfoCross info='interest' hideComponent={hideData} />
                }
            </div>
            {
                showInterestComponent &&
                <InterestDetail />
            }
        </div>
    )
}


export const InterestDetail = () => {
    return (
        <div>
            <div className="border-t border-[#1E2D3D] mt-10 px-5">
              
             --*
              
               
            </div>
        </div>
    )
}
