import React from 'react'
import './AboutMePageCSS.css'
import ProfileImage from './Resources/ProfileImage.png'
const AboutMePage = () => {
  return (
    <div className='about-me' id='About-Me-Page'>
            <h1>Profile</h1>
            I'm a creative java webdeveloper
            <hr />
            <div className='about-me-tab-div'>
                <div>
                    <h2>AboutMe</h2><br />
                    <p>
                        I'm a full stack developer who lives in Jaipur City. I’m a forever learner with academic foundation in 
                        computer science engineering. I constantly keep myself updated with latest design and technology trends.
                    </p>
                </div>
                <div>
                    <img src={ProfileImage} alt="" />
                </div>
                <div>
                    <h2>Details</h2><br />
                    <b>Name:</b><br />
                    Akshat Gadodia <br />
                    <b>Age:</b><br />
                    21 <br />
                    <b>Location:</b><br />
                    Jaipur, Rajasthan, India <br />
                </div>
            </div>
        </div>
  )
}

export default AboutMePage