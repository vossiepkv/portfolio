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
import FadeIn from './FadeIn';
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
    <FadeIn duration={300}>
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
      </FadeIn>

      
      <div className="hero-section">
        <div className="hero-content">
          {/* Hero Text with Social Icons and Button */}
          
          <div className='Hero'>
          <FadeIn duration={500}>
            <div className="hero-text">
            <p className='firstHero'>Frontend Dev</p>
            <p className='secondHero'>Backend Dev</p>
            <p className='thirdHero'>Bug Hunter</p>
          </div>
          </FadeIn>
          
            
          <FadeIn duration={700}> 
            <div className="social-icons">
              <img className='git' src={Github} alt="Github" />
              <img className='link' src={Linkdin} alt="LinkedIn" />
              <img className='leet' src={Leetcode} alt="LeetCode" />
      </div>
          </FadeIn>

          <FadeIn duration={700}>
            <button className="contact-btn animation-pulse">Contact Me</button>
            </FadeIn>
        </div>

          {/* Image */}
          <div className='image'>
          <FadeIn duration={500}> 
            <img src={icon} alt="icon"/>
          </FadeIn>
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
      <p className='location'>Based in Melborune, Victoria, Australia</p>
      <hr/>

      {/* Projects */}

      <div className='project-head'>
      <FadeIn duration={700}>
        <p>Projects</p>
        </FadeIn>
      </div>

      <div className='project-container'>
        <div className='project-image-car'>
        <FadeIn duration={500}>
          <a href='https://24-7-cars.vercel.app/'><img src={Car} alt="Car Project"></img></a>
        </FadeIn>
        </div>

        <div className='project-desc-car'>
        <FadeIn duration={700}>
          <a className='car-title' href='https://24-7-cars.vercel.app/'>24/7 Cars</a>
          <p className='car-desc'>This application is a social media community designed for car enthusiasts to connect, share, and engage with others who share their passion for automobiles. Users can showcase their own virtual garage, post pictures and details about their cars, join or create communities based on specific car interests, and organize or discover car meets, events, and shows. The platform fosters interaction through posts, comments, and likes, creating an engaging space for automotive lovers.</p>
            </FadeIn>
            <div className='tech-badges-car'>
              <FadeIn duration={800}>
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
      <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
      <img src="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
      <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
      <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
            </FadeIn>
            </div>
       
       
        </div>
        <hr className='project1-line'/>
        

        <div className='project-image-hiro'>
        <FadeIn duration={500}>
          <img src={Hiro} alt="icon"/>
          </FadeIn>
        </div>

        <div className='project-desc-hiro'>
        <FadeIn duration={700}>
          <p className='hiro-title'>Hiro</p>
          <p className='hiro-desc'>Hiro is a job application platform designed to streamline the job search process by enabling users to mass-apply for jobs effortlessly. The app automates and simplifies job applications, helping users increase their chances of securing employment faster. With Hiro, users can upload their resumes, customise applications, track their job submissions, and receive updates all in one place.</p>
            </FadeIn>
            <div className='tech-badges-hiro'>
            <FadeIn duration={800}>
            <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
            <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt="Firebase" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
            </FadeIn>
            </div>
        </div>
      </div>
      <div className='git-more'>
      <FadeIn duration={700}>
        <a href='https://github.com/vossiepkv' className='git-more'>
          <img src={Github} alt="GitHub"/>
          <p>Checkout My Github To See More Projects</p>
        </a>
        </FadeIn>
      </div>      
      
      <hr/>

      {/* Education */}

      <div className='edu-header'>
        <p>Education</p>
      </div>

    </>
  )
}

export default App

