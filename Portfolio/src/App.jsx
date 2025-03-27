import style from './App.module.css';
import { Navbar } from './components/Navbar';
import { Hero } from './Pages/Hero';

function App() {

  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
