// App.jsx
import { useState } from 'react'
import icon from './assets/icon.png'
import Linkdin from './assets/3.png'
import Github from './assets/2.png'
import Leetcode from './assets/1.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import Spline from '@splinetool/react-spline';
import './App.css'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSplineLoading, setIsSplineLoading] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function onSplineLoad() {
    setIsSplineLoading(false);
  }

  return (
    <>
      <div className="header-nav-wrapper">
        <header className='header'>
          <p>Patrick Vohs</p>
        </header>

        <nav className={`nav-bar ${isNavOpen ? 'responsive' : ''}`}>
          <button className="hamburger" onClick={toggleNav}>
            {isNavOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
          <ul>
            <li><a href='#projects' onClick={() => setIsNavOpen(false)}>Projects</a></li>
            <li><a href='#education' onClick={() => setIsNavOpen(false)}>Education</a></li>
            <li><a href='#contact' onClick={() => setIsNavOpen(false)}>Contact Me</a></li>
          </ul>
        </nav>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          {/* Hero Text with Social Icons and Button */}
          <div className='Hero'>
            <div className="hero-text">
            <p className='firstHero'>Frontend Dev</p>
            <p className='secondHero'>Backend Dev</p>
            <p className='thirdHero'>Bug Hunter</p>
          </div>
            
            <div className="social-icons">
              <img className='git' src={Github} alt="Github" />
              <img className='link' src={Linkdin} alt="LinkedIn" />
              <img className='leet' src={Leetcode} alt="LeetCode" />
      </div>

            <button className="contact-btn">Contact Me</button>
        </div>

          {/* Image */}
          <div className='image'>
            <img src={icon} alt="icon"/>
          </div>
        </div>

        {/* Spline Background */}
        <div className="spline-container">
          {isSplineLoading && <div className="loading">Loading...</div>}
          <Spline
            scene="https://prod.spline.design/QG36t01g2Ngs54ZW/scene.splinecode"
            onLoad={onSplineLoad}
          />
        </div>
      </div>
    </>
  )
}

export default App
