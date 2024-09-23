import { useRef } from 'react';

import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Home from './assets/pages/home'
import MentalWellness from './assets/pages/mentalWellness'
import Meditation from './assets/pages/meditation'
import Physical from './assets/pages/physical'

import './App.css'


function App() {
  const homeRef = useRef(null);
  const mentalWellnessRef = useRef(null);
  const meditationRef = useRef(null);
  const physicalRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        mentalWellnessRef={mentalWellnessRef}
        meditationRef={meditationRef}
        physicalRef={physicalRef}
      />

      <div ref={homeRef}><Home /></div>
      <div ref={mentalWellnessRef}><MentalWellness /></div>
      <div ref={meditationRef}><Meditation /></div>
      <div ref={physicalRef}><Physical /></div>
      <Footer name="Thiago Oliveira" />
    </>
  )
}

export default App
