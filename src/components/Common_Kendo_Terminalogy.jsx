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

const Common_Kendo_Terminalogy = () => {
  useEffect(() => {Aos.init({duration:2000});},[]);
  return (
    <div className='w-full grid grid-cols-3 grid-rows-10 gap-y-8'>
      <div className='col-span-full row-span-2'>        
        <FadeInSection>
          <div
          className='text-cyan-600 sm:mt-5 mt-10 text-white sm:text-3xl text-xl font-comfortaa w-full text-center justify-center content-center ' data-aos = "fade-left">
          <p className = "text-cyan-600">Kendo Terminology</p>
        </div>

          <div
          className='sm:mt-5 mt-3 text-white sm:text-xl text-md font-comfortaa w-full text-center justify-center content-center ' data-aos = "fade-left">
          <p>Kendo has many terms that new kendoka will need to become familiar with. While this guide will provide a good foundation of knowledge
            to facilitate interactions in a dojo, it is highly recommended to ask your sensei or more experienced kendoka about what something means if you are confused. 
          </p>
        </div>
        </FadeInSection>
      <div className = 'col-span-2 row-span-8'>
        <div
            className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
            <p  className='text-red-400'>Counting Numbers (1-10)</p>
        </div>
        <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
              <li>1 - ichi</li>
              <li>2 - ni</li>
              <li>3 - san</li>
              <li>4 - shi</li>
              <li>5 - go</li>
              <li>6 - roku</li>
              <li>7 - shichi</li>
              <li>8 - hachi</li>
              <li>9 - kyu</li>
              <li>10 - ju</li>
            </ul>
          </div>

        <div
            className='text-orange-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
            <p>General terms</p>
        </div>
        <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
              <li className='bullet'> <p><span className = "text-pink-300">Kendo:</span> The way of the sword</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Kendoka/Kenshin:</span> Someone who practices kendo</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Shinai:</span> A slatted bamboo sword</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Bukuto/Bokken:</span> a hardwood replica of a katana (used for learning kata)</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Bogu:</span> Kendo armor</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Sensei:</span> The teacher. Addressing a teacher as sensei acknowledges their experience and insight</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Sempai:</span> Senior student</p></li>
              <li className='bullet'>  <p><span className = "text-pink-300">Dojo:</span> The place of practice</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Shomen:</span> The front wall of the dojo</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Rei:</span> To bow. There are two types of rei; standing and seated. When standing, bow from the waist. If facing shomen, allow your eyes to go to the floor and bend at the waist to a 30 degree angle. If facing an opponent, keep your eyes on your opponent and bend at your waist to a 15 degree angle. Keep your back and neck straight in both cases. For a seated rei (from seiza), slide both hands down your thighs, palms down, to the floor making a triangle of the thumbs and forefingers. Bow so that your face is just above your hands but do not show the back of your neck or lean too far forward.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Shomen ni… rei:</span> Bow to shomen</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Sensei ni… rei:</span> Bow to Sensei(s)</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Otagai ni rei :</span> Bow to each other</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Seiza:</span> correct sitting posture; sitting on the heals in a natural, centered, strong posture.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Mokuso:</span> quietude; eyes closed, quiet your mind, meditation</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Mokuso yame::</span> end Mokuso period</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Sonkyo:</span> A crouching position, sitting on the heels, balanced on the balls of the feet, with the knees spread. This is a “sitting” form of rei (bowing) we use when our sword is drawn that allows us to move quickly. It also develops very strong legs.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Hajime:</span> To begin/start</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Yame:</span> To stop</p></li>
            </ul>


          </div>
          <div
            className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
            <p>Practice/Warm-Up terms</p>
        </div>
        <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
              <li className='bullet'> <p><span className = "text-pink-300">Sageto:</span> Holding the sword relaxed in the left hand, at arms’ length next to your left leg.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Taito:</span> Raise the sword so that it is at hip height and perpendicular to the ground. Make sure the tip is not higher than the end of the handle</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Nuketo:</span> Draw the sword from taito to chudan no kamae</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Suburi:</span> Sword techniques. </p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Joge-suburi:</span> Swing the sword tip up and back to your tailbone, then forward and down to about knee height. This is not a sword cut, but it’s used for warming up, stretching and strengthening</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Haya-suburi:</span> Fast paced sword swing; used for warm up, endurance, and strengthening.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Suri-ashi:</span> Sliding the balls of the feet and the toes along the floor during most forms of Kendo footwork. Produces more balance and control of body carriage.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Fumikomi-ashi:</span> Kendo staple attack motion in which the attacker 'jumps' forward to quickly bridge the gap between him/her and the opponent. It is timed together with the shinai strike.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Kata:</span> Prearranged, formal set of movements practiced alone or with a partner that instill the principles and basic skills of Kendo such as connecting with your partner, reading their movement, body carriage, footwork, shinai control, breathing, timing, distancing, intensity of spirit, etc.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Kirikaeshi:</span> Kirikaeshi is a drill done with a partner that involves a succession of strikes to e.g. the head (men). It usually begins via a single strike to the center of the head followed by four angled strikes to the head while going foward and then five while going backward.</p></li>
              
            </ul>
          </div>

        <div
            className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
            <p>Combat terms</p>
        </div>
        <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
              <li className='bullet'> <p><span className = "text-pink-300">Kamae:</span> The stance/posture</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Kamae-to:</span> The order to get into kamae</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Chūdan-no-kamae:</span> The most basic and stance in kendo which balances attack and defence. The shinai is held with the hands in front of the waist, with the tip of the weapon pointed at the opponent's throat.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Jōdan-no-kamae:</span>  In jōdan-no-kamae, the sword is raised above the head with the tip pointing back and the blade facing up, in readiness to strike. It is the most aggressive stance of the different kendo stances </p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Kote-Men:</span> Combination strike, first to your opponents' kote, then to your opponents' men</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Kote-Do:</span> Combination strike, first to your opponents' kote, then to your opponents' do</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Hiki-waza:</span> When a player strikes while retreating from tsuba-zeriai (hiki-men, hiki-kote, hiki-do).</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Debana-waza:</span> When one strikes just at the moment when the opponent is about to strike.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Nuki-waza:</span> When one avoids the opponent’s attack, causing the opponent to strike the air, then counter attacks before the opponent can recover.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Taiatari:</span> Body crash; when two kenshi crash together after an attempted attack.</p></li>
              <li className='bullet'> <p><span className = "text-pink-300">Tsuba zeriai:</span> When two kenshi stand close together, shinais locked together with tsuba (hand guards) touching.</p></li>
            </ul>
          </div>
        </div>

        <div
            className='text-red-400 sm:mt-5 mt-10 text-white sm:text-2xl text-md font-comfortaa w-full text-center justify-center content-center '>
            <p>Tournament terms</p>
        </div>
        <div 
          className='sm:mt-5 mt-3 text-white sm:text-lg text-sm font-comfortaa w-full text-center justify-center content-center '>
            <ul class="list-disc text-left ml-10">
            <li className='bullet'> <p><span className = "text-pink-300">Shiai:</span> A match between individuals or teams</p></li>
            <li className='bullet'> <p><span className = "text-pink-300">Shinpan:</span> A referee</p></li>
            <li className='bullet'> <p><span className = "text-pink-300">Wakare!:</span> Command used by shinpan to separate the contestants</p></li>
            <li className='bullet'> <p><span className = "text-pink-300">Hansoku:</span> A violation/foul. A warning is given on first occurence, a second occurence gives a point to your opponent</p></li>
            <li className='bullet'> <p><span className = "text-pink-300">Encho:</span> Overtime match</p></li>
            <li className='bullet'> <p><span className = "text-pink-300">Hantei:</span> A method of deciding the winner of a match when the scores of the two contestants are equal</p></li>
            <li className='bullet'> <p><span className = "text-pink-300">Shobu-ari!:</span> A point has been scored</p></li>
            </ul>
          </div>
      </div>

    </div>
  )
}

export default Common_Kendo_Terminalogy