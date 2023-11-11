import React, { useState } from 'react'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import { useRouter } from 'next/router';
export const SideBar = ({ showPersonalInfo, showIntroduction, showBackground,
  showSkills, showPassionInterests, showPersonalQualities, showCollaboration, showAchievements, showFullStackDeveloper, showReactCertification,
  showCloudPractitioner, showFrontEndDeveloper, showAgileScrumMaster, showGoogleCertification, showCollegeDegree, showUniversityDegree }) => {
  const [showEducation, setShowEducation] = useState(false);
  const [showCertification, setShowCertifciation] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showInterest, setShowInterest] = useState(false);
  const showEducationList = () => {
    setShowEducation(!showEducation)
  }
  const showCertificationList = () => {
    setShowCertifciation(!showCertification)
  }
  const showBioList = () => {
    setShowBio(!showBio);
  }
  const showInterestList = () => {
    setShowInterest(!showInterest);
  }
  const router = useRouter();

  return (
    <div>
      <div className="md:flex bg-[#011627]">
        <div className="border-[#1E2D3D] md:block hidden py-4 px-3 h-[100vh]">
          <Image alt='image' src='./personal-info-icon.svg' width={20} height={24}></Image>

          <Image alt='image' src='./professional-info-icon.svg' width={20} height={24} className='my-5' ></Image>

          <Image alt='image' src='./hobbies-icon.svg' width={20} height={24}></Image>
        </div>
        <div className="w-full border-l  border-[#1E2D3D]">
          <ul className='text-[16px]'>

            <li className='hover:text-white cursor-pointer px-5 border-b border-[#1E2D3D] py-2' onClick={showPersonalInfo}>personal-info</li>
            {/* <Link href='/AboutPage' className='hover:text-white cursor-pointer px-5  flex items-center gap-2 pt-1.5' onClick={showBio}><FaAngleRight/><Image alt='image' src='/Vector.svg' width={16} height={14} ></Image> about-me</Link> */}

            <li className='hover:text-white cursor-pointer px-5  flex items-center gap-2 pt-1.5' onClick={showBioList}> {showBio ? <FaAngleDown /> : <FaAngleRight />} <Image alt='image' src='/Vector.svg' width={16} height={14} ></Image> bio</li>
            {
              showBio ? (
                <ul className='ml-6'>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showIntroduction}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Introduction</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showBackground}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Professional Background</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showSkills}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Skills</li>
                </ul>
              ) : (
                ''
              )
            }
            <li className='hover:text-white cursor-pointer px-5  flex items-center gap-2' onClick={showInterestList}>{showInterest ? <FaAngleDown /> : <FaAngleRight />}<Image alt='image' src='/Vector (2).svg' width={16} height={14}></Image> interests</li>
            {
              showInterest ? (
                <ul className='pl-6'>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showPassionInterests}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Passion and Interests</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 ' onClick={showPersonalQualities}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Personal Qualities</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showAchievements}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Achievements</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showCollaboration}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Collaboration</li>
                </ul>
              ) : (
                ''
              )
            }
            <li className='hover:text-white cursor-pointer px-5  flex items-center gap-2' onClick={showCertificationList}>{showCertification ? <FaAngleDown /> : <FaAngleRight />}<Image alt='image' src='/Vector (2).svg' width={16} height={14}></Image> certifications</li>
            {
              showCertification ? (
                <ul className='ml-6'>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showFullStackDeveloper}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Full-Stack Developer</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showReactCertification}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>React.js Certification</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showCloudPractitioner}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>AWS Cloud Practitioner</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showFrontEndDeveloper}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Front-End Web Developer</li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showAgileScrumMaster}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Agile Scrum Master </li>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showGoogleCertification}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image>Google Analytics Certification</li>


                </ul>
              ) : (
                ''
              )
            }

            <li className='hover:text-white cursor-pointer px-5 pb-2  flex items-center gap-2' onClick={showEducationList}> {showEducation ? <FaAngleDown /> : <FaAngleRight />} <Image alt='image' src='./Vector (3).svg' width={16} height={14}></Image> education</li>
            {
              showEducation ? (
                <ul className='ml-6'>
                  <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2' onClick={showCollegeDegree}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image> high-school</li>
                  <li className='hover:text-white cursor-pointer px-5 pb-2 flex items-center gap-2' onClick={showUniversityDegree}><Image alt='image' src='./Vector (4).svg' width={16} height={14}></Image> university</li>
                </ul>
              ) : (
                ''
              )
            }
          </ul>
          <ul className=''>
            <li className='hover:text-white cursor-pointer border-t border-b border-[#1E2D3D] py-2 px-6'>contacts</li>
            <li className='hover:text-white cursor-pointer px-5 flex items-center gap-2 pt-1.5'><Image alt='image' src='./mail-icon.svg' width={16} height={14}></Image> imranoso734@gmail.com</li>
            <li className='hover:text-white cursor-pointer px-5 pb-2 flex items-center gap-2'><Image alt='image' src='./phone-icon.svg' width={16} height={14}></Image> +923467026734</li>

          </ul>
        </div>
      </div>
    </div>

  )
}
