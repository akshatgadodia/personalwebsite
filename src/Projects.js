import React from 'react'
import ProjectData from './Data/ProjectData'
import './ProjectsCSS.css'
import DisplayProjects from './DisplayProjects';


const Projects = () => {
  return (
    <div className='projects' id='Projects-Page'>
      <h1>Projects</h1>
      “You can do anything you set your mind to.”
      <br /> - Benjamin Franklin
      <hr />
      <div className='projects-div'>
        {ProjectData.map((item,index)=>{
          return(<DisplayProjects key={index} name={item.name} index={item.index} details={item.details} technology={item.technology} link={item.link}/>)
        })}
      </div>
    </div>
  )
}

export default Projects