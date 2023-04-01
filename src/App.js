import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar'
import About from './pages/About';
import Footer from './components/Footer';
import Skills from './pages/Skills'




function App() {
  return (
    <div className='container'>
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;

