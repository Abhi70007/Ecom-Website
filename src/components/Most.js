import React from 'react';
import { most } from '../Data';

const Most = () => {
    return (
        <section className='most' id='mostwanted'>
            <h1 className='heading'>
                Most Wanted <span>Products</span>
            </h1>

            <div className='box-container'>
                {
                    most.map((item, index) => (
                        <div className='box'>
                            <div className="icons">

                                <a href="#" className='fas fa-shopping-cart'></a>
                                <a href="#" className='fas fa-heart'></a>
                                <a href="#" className='fas fa-eye'></a>
                            </div>
                            <div className='image'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='content'>
                                <h3>Hurry Up</h3>
                                <p>Likely sold in 5 hours</p>
                                <div className="stars">
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star-half-alt' />
                                </div>

                                <div className='price'>
                                    $1299 <span>$1499</span>
                                </div>
                            </div>



                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Most
