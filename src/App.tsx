import React from 'react';

import Switcher from './components/Switcher';

import { CARDS } from './utils/constants';
import bgBottom from './assets/svg/bg-bottom.svg';
import bgTop from './assets/svg/bg-top.svg';

import './mainStyle.scss';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <img src={bgBottom} alt="Background Bottom" className="bgBottom" />
      <img src={bgTop} alt="Background Bottom" className="bgTop" />
      <main className="container">
        <header className="mainHeader"><h1>Our Pricing</h1></header>
        <Switcher checkedOption="Monthly" uncheckedOption="Annually" />
        <div className="cardsContainer">
          {CARDS.map((cardInfo, index) => (
            <Card {...cardInfo} key={cardInfo.title} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
