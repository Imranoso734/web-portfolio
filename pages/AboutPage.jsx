import React, { useState } from 'react'
import { Navbar } from '@/Components/Global/Navbar'
import { Footer } from '@/Components/Global/Footer'
import { SideBar } from '@/Components/AboutPage/SideBar'
import { InfoCross } from '@/Components/AboutPage/InfoCross'
import { PersonalInfo } from '@/Components/AboutPage/PersonalInfo'
import { Introduction } from '@/Components/AboutPage/Bio/Introduction'
import { Background } from '@/Components/AboutPage/Bio/Background'
import { Skills } from '@/Components/AboutPage/Bio/Skills'
import { PassionInterests } from '@/Components/AboutPage/Interests/PassionInterests'
import { FullStack } from '@/Components/AboutPage/Certifications/FullStack'
import { PersonalQualities } from '@/Components/AboutPage/Interests/PersonalQualities'
import { Achievements } from '@/Components/AboutPage/Interests/Achievements'
import { Collaboration } from '@/Components/AboutPage/Interests/Collaboration'
import { ReactCertificate } from '@/Components/AboutPage/Certifications/ReactCertificate'
import { CloudPractitioner } from '@/Components/AboutPage/Certifications/CloudPractitioner'
import { FrontEnd } from '@/Components/AboutPage/Certifications/FrontEnd'
import { AgileScrum } from '@/Components/AboutPage/Certifications/AgileScrum'
import { GoogleAnalytics } from '@/Components/AboutPage/Certifications/GoogleAnalytics'
import { CollegeDegree } from '@/Components/AboutPage/Education/CollegeDegree'
import { UniversityDegree } from '@/Components/AboutPage/Education/UniversityDegree'

const AboutPage = () => {
  const [show, setShow] = useState(true);
  const [showPersonalInfoComponent, setShowPersonalInfoComponent] = useState(true);
  const [showIntroductionComponent, setShowIntroductionComponent] = useState(false)
  const [showBackgroundComponent, setShowBackgroundComponent] = useState(false)
  const [showSkillsComponent, setShowSkillsComponent] = useState(false);
  const [showPassionInterestsComponent, setShowPassionInterestsComponent] = useState(false);
  const [showFullStackDeveloperComponent, setShowFullStackDeveloperComponent] = useState(false);
  const [showPersoanlQualitiesComponent, setShowPersonalQualitiesComponent] = useState(false);
  const [showAchievementsComponents, setShowAchievementsComponents] = useState(false);
  const [showCollaborationComponents, setShowCollaborationComponents] = useState(false);
  const [showReactCertificationComponent, setShowReactCertificationComponent] = useState(false);
  const [showCloudPractitionerComponent, setShowCloudPractitionerComponent] = useState(false);
  const [showFrontEndDevelopervComponent, setShowFrontEndDeveloperComponent] = useState(false);
  const [showAgileScrumMasterCompnent, setshowAgileScrumMasterComponent] = useState(false);
  const [showGoogleCertificationComponent, setshowGoogleCertificationCompnent] = useState(false);
  const [showCollegeDegreeComponent, setShowCollegeDegreeComponent] = useState(false)
  const [showUniversityDegreeComponent, setShowUniversityDegreeComponent] = useState(false)
  const hideData = () => {
    setShow(false);
    setShowPersonalInfoComponent(false);
  }
  // Itroduction Component
  const showIntroduction = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowIntroductionComponent(true);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollegeDegreeComponent(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShow(false);
  }
  // Personal Info Component
  const showPersonalInfo = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollegeDegreeComponent(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(true);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShow(true);

  };
  // Background Component
  const showBackground = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(true)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowUniversityDegreeComponent(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setShowCollegeDegreeComponent(false)
    setshowGoogleCertificationCompnent(false);
    setShow(false);
  }
  // Skills Component
  const showSkills = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(true)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setShowCollegeDegreeComponent(false)
    setshowGoogleCertificationCompnent(false);
    setShow(false);
  }
  // Interest Component
  const showPassionInterests = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(true)
    setShowAchievementsComponents(false)
    setShowUniversityDegreeComponent(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShowCollegeDegreeComponent(false)
    setShow(false);
  }
  // Full Stack Developer Component
  const showFullStackDeveloper = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(true);
    setShowSkillsComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShowCollegeDegreeComponent(false)
    setShow(false);
  }
  // Personal Qualities Component
  const showPersonalQualities = () => {
    setShowPersonalQualitiesComponent(true);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setShowCollegeDegreeComponent(false)
    setshowGoogleCertificationCompnent(false);
    setShow(false);
  }
  //  Achievements Component
  const showAchievements = () => {
    setShowAchievementsComponents(true)
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShowCollegeDegreeComponent(false)
    setShow(false);
  }
  // Collaboration Component
  const showCollaboration = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(true);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowCollegeDegreeComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShow(false);
  }
  // React Certificaion Component
  const showReactCertification = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(true)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setShowCloudPractitionerComponent(false)
    setShowCollegeDegreeComponent(false)
    setshowGoogleCertificationCompnent(false);
    setShow(false);
  }
  // Cloud Practitioner
  const showCloudPractitioner = () => {
    setShowCloudPractitionerComponent(true)
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShowCollegeDegreeComponent(false)
    setShow(false);
  }
  //  Front End Developer
  const showFrontEndDeveloper = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowUniversityDegreeComponent(false)
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(true);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(false);
    setShowCloudPractitionerComponent(false)
    setShowCollegeDegreeComponent(false)
    setShow(false);
  }
  //  Agile scrum master
  const showAgileScrumMaster = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowUniversityDegreeComponent(false)
    setShowIntroductionComponent(false);
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(true);
    setshowGoogleCertificationCompnent(false);
    setShowCollegeDegreeComponent(false)
    setShowPersonalInfoComponent(false)
    setShowCloudPractitionerComponent(false)
    setShow(false);
  }
  //  Google Certificaiton
  const showGoogleCertification = () => {
    setShowPersonalQualitiesComponent(false);
    setShowFullStackDeveloperComponent(false);
    setShowCollegeDegreeComponent(false)
    setShowSkillsComponent(false)
    setShowBackgroundComponent(false)
    setShowIntroductionComponent(false);
    setShowUniversityDegreeComponent(false)
    setShowPassionInterestsComponent(false)
    setShowAchievementsComponents(false)
    setShowCollaborationComponents(false);
    setShowPersonalInfoComponent(false);
    setShowReactCertificationComponent(false)
    setShowFrontEndDeveloperComponent(false);
    setshowAgileScrumMasterComponent(false);
    setshowGoogleCertificationCompnent(true);
    setShowCloudPractitionerComponent(false);
    setShowPersonalInfoComponent(false)
    setShow(false);
  }
  // college Dgree Component
const showCollegeDegree = () =>{
  setShowCollegeDegreeComponent(true)
  setShowPersonalQualitiesComponent(false);
  setShowFullStackDeveloperComponent(false);
  setShowSkillsComponent(false)
  setShowBackgroundComponent(false)
  setShowIntroductionComponent(false);
  setShowPassionInterestsComponent(false)
  setShowAchievementsComponents(false)
  setShowCollaborationComponents(false);
  setShowPersonalInfoComponent(false);
  setShowReactCertificationComponent(false)
  setShowFrontEndDeveloperComponent(false);
  setshowAgileScrumMasterComponent(false);
  setshowGoogleCertificationCompnent(false);
  setShowCloudPractitionerComponent(false);
  setShowPersonalInfoComponent(false)
  setShowUniversityDegreeComponent(false)
  setShow(false);
}
// university degree Component
const showUniversityDegree = ()=> {
setShowUniversityDegreeComponent(true)
  setShowPersonalQualitiesComponent(false);
  setShowFullStackDeveloperComponent(false);
  setShowCollegeDegreeComponent(false)
  setShowSkillsComponent(false)
  setShowBackgroundComponent(false)
  setShowIntroductionComponent(false);
  setShowPassionInterestsComponent(false)
  setShowAchievementsComponents(false)
  setShowCollaborationComponents(false);
  setShowPersonalInfoComponent(false);
  setShowReactCertificationComponent(false)
  setShowFrontEndDeveloperComponent(false);
  setshowAgileScrumMasterComponent(false);
  setshowGoogleCertificationCompnent(false);
  setShowCloudPractitionerComponent(false);
  setShowPersonalInfoComponent(false)
  setShow(false);
}
  return (
    <>
      <div className='bg-[#011627] text-[#607B96] text-[16px]'>
        <Navbar />
        <div className="md:flex block">
          <span className='md:w-[357px] w-full md:border-l md:border-r md:border-[#1E2D3D]'>
            <SideBar showPersonalInfo={showPersonalInfo} showIntroduction={showIntroduction}
              showBackground={showBackground} showSkills={showSkills} showPassionInterests={showPassionInterests}
              showPersonalQualities={showPersonalQualities} showAchievements={showAchievements} showCollaboration={showCollaboration}
              showFullStackDeveloper={showFullStackDeveloper} showReactCertification={showReactCertification}
              showCloudPractitioner={showCloudPractitioner} showFrontEndDeveloper={showFrontEndDeveloper}
              showAgileScrumMaster={showAgileScrumMaster} showGoogleCertification={showGoogleCertification} 
              showCollegeDegree = {showCollegeDegree} showUniversityDegree={showUniversityDegree}/>
          </span>
          <span className='md:w-[77.5%] lg:h-[100vh] w-full'>

            {
              show ? (
                <InfoCross hideComponent={hideData} info="personal-info" />
              ) : (
                ''
              )
            }
            {
              showIntroductionComponent && <Introduction />
            }

            {
              showPersonalInfoComponent && <PersonalInfo />
            }
            {
              showBackgroundComponent && <Background />
            }
            {
              showSkillsComponent && <Skills />
            }
            {
              showPassionInterestsComponent && <PassionInterests />
            }
            {
              showPersoanlQualitiesComponent && <PersonalQualities />
            }
            {
              showAchievementsComponents && <Achievements />
            }
            {
              showCollaborationComponents && <Collaboration />
            }
              {
              showFullStackDeveloperComponent && <FullStack />
            }
             {
              showReactCertificationComponent && <ReactCertificate/>
             }
             {
              showCloudPractitionerComponent && <CloudPractitioner/>
             }
             {
              showFrontEndDevelopervComponent && <FrontEnd/>
             }
              {
                showAgileScrumMasterCompnent && <AgileScrum/>
              } 
              {
                showGoogleCertificationComponent && <GoogleAnalytics/>
              }
              {
                showCollegeDegreeComponent && <CollegeDegree/>
              }
              {
                showUniversityDegreeComponent && <UniversityDegree/>
              }
          </span>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default AboutPage