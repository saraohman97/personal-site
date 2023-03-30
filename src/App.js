import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolie' element={<Portfolio />} />
        <Route path='/kontakta-mig' element={<Contact />} />
        <Route path='/blogg' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
