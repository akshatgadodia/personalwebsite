import React from 'react';
import './AbilitiesCSS.css';


const DisplayAbility = (props) => {
   
  return (
    <div className="display-ability">
        <div className='display-ability-name'>{props.name}</div>
        <div className='display-ability-rating'>{props.rating}</div>
    </div>
  )
}

export default DisplayAbility