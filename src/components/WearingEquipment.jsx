import React from 'react'

const WearingEquipment = () => {
  return (
    <div className=' grid grid-cols-3 gap-4 w-full  '>       
      <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
        <span>Wearing your hakama & gi</span>
      </div>

      <div className='col-span-2'>
      <iframe width="400" height="500" src="https://www.youtube.com/embed/JZaNrPULNxs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
        <span>Attaching the strings (hemo) to your bogu</span>
      </div>

      <div className='col-span-2'>
      <iframe width="400" height="500" src="https://www.youtube.com/embed/Z4PHt3H6dU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
        <span>Puting on your bogu (armor) </span>
      </div>

      <div className='col-span-2'>
      <iframe width="400" height="500" src="https://www.youtube.com/embed/DHXAmGiVWKs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default WearingEquipment;