import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import './App.css'

const App = () => {
    const Sky = '../public/Sky.svg'
    const Moon = '../public/moon.svg'
    const Peaks = '../public/Peaks.svg'
    const Ground = '../public/Ground.svg'
    const Cliffs = '../public/Cliffs.svg'

  return (
    <main>

    <Parallax 
        pages={5}
        style={{
            background: `url(${Sky})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            // backgroundColor: ''
        }}
        
    >
        <ParallaxLayer offset={1} speed={0.1} sticky={{start:1, end: 5}}>
            <img src={Moon} style={{width: '15%'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} sticky={{start:2, end: 5}} style={{zIndex: 3}}>
            <img src={Ground} style={{position: 'absolute', bottom: 0,}} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1} sticky={{start:3, end: 5}} style={{zIndex: 2}}>
            <img src={Peaks} style={{position: 'absolute', bottom: '120px',}} />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.1} sticky={{start:4, end: 5}} style={{zIndex: 1}}>
            <img src={Cliffs} style={{position: 'absolute', bottom: '-30px', }} />
        </ParallaxLayer>

    </Parallax>
        
    </main>
  )
}

export default App