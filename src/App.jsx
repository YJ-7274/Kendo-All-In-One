import React from 'react'
import styles from './style'

import {
  NavBar,
  Kendo,
  Kendo_Etiquette,
  Federation_Membership,
  Bogu_Guide,
  Dojo_Locations,
  Common_Kendo_Terminalogy,
} from './components';

const App = () => (
  <div className = "bg-primary w-full overflow-hidden">
    <h1>NavBar</h1>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className= {`${styles.boxWidth}`}>
        <h1>NavBar</h1>
      </div>
    </div>

    <div className = {`bg-primary ${styles.flexStart}`}>
      <div className= {`${styles.boxWidth}`}>
        <Kendo/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className= {`${styles.boxWidth}`}>
        <Dojo_Locations/>
        <Bogu_Guide/> 
        <Kendo_Etiquette/>
        <Common_Kendo_Terminalogy/> 
        <Federation_Membership/> 
      </div>
    </div>

  </div>
)

export default App