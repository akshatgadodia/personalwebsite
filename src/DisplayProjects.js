import React from 'react'
import DisplayTechnology from './DisplayTechnology'
import './ProjectsCSS.css'

const DisplayProjects = (props) => {
  return (
    <div className='display-projects-div'>
        <h3>{props.name}</h3>
        {/* <h4>{props.index}</h4> */}
        <br />
        {props.details}
        <br /><br />
        <div className='display-projects-technology-div'>
            {props.technology.map((item,index)=>{
                return(<DisplayTechnology key={index} name={item}/>)
            })}
        </div>
    </div>
  )
}

export default DisplayProjects