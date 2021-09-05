import React, { useState } from 'react';

import Switcher from './components/Switcher';

import { CARDS } from './utils/constants';
import bgBottom from './assets/svg/bg-bottom.svg';
import bgTop from './assets/svg/bg-top.svg';

import './mainStyle.scss';
import Card from './components/Card';

function App() {

  const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(true)

  const handleSwitch = (isChecked: boolean) => {

    setIsSwitchChecked(isChecked)

  }

  return (
    <div className="app">
      <img src={bgBottom} alt="Background Bottom" className="bgBottom" />
      <img src={bgTop} alt="Background Bottom" className="bgTop" />
      <main className="container">
        <header className="mainHeader"><h1>Our Pricing</h1></header>
        <Switcher checkedOption="Monthly" uncheckedOption="Annually" handleSwitch={(isChecked: boolean) => handleSwitch(isChecked)} />
        <div className="cardsContainer">
          {CARDS.map((cardInfo) => (
            <Card {...cardInfo} key={cardInfo.title} isSwitchChecked={isSwitchChecked} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
