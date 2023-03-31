import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar'
import About from './pages/About';




function App() {
  return (
    <div className='container'>
      <Navbar />

      <Home />
      <About />
      <Portfolio />


    </div>
  );
}

export default App;

