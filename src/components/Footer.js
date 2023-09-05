import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='share'>
                <a href="#" className='fab fa-facebook'></a>
                <a href="#" className='fab fa-twitter'></a>
                <a href="#" className='fab fa-instagram'></a>
                <a href="#" className='fab fa-pinterest'></a>
                <a href="#" className='fab fa-linkedin'></a>
            </div>

            <div className="links">
                <a href="">Home</a>
                <a href="#menu">Shop</a>
                <a href="#brands">Brands</a>
                <a href="#mostwanted">Most wanted</a>
                <a href="#about">About us</a>
                <a href="#contact">Contact</a>
            </div>
            <div className='credit'>
                created  by <span>Abhishek Mishra</span> | all rights reserved
            </div>

        </section>
    )
}

export default Footer
