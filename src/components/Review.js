import React from 'react';
import { review } from '../Data';


const Review = () => {
    return (
        <section className='review' id='review'>
            <h1 className='heading'>
                Customer's <span> review</span>
            </h1>
            <div className='box-container'>

                {review.map((item, index) => (
                    <div className="box">
                       
                        <p>
                            It was a amazing place and The staff was very nice and knew about everything like Harry Potter,Marvel etc.My favourite part the mirror they had made it look like the wanted poster in Harry Potter so it was like you were wanted!
                        </p>
                        <img src={item.img} alt="" className='user' />
                        <h3>John doe</h3>
                        <div className="stars">
                        <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star-half-alt' />
                        </div>
                    </div>


                ))
                }

            </div>

        </section>
    )
}

export default Review
