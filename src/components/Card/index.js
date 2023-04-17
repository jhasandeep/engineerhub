import React from 'react'

import "./index.css"

const Card = (props) => {

    const {hiringDetails} = props 
    const {img, tText, hiringPosition, techStack, experience, eligibility, location, lastDate } = hiringDetails
  return (
    <li>

        <div className='card'>
            <img src={img} alt="website-logo"/>
            <h6 className='tText' >{tText}</h6>
            <div className='card-body'>

            <h6 className='card-title'>{hiringPosition}</h6>

            <div className='li-container'>
              <ul>
                <li>
                  <h6 className='li-item'>{techStack}</h6>
                </li>
                <li>
                <h6 className='li-item'>{experience}</h6>
                </li>
                <li>
                <h6 className='li-item'>{eligibility}</h6>

                </li>
              </ul>
            </div>

            
            

            
            <h6 className='location'>{location}</h6>
            <h6 className='last-date'>{lastDate}</h6>
            
            <button className="button">Apply</button>

            </div>
            

        </div>
    </li>
  )
}

export default Card