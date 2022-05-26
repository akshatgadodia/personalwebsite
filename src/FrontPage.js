import React from 'react'
import './FrontPage.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FrontPage = () => {
  return (
    <div id='Front-Page'>
        <div className="context">
            Hello I'm
            <h1>Akshat Gadodia</h1>
        </div>
        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
        <div className="navigation-button">
            <a href='#About-Me-Page'><ArrowCircleRightIcon fontSize='large'/></a>
        </div>
        <div className="navigation-bar-button">
            <a href='#About-Me-Page'><ArrowDownwardIcon fontSize='large' className='navigation-bar-button-link'/></a>
        </div>
    </div>
  )
}

export default FrontPage