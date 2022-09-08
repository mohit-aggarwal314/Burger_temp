import React from 'react'
import aboutimage from '../images/about.png';
import dot from '../images/b3dot.png'

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis amet est ad dicta. Esse porro dignissimos odit consequuntur nobis perferendis quae facere, repellendus, quidem labore qui aliquid deleniti nesciunt illum!</p>
            <img src={dot} alt="" />
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
    </div>
  )
}

export default About