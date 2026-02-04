import { useState, useEffect } from 'react';
import style from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Navbar } from './Components/Navbar';
import { Loader } from './Components/Loader';

// Pages
import { Hero } from './Pages/Hero';
import { About } from './Pages/About';
import { Experience } from './Pages/Experience';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={style.App}>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/About" element={<About />} />
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Router>
        </>
      )
      }


    </div>
  )
}

export default App
