import React from 'react'
import './AbilitiesCSS.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const DisplayAbility = (props) => {
  var list=[];
  var i;
  for(i=0; i<props.rating; i++) {
    list.push(<StarIcon fontSize="small"/>);
  }
  for(i=0; i<5-props.rating; i++) {
    list.push(<StarOutlineIcon fontSize="small"/>);
  }    
  return (
    <div className="display-ability">
        <div className='display-ability-name'>{props.name}</div>
        <div className='display-ability-rating'>
            {list}
        </div>
    </div>
  )
}

export default DisplayAbility