import React, { useEffect, useState } from 'react'
import { InfoCross } from './InfoCross'

export const Bio = () => {
  const [bioDetail, setBioDetail] = useState(true)
  const [show, setShow] = useState(true)
  const hideData = () => {
    setShow(false);
    setBioDetail(false)
  }

  return (
    <div>
      <div className="flex">
        {show && (
          <InfoCross info="bio" hideComponent={hideData} />
        )}

      </div>
      <div>
        {
          bioDetail && (
            <BioDetail />
          )
        }

      </div>
    </div>
  )
}
export const BioDetail = () => {
  return (
    <div>
      <div>
      
      



      </div>
    </div>
  )
}

// export const ContentEffect = () => {
//   const [text,setText] = useState ('');
//   const content = 'I hold abachelor in IT fromUniversity of Education Lahore, where I gained a solid foundation in software development principles. My journey into the world of web development began5 years ago,and I have since continued to expand my expertise through continuous learning and professional development.'
//   useEffect ( ()=>{
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setText(prevText => prevText + content[index]);
//       index++;
//       if (index === content.length) clearInterval(intervalId);
//     }, 50); 
//   }, [content]);
//   return (
//     <div>
//             <div>{text}</div>
//     </div>
//   )
// }
