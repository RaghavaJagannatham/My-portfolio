import React from "react"
import { Link } from "react-router-dom"

const HomeCard = ({ item: { id, cover, name,  time, starring, tags} }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              
              
              <label><i class="fa-regular fa-calendar calendar"></i>
             {time}</label>
            </div>
            
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className='primary-btn'>
              Book Now <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default HomeCard
