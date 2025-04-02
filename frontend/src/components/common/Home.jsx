import React, { useEffect, useState } from 'react';
import { 
  FaShieldAlt, 
  FaSatelliteDish, 
  FaNetworkWired, 
  FaUserShield, 
  FaMobileAlt, 
  FaCloud,
  FaMapMarkedAlt,
  FaBell,
  FaChartLine,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaHome,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
// import { GiCrackedBall, FaFire, MdFlood, WiStormWarning } from 'react-icons/gi';
import { FaFire } from "react-icons/fa";
import { WiEarthquake } from "react-icons/wi";
// import { GiCrackedBall } from "react-icons/gi";
import { MdFlood } from "react-icons/md";
import { WiStormWarning } from "react-icons/wi";
import {NavLink} from 'react-router-dom'; 


const Home = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <FaSatelliteDish />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance using satellite and ground sensors to detect disasters as they emerge"
    },
    {
      icon: <IoMdAlert />,
      title: "Instant Alerts",
      description: "Push notifications to mobile devices in affected areas within seconds of detection"
    },
    {
      icon: <FaNetworkWired />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to anticipate disaster paths and potential impact zones"
    },
    {
      icon: <FaUserShield />,
      title: "First Responder Coordination",
      description: "Integrated platform for emergency teams to coordinate rescue efforts efficiently"
    }
  ];

  const disasterTypes = [
    { icon: <WiEarthquake />, name: "Earthquakes" },
    { icon: <FaFire />, name: "Wildfires" },
    { icon: <MdFlood />, name: "Floods" },
    { icon: <WiStormWarning />, name: "Hurricanes" }
  ];

  const testimonials = [
    {
      quote: "DisasterAlert helped us evacuate 3 hours before the tsunami hit. Their early warning system saved thousands.",
      author: "Maria G., Disaster Response Coordinator"
    },
    {
      quote: "The predictive analytics accurately forecasted the wildfire path, allowing us to deploy resources effectively.",
      author: "John P., Fire Chief"
    },
    {
      quote: "As a citizen, getting instant alerts on my phone gives me peace of mind during hurricane season.",
      author: "Sarah T., Florida Resident"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <FaShieldAlt className="shield-icon" />
            <span>DisasterAlert</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              <FaHome /> Home
            </a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>
              <FaChartLine /> Features
            </a>
            <a href="#report" onClick={() => setIsMenuOpen(false)}>
              <FaExclamationTriangle /> Report
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <FaPhoneAlt /> Contact
            </a>
            <button className="cta-button mobile-only">
              <FaBell /> Get Alerts
            </button>
          </div>
          
          <button 
            className="hamburger" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <button className="cta-button desktop-only">
            <FaBell /> Get Alerts
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="particles-container" id="particles-js"></div>
        <div className="hero-content">
          <h1>
            <span className="highlight">Advanced</span> Disaster 
            <br />Detection & Response
          </h1>
          <p className="subtitle">
            Leveraging AI and IoT to predict, detect, and respond to emergencies faster than ever before
          </p>
          <div className="button-group">
            <button className="primary-button">
              <FaMobileAlt /> Download App
            </button>
            <button className="secondary-button">
              <FaCloud /><NavLink to='/layout'>Visit Full Site</NavLink> 
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://illustrations.popsy.co/amber/digital-nomad.svg" alt="Disaster monitoring" />
        </div>
      </section>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Monitoring</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">98%</div>
          <div className="stat-label">Accuracy</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3.2s</div>
          <div className="stat-label">Alert Speed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">142+</div>
          <div className="stat-label">Cities Protected</div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>How DisasterAlert <span className="highlight">Protects</span> You</h2>
          <p>Our cutting-edge system combines multiple technologies to keep communities safe</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disaster Types */}
      <section className="disaster-types">
        <div className="section-header">
          <h2>We Monitor <span className="highlight">All</span> Threats</h2>
          <p>From natural disasters to industrial accidents, our system detects them all</p>
        </div>
        
        <div className="disaster-grid">
          {disasterTypes.map((disaster, index) => (
            <div key={index} className="disaster-card">
              <div className="disaster-icon">{disaster.icon}</div>
              <h3>{disaster.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Trusted by <span className="highlight">Thousands</span></h2>
          <p>Hear what emergency responders and citizens say about our system</p>
        </div>
        
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
            >
              <p className="quote">"{testimonial.quote}"</p>
              <p className="author">— {testimonial.author}</p>
            </div>
          ))}
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section id="report" className="report-section">
        <div className="report-container">
          <div className="report-image">
            <img src="https://illustrations.popsy.co/amber/security.svg" alt="Emergency report" />
          </div>
          <div className="report-form">
            <h2>Report an <span className="highlight">Emergency</span></h2>
            <p>Submit real-time disaster information to alert authorities and nearby citizens</p>
            
            <form>
              <div className="form-group">
                <label>Incident Type</label>
                <select>
                  <option value="">Select incident type</option>
                  <option value="earthquake">Earthquake</option>
                  <option value="fire">Fire</option>
                  <option value="flood">Flood</option>
                  <option value="hurricane">Hurricane</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Enter location or use map" />
              </div>
              
              <div className="form-group">
                <label>Severity (1-10)</label>
                <div className="severity-slider">
                  <input type="range" min="1" max="10" defaultValue="5" />
                  <div className="severity-labels">
                    <span>1 (Mild)</span>
                    <span>5 (Moderate)</span>
                    <span>10 (Critical)</span>
                  </div>
                </div>
              </div>
              
              <button type="submit" className="submit-button">
                <FaExclamationTriangle /> Send Emergency Alert
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Preview */}
      {/* <section className="map-preview">
        <div className="section-header">
          <h2>Live <span className="highlight">Threat</span> Map</h2>
          <p>Real-time visualization of active incidents and predicted danger zones</p>
        </div>
        
        <div className="map-container">
          <div className="map-placeholder">
            <FaMapMarkedAlt className="map-icon" />
            <p>Interactive Live Map Display</p>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Protect Your Community?</h2>
          <p>Join thousands of cities and organizations using DisasterAlert to save lives</p>
          <div className="cta-buttons">
            <button className="primary-button">Request Demo</button>
            <button className="primary-button">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <FaShieldAlt className="shield-icon" />
              <span>DisasterAlert</span>
            </div>
            <p>Advanced Disaster Detection & Response System</p>
            <div className="social-links">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>Product</h3>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">API</a>
              <a href="#">Integrations</a>
            </div>
            
            <div className="link-group">
              <h3>Resources</h3>
              <a href="#">Documentation</a>
              <a href="#">Case Studies</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
            </div>
            
            <div className="link-group">
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Partners</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DisasterAlert. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --primary: #4361ee;
          --primary-dark: #3a0ca3;
          --primary-light: #4895ef;
          --secondary: #f72585;
          --accent: #4cc9f0;
          --light: #f8f9fa;
          --dark: #212529;
          --gray: #6c757d;
          --light-gray: #e9ecef;
          --danger: #ef233c;
          --success: #2b9348;
          --warning: #ff9e00;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          --shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
          --shadow-md: 0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
          --shadow-lg: 0 15px 30px rgba(0,0,0,0.11), 0 5px 15px rgba(0,0,0,0.08);
          --rounded-sm: 4px;
          --rounded: 8px;
          --rounded-lg: 12px;
          --rounded-xl: 16px;
          --rounded-full: 9999px;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        body {
          background-color: var(--light);
          color: var(--dark);
          line-height: 1.6;
          overflow-x: hidden;
        }

        .home-container {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-dark);
          text-decoration: none;
        }

        .shield-icon {
          color: var(--primary);
          margin-right: 0.5rem;
          font-size: 1.8rem;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .cta-button {
          background-color: var(--primary);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: var(--rounded-lg);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .cta-button:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: var(--dark);
          margin: 4px 0;
          transition: all 0.3s ease;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 4rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
          z-index: 2;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .highlight {
          color: var(--primary);
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 10px;
          background-color: rgba(67, 97, 238, 0.2);
          z-index: -1;
          transform: skewX(-15deg);
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--gray);
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .button-group {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .primary-button {
          background-color: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: var(--rounded-lg);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
        }

        .primary-button:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .secondary-button {
          background-color: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 1rem 2rem;
          border-radius: var(--rounded-lg);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .secondary-button:hover {
          background-color: rgba(67, 97, 238, 0.1);
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        .hero-image img {
          max-width: 100%;
          height: auto;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        /* Stats Bar */
        .stats-bar {
          background-color: var(--primary-dark);
          color: white;
          padding: 2rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          position: relative;
          z-index: 10;
          box-shadow: var(--shadow-md);
        }

        .stat-item {
          text-align: center;
          padding: 0 1rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.9;
        }

        /* Features Section */
        .features-section {
          padding: 6rem 2rem;
          background-color: white;
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--gray);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background-color: var(--light);
          border-radius: var(--rounded-xl);
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
        }

        .feature-icon {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: var(--gray);
        }

        /* Disaster Types */
        .disaster-types {
          padding: 6rem 2rem;
          background-color: var(--light-gray);
        }

        .disaster-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .disaster-card {
          background-color: white;
          border-radius: var(--rounded-xl);
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .disaster-card:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow);
        }

        .disaster-icon {
          font-size: 3rem;
          color: var(--danger);
          margin-bottom: 1rem;
        }

        .disaster-card h3 {
          font-size: 1.25rem;
        }

        /* Testimonials */
        .testimonials {
          padding: 6rem 2rem;
          background-color: white;
        }

        .testimonial-slider {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          height: 250px;
        }

        .testimonial-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          background-color: var(--light);
          padding: 2rem;
          border-radius: var(--rounded-xl);
          box-shadow: var(--shadow-sm);
          text-align: center;
        }

        .testimonial-card.active {
          opacity: 1;
        }

        .quote {
          font-size: 1.25rem;
          font-style: italic;
          margin-bottom: 1rem;
          color: var(--dark);
        }

        .author {
          font-weight: 600;
          color: var(--primary);
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: var(--light-gray);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background-color: var(--primary);
          transform: scale(1.2);
        }

        /* Report Section */
        .report-section {
          padding: 6rem 2rem;
          background-color: var(--light-gray);
        }

        .report-container {
          display: flex;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 3rem;
        }

        .report-image {
          flex: 1;
        }

        .report-image img {
          max-width: 100%;
          height: auto;
        }

        .report-form {
          flex: 1;
          background-color: white;
          padding: 2rem;
          border-radius: var(--rounded-xl);
          box-shadow: var(--shadow);
        }

        .report-form h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .report-form p {
          color: var(--gray);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .form-group select,
        .form-group input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--light-gray);
          border-radius: var(--rounded);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group select:focus,
        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
        }

        .severity-slider {
          margin-top: 0.5rem;
        }

        .severity-slider input[type="range"] {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          background: linear-gradient(to right, var(--success), var(--warning), var(--danger));
          border-radius: 4px;
          outline: none;
        }

        .severity-slider input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid var(--primary);
          border-radius: 50%;
          cursor: pointer;
        }

        .severity-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          font-size: 0.8rem;
          color: var(--gray);
        }

        .submit-button {
          width: 100%;
          background-color: var(--danger);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: var(--rounded);
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover {
          background-color: #d90429;
          transform: translateY(-2px);
          box-shadow: var(--shadow);
        }

        /* Map Preview */
        .map-preview {
          padding: 6rem 2rem;
          background-color: white;
        }

        .map-container {
          height: 500px;
          background-color: var(--light-gray);
          border-radius: var(--rounded-xl);
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .map-placeholder {
          text-align: center;
        }

        .map-icon {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        /* Footer */
        .footer {
          background-color: var(--dark);
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-brand .logo {
          margin-bottom: 1rem;
          color: white;
        }

        .footer-brand p {
          opacity: 0.8;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .link-group {
          display: flex;
          flex-direction: column;
        }

        .link-group h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .link-group a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .link-group a:hover {
          color: white;
          transform: translateX(5px);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .legal-links a:hover {
          color: white;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .hero-content h1 {
            font-size: 3rem;
          }
          
          .report-container {
            flex-direction: column;
          }
        }

        @media (max-width: 768px) {
          .navbar-container {
            padding: 0 1.5rem;
          }
          
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background-color: white;
            flex-direction: column;
            align-items: flex-start;
            padding: 6rem 2rem 2rem;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: right 0.3s ease;
          }
          
          .nav-links.active {
            right: 0;
          }
          
          .hamburger {
            display: block;
          }
          
          .nav-links a {
            padding: 1rem 0;
            font-size: 1.1rem;
          }
          
          .cta-button.desktop-only {
            display: none;
          }
          
          .cta-button.mobile-only {
            display: flex;
            width: 100%;
            margin-top: 1rem;
          }
          
          .hero-section {
            flex-direction: column;
            padding: 7rem 1.5rem 3rem;
            text-align: center;
          }
          
          .hero-content {
            max-width: 100%;
            margin-bottom: 3rem;
          }
          
          .hero-content h1 {
            font-size: 2.5rem;
          }
          
          .subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          
          .button-group {
            justify-content: center;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .stats-bar {
            padding: 1.5rem;
          }
          
          .stat-item {
            padding: 0 0.5rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .button-group {
            flex-direction: column;
          }
          
          .hero-content h1 {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1.1rem;
          }
          
          .stats-bar {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;