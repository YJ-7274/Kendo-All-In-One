import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
const Kendo_Etiquette = () => {
  useEffect(() => {Aos.init({duration:2000});},[]);
  return (
<div className='w-full grid grid-cols-3 grid-rows-10 gap-y-8'>
      <div className='col-span-full row-span-2'>        
        <FadeInSection>
          <div
          className='text-jade-600 sm:mt-5 mt-10 text-white sm:text-3xl text-xl font-comfortaa w-full text-center justify-center content-center ' data-aos = "fade-left">
            <p className = "text-green-600">Kendo Etiquette</p>
          </div>

            <div
            className='sm:mt-5 mt-3 text-white sm:text-xl text-md font-comfortaa w-full text-center justify-center content-center ' data-aos = "fade-left">
            <p>Kendo has a set of etiquette that new kendoka will need to become familiar with. This guide is intended on providing a basic understanding of the common etiquette that kendo practitioners
              should know. It is highly recommended to ask your sensei or the more experienced members of the dojo if you are confused regarding specific practices, especially as different dojos may have slight variations in the way they follow etiquette. 
            </p>
          </div>
        </FadeInSection>
        </div>
        <div className='col-span-full row-span-8'>
          <div
              className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
              <p className='text-red-400'>Bowing etiquette and different types of bow </p>
          </div>
          <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <p>Kendo has two main types of Bows:</p>
            <ul class="list-disc text-left ml-10">
              <li>Standing Bow (Ritsu Rei)</li>
              <li>Sitting Bow (Zarei)</li>
            </ul>
            <p>The Standing Bow has two variations which differ in the angle of the bow</p>
            <ul class="list-disc text-left ml-10">
              <li>To an Opponent: Bend at the hip around 15 degrees while keeping your eyes on your opponent</li>
              <li>Formal Bow (To senseis, higher rank holders, or the shomen): Bend at the hip around 30 degrees, this time 
                look down instead at the other person.
              </li>
            </ul>
            <p>For the Sitting Bow</p>
            <ul class="list-disc text-left ml-10">
              <li>Get into Seiza Position</li>
              <li>place your hands in front of your knees, making a triangle with your thumbs and index fingers</li>
              <li>Slowly lower your head such that your nose goes into the triangle. make sure to keep your eyes open</li>
              <li>Slowly lift your head and return to your upright position</li>
              <li>Note: try not to lift your butt when you are doing the sitting bow</li>
            </ul>
          </div>


          <div
              className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
              <p  className='text-red-400'>Entering/Exiting the Dojo</p>
          </div>
          <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
              <li>Bow when entering the Dojo</li>
              <li>Remember to take off your shoes before you enter the Dojo</li>
              <li>Bow when leaving the dojo</li>
            </ul>
          </div>
        </div>
        </div>
  )
}

export default Kendo_Etiquette