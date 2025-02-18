// App.jsx
import { useState } from 'react'
import icon from './assets/icon.png'
import Linkdin from './assets/3.png'
import Github from './assets/2.png'
import Leetcode from './assets/1.png'
import Car from './assets/car.png'
import Hiro from './assets/Hiro.png'
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
      <hr/>

      {/* Projects */}

      <div className='project-head'>
        <p>Projects</p>
      </div>

      <div className='project-container'>
        <div className='project-image-car'>
          <img src={Car} alt="Car Project"/>
        </div>

        <div className='project-desc-car'>
          <p className='car-title'>24/7 Cars</p>
          <p className='car-desc'>This application is a social media community designed for car enthusiasts to connect, share, and engage with others who share their passion for automobiles. Users can showcase their own virtual garage, post pictures and details about their cars, join or create communities based on specific car interests, and organize or discover car meets, events, and shows. The platform fosters interaction through posts, comments, and likes, creating an engaging space for automotive lovers.</p>
        </div>

        <hr className='project1-line'/>

        <div className='project-image-hiro'>
          <img src={Hiro} alt="icon"/>
        </div>

        <div className='project-desc-hiro'>
          <p className='hiro-title'>Hiro</p>
          <p className='hiro-desc'>Hiro is a job application platform designed to streamline the job search process by enabling users to mass-apply for jobs effortlessly. The app automates and simplifies job applications, helping users increase their chances of securing employment faster. With Hiro, users can upload their resumes, customise applications, track their job submissions, and receive updates all in one place.</p>
        </div>


      </div>

      <hr/>

      {/* Education */}

    </>
  )
}

export default App
