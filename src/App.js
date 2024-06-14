// Importing all Components
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Rides from './Components/Rides/Rides'
import Races from './Components/Races/Races'
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';


alert("Please set the browser's zoom to 50% or 67% Dynamic sizing is a work in progress")

// Default function to render all components
function App() {
  return (
    <div>
    <Header />
    <Main id="home" />
    <Rides id="group-rides" />
    <Races id="races" />
    <Join id="join-us" />
    <Footer />
    
  </div>
  );
}

export default App;
