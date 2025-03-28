import style from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './Pages/Hero';
import { About } from './Pages/About';
import { Experience } from './Pages/Experience';
import { Projects } from './Pages/Projects';

function App() {


  return (
    <div className={style.App}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
