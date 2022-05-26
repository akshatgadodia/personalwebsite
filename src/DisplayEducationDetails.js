import React from 'react'
import './EducationCSS.css'

const DisplayEducationDetails = (props) => {
  return (
    <div className='education-tab-div'>
        <div className='education-details'>
              <b>{props.institute}</b><br />
              {props.date}
        </div>
        <div className='education-course'>
              {props.course}<br />
              <span>{props.details}</span>
        </div>
      </div>
  )
}

export default DisplayEducationDetails