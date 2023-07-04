import React, {useEffect} from 'react'
import {men, kote, Do, tarre} from '../assets'
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
  
  const Equipment_Guide = () => {
    useEffect(() => {Aos.init({duration:2000});},[]);
    return (
      <div className='w-full grid grid-cols-3 grid-rows-10 gap-y-8'>
        <div className='col-span-full'>        
          <FadeInSection>
            <div
            className='sm:mt-5 mt-10 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center ' data-aos = "fade-left">
            <p>There are many pieces of equipment that make up a fully kitted kendoka</p>
          </div>
          </FadeInSection>
          
        </div>

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Men</p>
            <div >
              <img class ='object-contain' src={men} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p>The men protects the face, neck, and shoulders. It consists of a facemask with several horizontal metal bars running the 
            entire width of the face, from the chin to the top of the head. To this is attached a long rectangular thick cloth padding that 
            curves over the top of the head and extends to cover the shoulders. A throat protector is attached to the bottom of the facemask. 
            The men is held in place with a pair of woven cords that wrap around the head and are tied at the back. The back of the men is left 
            open for ventilation and the back of the head is unprotected. The target areas of the men are the centre top, and upper left and right 
            sides for cutting strikes and the centre of the throat protector for a thrust.</p>

        </div>
        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Kote</p>
            <div >
              <img class ='object-contain' src={kote} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p>Kote is the mitten-style gauntlet worn during Kendo. The cylindrical portion, known as the kotebuton, 
            covers the lower forearm and is the target for valid strikes in kendo and Naginata. 
            The design of the kote protects the hand and wrist, 
            facilitating correct hand position and range of motion for strikes with the shinai. </p>
        </div>

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Do</p>
            <div >
              <img class ='object-contain' src={Do} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p>The main component of the dō is the gently-curving stomach and chest protector. 
            The modern form has a pronounced bulge to help direct the force of strikes away from the soft areas in the middle of the torso.
            Lacquered bamboo is traditionally used although lacquered paper 'fibre' (frequently misidentified as fiberglass) 
            or moulded plastic are used for less expensive dō. The dō is supported from the shoulders by two diagonal ties and 
            is restrained at the small of the back with another set of ties. </p>
        </div>

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Tare</p>
            <div >
              <img class ='object-contain' src={tarre} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p>Tare is the cloth and leather protector worn around the waist during Kendo, Naginata, Jūkendō, and Tankendo. 
            It is the only part of a set of bōgu that does not have any valid target areas. 
            The protective flaps are worn in the front to protect the groin and the upper thighs from missed strikes. 
            One must be in seiza to put on the tare. The tare obi goes around the waist, crossing in the back, 
            and ties in a bow in the front, underneath the odare in the center. 
            The odare is usually covered by a identifying cover (a nametag essentially) known as a zekken or nafuda.  </p>
        </div>

        </div>
    )
  }

export default Equipment_Guide