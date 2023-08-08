import React, {useEffect} from 'react'
import {shomen} from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactPlayer from 'react-player'
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

          <div
              className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
              <p  className='text-red-400'>Beginning and Ending Practice - Shōmen & Mokuso</p>
          </div>
          
          <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            
            <ul class="list-disc text-left ml-10">
              <li>The Shōmen is the "front" of the dojo, and is usually located at the north side of the dojo. </li>
              <li>Senseis will usually sit in front of the side of the 
              dojo that the shōmen is located, though not directly in front of the shōmen. </li>
              <li>The students sit facing the shōmen with the highest rank holders sitting on the 
              east side of the dojo and the lowest rank holders sitting on west side of the dojo. </li>
            </ul>
          </div>
          <img className = "img3" height = "400px" width = "400px"src = {shomen} alt = "image"></img>

          <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            
            <ul class="list-disc text-left ml-10">
              <li>Before and after practice, dojo members will bow (zarei) to the shōmen, sensei, and each other.</li>
              <li>Mokuso (or mediation) is performed before and after practice to calm your mind.</li>
            </ul>
          </div>          


          <div
              className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
              <p  className='text-red-400'>Beginning and Ending of a match</p>
          </div>

          <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            
            <ul class="list-disc text-left ml-10">
              <li>Applies to shiai (competition matches) and keiko (free sparring), as well as other instances of sparring</li>
              <li>When starting a match, bow to your opponent (15 degrees), take three steps towards your opponent and draw your shinai before dropping into sonkyo (squat).
                Rise when referee indicates the match has started (when in shiai) or when you and your opponent are ready (in keiko).
                </li>
                <li>After the match ends, repeat the starting procedure but in reverse. Sonkyo and stow your shinai, then rise and take three steps back before bowing to your opponent </li>
            </ul>
          </div>
          <ReactPlayer  style={{margin:"auto"}} height = {500} width= '80%' url = "https://youtu.be/SpD-G1TWxeQ" controls={true}></ReactPlayer> 
          
        <div
              className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
              <p  className='text-red-400'>Shinai Etiquette</p>
          </div>
          <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
              <li>Do not step over shinai, as it is very disrespectful to do so. A shinai represents the sword and the sword is considered to be a representation of the soul of a samurai. </li>
              <li>When placing a shinai against a wall (when you are not using it), make sure the shinai is pointed up instead of down.</li>
              <li>Always handle your shinai respectfully. Do not lean on it, rest it on the floor, twirl it, or drag it. Make sure it is well maintained</li>
            </ul>
          </div>
        </div>
        </div>
  )
}

export default Kendo_Etiquette