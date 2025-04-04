import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
import { FaFire } from "react-icons/fa";
import { WiEarthquake } from "react-icons/wi";
import { MdFlood } from "react-icons/md";
import { WiStormWarning } from "react-icons/wi";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <FaSatelliteDish className="text-4xl text-primary-600" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance using satellite and ground sensors to detect disasters as they emerge"
    },
    {
      icon: <IoMdAlert className="text-4xl text-primary-600" />,
      title: "Instant Alerts",
      description: "Push notifications to mobile devices in affected areas within seconds of detection"
    },
    {
      icon: <FaNetworkWired className="text-4xl text-primary-600" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting to anticipate disaster paths and potential impact zones"
    },
    {
      icon: <FaUserShield className="text-4xl text-primary-600" />,
      title: "First Responder Coordination",
      description: "Integrated platform for emergency teams to coordinate rescue efforts efficiently"
    }
  ];

  const disasterTypes = [
    { icon: <WiEarthquake className="text-5xl text-orange-500" />, name: "Earthquakes", to:"/EarthQuake"},
    { icon: <FaFire className="text-5xl text-red-500" />, name: "Wildfires", to:"/wildfires"},
    { icon: <MdFlood className="text-5xl text-blue-500" />, name: "Floods", to:"/Floods"},
    { icon: <WiStormWarning className="text-5xl text-purple-500" />, name: "Hurricanes", to:"/Hurricanes"}
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
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
        <div className="container mx-auto px-4 py-3 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaShieldAlt className="text-indigo-600 text-3xl mr-2" />
              <span className="text-xl font-bold text-indigo-900">DisasterAlert</span>
            </div>
            
            <div className={`fixed top-0 right-0 h-screen w-64 md:w-auto md:h-auto md:static bg-white md:bg-transparent shadow-2xl md:shadow-none transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col md:flex-row items-start md:items-center pt-16 md:pt-0 px-6 md:px-0`}>
              <button 
                className="absolute top-4 right-4 md:hidden text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <a href="#home" className="my-2 md:my-0 md:mx-4 flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <FaHome className="mr-2" /> Home
              </a>
              <a href="#features" className="my-2 md:my-0 md:mx-4 flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <FaChartLine className="mr-2" /> Features
              </a>
              <a href="#report" className="my-2 md:my-0 md:mx-4 flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <FaExclamationTriangle className="mr-2" /> Report
              </a>
              <a href="#contact" className="my-2 md:my-0 md:mx-4 flex items-center text-gray-700 hover:text-indigo-600 transition-colors">
                <FaPhoneAlt className="mr-2" /> Contact
              </a>
              <button className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center hover:bg-indigo-700 transition-colors">
                <FaBell className="mr-2" /> Get Alerts
              </button>
            </div>
            
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-indigo-600 relative inline-block">Advanced</span> Disaster 
                <br />Detection & Response
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Leveraging AI and IoT to predict, detect, and respond to emergencies faster than ever before
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors shadow-md">
                  <FaMobileAlt className="mr-2" /> Download App
                </button>
                <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-colors">
                  <FaCloud className="mr-2" />
                  <NavLink to='/layout'>Visit Full Site</NavLink> 
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://illustrations.popsy.co/amber/digital-nomad.svg" 
                alt="Disaster monitoring" 
                className="w-full max-w-md animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-indigo-200">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-indigo-200">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">3.2s</div>
              <div className="text-indigo-200">Alert Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">142+</div>
              <div className="text-indigo-200">Cities Protected</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How DisasterAlert <span className="text-indigo-600">Protects</span> You
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our cutting-edge system combines multiple technologies to keep communities safe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disaster Types */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Monitor <span className="text-indigo-600">All</span> Threats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From natural disasters to industrial accidents, our system detects them all
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {disasterTypes.map((disaster, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{disaster.icon}</div>
                <NavLink to={disaster.to} className="text-lg font-semibold hover:text-indigo-600 transition-colors">
                  {disaster.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-indigo-600">Thousands</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what emergency responders and citizens say about our system
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto relative h-64 md:h-56">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`absolute top-0 left-0 w-full bg-gray-50 rounded-xl p-8 shadow-md transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-indigo-600">— {testimonial.author}</p>
              </div>
            ))}
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report Section */}
      <section id="report" className="py-16 md:py-24 bg-gray-100 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* <div className="md:w-1/2">
              <img 
                src="https://illustrations.popsy.co/amber/security.svg" 
                alt="Emergency report" 
                className="w-full max-w-md mx-auto"
              />
            </div> */}
            <div className="md:w-1/2 bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4">
                Report an <span className="text-indigo-600">Emergency</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Submit real-time disaster information to alert authorities and nearby citizens
              </p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Incident Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="">Select incident type</option>
                    <option value="fire">Fire</option>
                    <option value="flood">Flood</option>
                    <option value="hurricane">Hurricane</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter location or use map" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Severity (1-10)</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    defaultValue="5"
                    className="w-full h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 (Mild)</span>
                    <span>5 (Moderate)</span>
                    <span>10 (Critical)</span>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-red-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-red-700 transition-colors shadow-md"
                >
                  <FaExclamationTriangle className="mr-2" /> Send Emergency Alert
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Community?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of cities and organizations using DisasterAlert to save lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md">
              Request Demo
            </button>
            <button className="px-6 py-3 bg-indigo-500 text-white border border-indigo-400 rounded-lg font-medium hover:bg-indigo-400 transition-colors shadow-md">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white mb-0">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <FaShieldAlt className="text-indigo-500 text-2xl mr-2" />
                <span className="text-xl font-bold">DisasterAlert</span>
              </div>
              <p className="text-gray-400 mb-4">Advanced Disaster Detection & Response System</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DisasterAlert. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

