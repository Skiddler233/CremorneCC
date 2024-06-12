import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Rides from './Components/Rides/Rides'
import Races from './Components/Races/Races'
import Join from './Components/Join/Join';

function App() {
  return (
    <div>
    <Header />
    <Main id="home" />
    <Rides id="group-rides" />
    <Races id="races" />
    <Join id="join-us" />
  </div>
  );
}

export default App;
