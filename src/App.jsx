import React from 'react'
import styles from './style'
import {Route, Routes,BrowserRouter as Router} from 'react-router-dom'

import {
  NavBar,
  Home,
  Kendo_Etiquette,
  Equipment_Guide,
  Dojo_Locations,
  Common_Kendo_Terminalogy,
  WearingEquipment,
} from './components';
import Equipment_Care from './components/Equipment_Care';


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
          <Route path = '/equipment' element = {<Equipment_Guide />}/>
          <Route path = '/kendo-terminology' element = {<Common_Kendo_Terminalogy />}/>
          <Route path = '/kendo-etiquette' element = {<Kendo_Etiquette/>}/>
          <Route path = '/equipment-care' element = {<Equipment_Care/>}/>
          <Route path = '/wearing-equipment' element = {<WearingEquipment/>}/>
        </Routes>
        </Router>
      </div>
    </div>


  </div>
)

export default App