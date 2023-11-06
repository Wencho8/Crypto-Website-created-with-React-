import React from 'react';
import NavBar from './components/NavBar';
import NavBarBelow from './components/NavBarBelow';
import MainW from './components/MainW';
import Intro from './components/Intro';
import MarqueeBar from './components/MarqueeBar';
import Players from './components/PlayersPage';
import Backers from './components/BackersPage';

function App() {
  return (
    <div > {/* overflow-hidden para que no se vea el scrollhorizontal cuando cambia de escala los rectangulos*/}
      <NavBar />
      <MarqueeBar/>
      <div className=' flex-col relative overflow-hidden '>
       <MainW/>
       <Intro/>
       <Players/>
       <Backers/>
       <NavBarBelow/>
      </div>
    </div>
  );
}

export default App;
