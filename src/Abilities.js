import React from 'react'
import './AbilitiesCSS.css'
import {SkillsData,LanguagesData,ToolsData} from './Data/AbilitiesData.js'
import DisplayAbility from './DisplayAbility';
const Abilities = () => {
  return (
    <div className='abilities' id='Abilities-Page'>
      <h1>Abilities</h1>
      “Life without knowledge is death in disguise.”
      <br /> - Talib Kweli
      <hr />
      <h4>Skills</h4>
      <div className='abilities-tab-div'>
          {SkillsData.map((item,index)=>{
              return(<DisplayAbility key={index} name={item.name} rating={item.rating}/>);
          })}
      </div>
      <hr />
      <h4>Languages</h4>
      <div className='abilities-tab-div'>
          {LanguagesData.map((item,index)=>{
              return(<DisplayAbility key={index} name={item.name} rating={item.rating}/>);
          })}
      </div>
      <hr />
      <h4>Tools</h4>
      <div className='abilities-tab-div'>
          {ToolsData.map((item,index)=>{
              return(<DisplayAbility key={index} name={item.name} rating={item.rating}/>);
          })}
      </div>
    </div>
  )
}

export default Abilities