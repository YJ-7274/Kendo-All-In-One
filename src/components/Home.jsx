import React, { useEffect } from 'react'
import {home_image} from '../assets'
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

const Home = () => {
  useEffect(() => {Aos.init({duration:2000});},[]);
  return (
    <div className='w-full grid grid-cols-1 grid-rows-2 justify-center content-center gap-y-8'>
      <div className="w-full h-1/2 bg-no-repeat bg-cover">
        <img src={home_image} alt="home_image" />
      </div>
      <FadeInSection>
        <div
        className=' flex text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center' data-aos = "fade-left">
        <span >Welcome to Kendo All In One, where you can find everything that you will need to start your kendo journey.</span>
      </div>
      </FadeInSection>
      
    </div>
  )
}


export default Home