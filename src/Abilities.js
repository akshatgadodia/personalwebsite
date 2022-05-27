import React from 'react'
import './AbilitiesCSS.css'
import {SkillsData,LanguagesData,ToolsData} from './Data/AbilitiesData.js'
import DisplayAbility from './DisplayAbility';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const Abilities = () => {
  const stars = (a) => {
    var list=[];
    var i;
    for(i=0; i<a; i++) {
      list.push(<StarIcon fontSize="small"/>);
    }
    for(i=0; i<5-a; i++) {
      list.push(<StarOutlineIcon fontSize="small"/>);
    }  
    return list ;
  }
  
  return (
    <div className='abilities' id='Abilities-Page'>
      <h1>Abilities</h1>
      “Life without knowledge is death in disguise.”
      <br /> - Talib Kweli
      <hr />
      <h4>Skills</h4>
      <div className='abilities-tab-div'>
          {SkillsData.map((item,index)=>{
              return(<DisplayAbility key={'A'+index} name={item.name} rating={stars(item.rating)}/>);
          })}
      </div>
      <hr />
      <h4>Languages</h4>
      <div className='abilities-tab-div'>
          {LanguagesData.map((item,index)=>{
              return(<DisplayAbility key={'B'+index} name={item.name} rating={stars(item.rating)}/>);
          })}
      </div>
      <hr />
      <h4>Tools</h4>
      <div className='abilities-tab-div'>
          {ToolsData.map((item,index)=>{
              return(<DisplayAbility key={'C'+index} name={item.name} rating={stars(item.rating)}/>);
          })}
      </div>
    </div>
  )
}

export default Abilities