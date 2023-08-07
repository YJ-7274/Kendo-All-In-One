import React, { useEffect } from 'react'
import {home_image,terminology,etiquette,wearingEquipment,equipmentCare,equipmentOverview,dojoMaps} from '../assets'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Equipment_Care from './Equipment_Care';

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

const Home = () => {
  useEffect(() => {Aos.init({duration:2000});},[]);
  return (
    <div className='w-full grid grid-cols-1 grid-rows-2 justify-center content-center gap-y-6'>
      <div className="w-full h-1/2 bg-no-repeat bg-cover">
        <img src={home_image} alt="home_image" />
      </div>
      <FadeInSection>
        <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center' data-aos = "fade-left">
          <span >Welcome to Kendo All In One, where you can find everything that you will need to start your kendo journey.</span>
        </div>
        <br></br>
        <div class="container grid grid-cols-3 gap-2 mx-auto">
          <div class="w-full rounded object-fill">
            <a href = "./dojo-map">
              <img className = "img-1"src={dojoMaps}
                  alt="image"/>
            </a>
          </div>
          <div class="w-full rounded object-fill">
            <a href = "./kendo-etiquette">
              <img className='img-1' src={etiquette}
                  alt="image"/>
            </a>
          </div>
          <div class="w-full rounded object-fill">
            <a href = "./wearing-equipment">
              <img className = 'img-1' src={wearingEquipment}
                  alt="image"/>
            </a>
          </div>
          <div class="w-full rounded object-fill">
            <a href = "./equipment">
              <img className='img-2' src={equipmentOverview}
                  alt="image"/>
            </a>
          </div>
          <div class="w-full rounded object-fill">
            <a href = "/kendo-terminology">
              <img className='img-2' src={terminology}
                  alt="image"/>
            </a>
          </div>
          
          <div class="w-full rounded object-fill">
            <a href = "./equipment-care">
              <img className='img-2' src={equipmentCare}
                  alt="image"/>
            </a>
          </div>
      </div>
      </FadeInSection>
      
    </div>
  )
}


export default Home