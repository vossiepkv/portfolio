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
import FadeIn from './FadeIn.jsx';
import './App.css'
import about from './assets/men.jpeg';

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
            <li><a href='#contact-me' onClick={() => setIsNavOpen(false)}>About Me</a></li>
          </ul>
        </nav>
      </div>
      </FadeIn>

      
      <div className="hero-section">
        <div className="hero-content">
          {/* Hero Text with Social Icons and Button */}
          
          <div className='Hero'>
            <div className="hero-text">
            <FadeIn duration={400}>
            <p className='firstHero'>Web Developer</p>
            </FadeIn>
            <FadeIn duration={500}>
            <p className='secondHero'>Problem Solver</p>
            </FadeIn>
            <FadeIn duration={600}>
            <p className='thirdHero'>Bug Hunter</p>
            </FadeIn>
          </div>
          
          
            
          <FadeIn duration={700}> 
            <div className="social-icons">
              <img className='git' src={Github} alt="Github" />
              <img className='link' src={Linkdin} alt="LinkedIn" />
              <img className='leet' src={Leetcode} alt="LeetCode" />
      </div>
          </FadeIn>

          <FadeIn duration={700}>
            <a href='#contact-me'>
            <button className="contact-btn animation-pulse">Contact Me</button>
            </a>
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

      <div className='project-head' id='projects'>
      <FadeIn duration={400}>
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
        <FadeIn duration={600}>
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
        <FadeIn duration={600}>
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

    <div className='edu-header' id='education'>
    <FadeIn duration={300}>
      <p>Education</p>
      </FadeIn>
    </div>


      <div className="education-container">
  <div className="edu-box left">
  <FadeIn duration={300}>
    <h3>Bachelor of Computer Science</h3>
    <p>Deakin University (2022 - Present) <strong>Graduating End of 2025</strong></p>
    <p>Focusing on programming, algorithms, AI, databases, and networking, with hands-on experience in team projects and industry applications.</p>
  </FadeIn>
  </div>

  <div className="edu-box right">
  <FadeIn duration={400}>
    <h3>Agile Support Services</h3>
    <p>2022 - Present</p>
    <p>Managed device configuration, software deployment, and server maintenance for global clients, providing support, troubleshooting, and resolving service-related issues.</p>
  </FadeIn>
  </div>

  <div className="edu-box left">
  <FadeIn duration={500}>
    <h3>Chisholm Cert 4 in IT</h3>
    <p>Completed in 2021</p>
    <p>Focusing on programming, databases, cybersecurity, and software testing, with hands-on experience in version control, UI development, and emerging technologies.</p>
  </FadeIn>
  </div>

  <div className="edu-box right">
  <FadeIn duration={600}>
    <h3>Year 11 Kambrya College</h3>
    <p>Ended 2021</p>
    <p>Completed Year 12 Computing with a 30 study score</p>
  </FadeIn>
  </div>
</div>

<hr className='edu-line'/>


{/* About Me */}
<div className='about-header'>
  <FadeIn duration={400}>
    <p>About Me</p>
  </FadeIn>
</div>

<div className='about-container'>
  <div className='about-image'>
  <FadeIn duration={500}>
    <img src={about} alt="About Me" />
    </FadeIn>
  </div>

  <div className='about-text'>
  <FadeIn duration={600}>
    <p>I'm a Computer Science student at Deakin University, set to complete my degree at the end of this year. My passion for software engineering and web development has driven me to build projects that blend functionality with modern design.

I started my web development journey by experimenting with HTML, CSS, and JavaScript, and over time, I’ve expanded my skills to include Node.js, React, Firebase, and more fullstack dev principles. Through both university coursework and personal projects, I’ve developed a strong foundation in front-end and back-end development.

Currently, I’m working on 24/7 Cars, a car enthusiast social media service, where I’ve been implementing user authentication, database integration, and responsive design. My goal is to refine my skills further, build innovative web applications, and eventually step into the world of professional software engineering.</p>
  </FadeIn>
  </div>
</div>

<hr/>
<div className='contact-container'>
  <div className='contact-me'>
  <FadeIn duration={300}>
    <p>Contact Me</p>
    </FadeIn>
  </div>

  <FadeIn duration={600}>
  <form className="contact-form" id='contact-me' action='https://formspree.io/f/mnnjwawq' method='POST'>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" placeholder="Write your message..." required></textarea>

    <button type="submit">Send Message</button>
  </form>
  </FadeIn>
</div>

<footer className="footer">
  <div className="footer-container">
    <p>&copy; 2025 Patrick | All Rights Reserved</p>
    <div className="social-links">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    </div>
  </div>
</footer>



    </>
  )
}

export default App

