import React from 'react'
import styles from './style'
import {Route, Routes,BrowserRouter as Router} from 'react-router-dom'

import {
  NavBar,
  Home,
  Kendo_Etiquette,
  Federation_Membership,
  Bogu_Guide,
  Dojo_Locations,
  Common_Kendo_Terminalogy,
} from './components';


const App = () => (
  <div className = "bg-primary w-screen overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className= {`${styles.boxWidth}`}>
      <NavBar/>
      </div>      
    </div>


    <div className = {`bg-primary ${styles.flexStart}`}>
      <div className= {`${styles.boxWidth}`}>
        <Router>
        <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/dojo-map' element = {<Dojo_Locations />}/>
          <Route path = '/equipment' element = {<Bogu_Guide />}/>
          <Route path = '/beginners-guide' element = {<Common_Kendo_Terminalogy />}/>
        </Routes></Router>
      </div>
    </div>


  </div>
)

export default App