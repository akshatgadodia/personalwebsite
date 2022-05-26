import React from 'react'
import './EducationCSS.css'
import EducationData from './Data/EducationData.js'
import DisplayEducationDetails from './DisplayEducationDetails';

const Education = () => {
  console.log(EducationData);
  return (
    <div className='education' id='Education-Page'>
      <h1>Education</h1>
      “Protons give an atom its identity, electrons its personality.”
      <br /> - Bill Bryson, A short history of nearly everything
      <hr />
      {EducationData.map((item,i)=>{
        return(<DisplayEducationDetails key={i} institute={item.institute} date={item.date} course={item.course} details={item.details}/>)
      })}
    </div>
  )
}
export default Education