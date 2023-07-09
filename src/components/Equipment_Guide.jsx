import React, {useEffect} from 'react'
import {men, kote, Do, tarre, tenugui, hakamagi, shinai, bokken} from '../assets'
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

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Tenugui</p>
            <div >
              <img class ='object-contain' src={tenugui} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p>A Tenugui (手拭い) is a thin handtowel made of cotton. It is typically about 35 cm x 90 cm in size, 
            plain woven and is almost always dyed with some pattern or phrase. It can be used for anything a towel could be used for as a
             washcloth, dishcloth, but it is more often seen used as a headband, souvenir, decoration, or for wrapping items such as bottles. 
             Towels made from terry cloth have largely replaced it in household use. However tenugui are still popular as souvenirs, decorations, 
             and as a head covering in kendo, where it functions as a sweatband, as extra padding beneath the men. </p>
        </div>

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Hakama & Gi</p>
            <div >
              <img class ='object-contain' src={hakamagi} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p> Hakama are the pleated pants worn over the legs in many forms of budo, including Kendo, Naginata, Iaido, Kyudo, Jukendo, and Tankendo.  
            Hakama (袴?) are a type of traditional Japanese clothing. Hakama are secured by four straps (himo): two longer himo attached on either side of the front of the garment, 
            and two shorter himo attached on either side of the rear. The rear of the garment has a rigid trapezoidal section, 
            called a koshi-ita (腰板). Below that on the inside is a hakama-dome (袴止め) 
            (a spoon-shaped component sometimes referred to as a hera) which is tucked into the obi or himo at the rear,
             and helps to keep the hakama in place.
            Hakama have seven deep pleats, two on the back and five on the front. 
            The pleats are said to represent the seven virtues of bushido, considered essential to the samurai way.  

            The Keikogi (often refered to by simply "gi") is a traditional uniform for japanese martial arts and their derivatives. It is usually made out
            of cotton and is the upper "jacket" that japanese martial art practitioners wear. 
            </p>
        </div>

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Shinai</p>
            <div >
              <img class ='object-contain' src={shinai} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p> Shinai (竹刀) are the weapons used for practice and competition in kendo.  It represents a katana during keiko. 
            Shinai are also used in other martial arts, but may be styled differently from kendo shinai and represented with different characters.
            Shinai also come in various styles, with differently shaped take, different types of bamboo, different shapes thicknesses in grip. 
            There are smoked varieties, which have a distinctive color. There are even synthetic shinai too.  
            Shinai take a significant beating during practice, 
            so for most people and most practices there is little to no need to invest heavily into an expensive shinai. 
            For the sake of cost and durability, a normal shinai will usually suffice. 
          </p>
        </div>

        <div
            className='col-span-1 text-white sm:text-3xl text-lg font-comfortaa w-full text-center justify-center content-center'>
            <p>Bokutō</p>
            <div >
              <img class ='object-contain' src={bokken} />
            </div>
          </div>

          <div className='sm:mt-16 mt-6 mr-2 col-span-2 text-white sm:text-xl text-sm font-poppins w-full text-center justify-center content-center'>
          <p> Bokutō (木刀), also known as bokken (木剣, bok(u), "wood", and ken, "sword") are 
            the wooden swords used for kata. Bokutō are usually the size and shape of a katana, 
            but is sometimes shaped like other swords, such as the wakizashi and tantō. 
            Some ornamental bokken are decorated with mother-of-pearl work and elaborate carvings. In kendo, they are used to practice
            different kata which are required for kendoka to learn if they wish to promote to higher ranks. 
          </p>
        </div>



      </div>

        
    )
  }

export default Equipment_Guide