import React from 'react'
import { WorkDetail } from './WorkDetail'
import { PersonalDetail } from './PersonalDetail'
export const PersonalInfo = () => {
    return (
        <div>
            <div className="lg:flex block border-t border-[#1E2D3D]">
                <PersonalDetail />
                <WorkDetail />
            </div>
        </div>

    )
}