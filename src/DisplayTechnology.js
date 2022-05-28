import React from 'react'
import './ProjectsCSS.css'

const DisplayTechnology = (props) => {
  return (
    <div className='display-technology-div'><span>{props.name}</span></div>
  )
}

export default DisplayTechnology