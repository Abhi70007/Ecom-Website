import React from 'react'
import AboutImg from "../Asset/imgs/bg2.jpg"

const About = () => {
  return (
    <>
      <section className='about' id='about'>
        <h1 className='heading'>
          <span>About </span> us
        </h1>
        <div className='row'>
          <div className='image'>
            <img src={AboutImg} alt="" />
          </div>

          <div className='content'>
            <h3>What Makes Our Brands Super</h3>
            <p>“…branding is your fundamental  promise of whom you serve, how you make them feel and what’s different about how you deliver. Marketing is how you get this message out there once you have defined it”</p>
          
             <a href="#" className='btn'>Learn more</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

