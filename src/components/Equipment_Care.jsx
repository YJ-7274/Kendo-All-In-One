import React from 'react'
import {home_image} from '../assets'
const Equipment_Care = () => {
  return (
    <div className='w-full grid grid-cols-1 grid-rows-2 justify-center content-center gap-y-8'>
      <div className="w-full h-1/2 bg-no-repeat bg-cover">
        <img src={home_image} alt="home_image" />
    </div>
    </div>
  )
}

export default Equipment_Care;