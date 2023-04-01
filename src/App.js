import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar'
import About from './pages/About';
import Footer from './components/Footer';




function App() {
  return (
    <div className='container'>
      <Navbar />

      <Home />
      <About />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;

