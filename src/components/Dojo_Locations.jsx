import React from 'react'

const Dojo_Locations = () => {

  return (
    <div className=' grid grid-cols-3 gap-4 sm:w-full w-1/4'>       
      <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
        <p>List of AUSKF affiliated Kendo Dojos in the United States</p>
      </div>

      <div className='col-span-2'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1bdYRPtF1KRUd6ymUb4_Q1h7wSJ3X-E-I&ehbc=2E312F" width="50%" height="500"></iframe>
      </div>

      <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
        <p>List of CKF affiliated Kendo Dojos in Canada</p>
      </div>

      <div className='col-span-2'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1nHSj-c735-i2IyeghohRn25IwP8&hl=en&ehbc=2E312F" width="640" height="500"></iframe>
      </div>

      <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
        <p>List of EKF affiliated Kendo Dojos in Europe (scroll down a little and look up your country/city) </p>
      </div>

      <div className='col-span-2'>
        <iframe src="https://www.ekf-eu.com/index.php?page=dojos" width="200%" height="500" marginheight='200px'></iframe>
      </div>
      
    </div>
    
  )
}

export default Dojo_Locations