import React from 'react'
import { shop } from '../Data'

const Shop = () => {
  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>
        New <span> Arrivals</span>
      </h1>
      <div className='box-container'>
        {
            shop.map((item,index)=>(
                <div className='box'> 
                  <img src={item.img} alt="" />
                  <h3>Under 999</h3>
                  <div className='price'>
                   {item.price}
                  </div>
                  <a href="" className='btn'>
                    Add to Cart
                  </a>
                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Shop
