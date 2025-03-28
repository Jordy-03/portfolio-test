import style from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './Pages/Hero';
import { About } from './Pages/About';

function App() {


  return (
    <div className={style.App}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
