import React from 'react';
import { brand } from '../Data';

const Brands = () => {
  return (
    <section className='brands' id='brands'>
      <h1 className='heading'>
        Brands<span> Available</span>
      </h1>

      <div className='box-contain'>
        {
            brand.map((item,index)=>(
                <div className='boxes'> 

                  <img src={item.img} alt="" />
                  
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Brands
