import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar'
import About from './pages/About';
import Footer from './components/Footer';
import Skills from './pages/Skills'
import ScrollButton from './components/ScrollButton';




function App() {
  return (
    <div className='container'>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Portfolio />

      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;

