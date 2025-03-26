import React from 'react'
import './Home.css';

const Home = () => {
return (
    <>
        <nav className="navbar">
            <div className="logo">
                <i className="fas fa-shield-alt"></i>
                <span>DisasterAlert</span>
            </div>
            <div className="nav-links">
                <a href="#home"><i className="fas fa-home"></i> Home</a>
                <a href="#report"><i className="fas fa-exclamation-triangle"></i> Report</a>
                <a href="#dashboard"><i className="fas fa-chart-line"></i> Dashboard</a>
                <a href="#contact"><i className="fas fa-phone-alt"></i> Contact</a>
            </div>
        </nav>

        <section id="home" className="section">
            <div className="hero-content fade-in">
                <h1 className="hero-title">Advanced Disaster Management System</h1>
                <p className="hero-description">
                    Leveraging cutting-edge technology to enhance emergency response,
                    improve coordination, and save lives during critical situations.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#report" className="btn btn-primary pulse">
                        <i className="fas fa-bell"></i> Report Emergency
                    </a>
                    <a href="#dashboard" className="btn btn-secondary">
                        <i className="fas fa-chart-bar"></i> View Dashboard
                    </a>
                </div>
            </div>
        </section>

        <section id="report" className="section">
            <h1 className="section-title">Report an Incident</h1>
            <p className="section-subtitle">
                Quickly report any disaster or emergency situation to alert authorities and
                initiate response protocols.
            </p>
            <form className="fade-in">
                <div className="form-group">
                    <label htmlFor="incident-type">Incident Type</label>
                    <select id="incident-type" required>
                        <option value="">Select incident type</option>
                        <option value="flood">Flood</option>
                        <option value="earthquake">Earthquake</option>
                        <option value="fire">Fire</option>
                        <option value="hurricane">Hurricane</option>
                        <option value="landslide">Landslide</option>
                        <option value="tsunami">Tsunami</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" placeholder="Enter exact location or drop a pin on map" required />
                </div>

                <div className="form-group">
                    <label htmlFor="severity">Severity Level (1-10)</label>
                    <input type="range" id="severity" min="1" max="10" defaultValue="5" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                        <span>1 (Mild)</span>
                        <span id="severity-value">5</span>
                        <span>10 (Critical)</span>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description"
                        placeholder="Provide details about the incident (what you see, hear, etc.)"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="media">Upload Media (Optional)</label>
                    <input type="file" id="media" accept="image/,video/" />
                </div>

                <button type="submit">
                    <i className="fas fa-paper-plane"></i> Submit Report
                </button>
            </form>
        </section>

        <section id="dashboard" className="section">
            <h1 className="section-title">Incident Dashboard</h1>
            <p className="section-subtitle">
                Real-time monitoring and analytics of reported incidents with interactive
                visualization tools for emergency responders.
            </p>

            <div className="dashboard-container fade-in">
                <div className="dashboard-card">
                    <i className="fas fa-exclamation-circle"></i>
                    <div className="stat-value">142</div>
                    <div className="stat-label">Active Incidents</div>
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-users"></i>
                    <div className="stat-value">78</div>
                    <div className="stat-label">Responders Deployed</div>
                </div>
                <div className="dashboard-card">
                    <i className="fas fa-ambulance"></i>
                    <div className="stat-value">36</div>
                    <div className="stat-label">Rescues Today</div>
                </div>
            </div>

            <div className="map-container fade-in">
                <div className="map-placeholder">
                    <i className="fas fa-map-marked-alt" style={{ fontSize: '3rem', marginRight: '1rem' }}></i>
                    Interactive Incident Map Will Appear Here
                </div>
            </div>
        </section>

        <section id="contact" className="section">
            <h1 className="section-title">Emergency Contacts</h1>
            <p className="section-subtitle">
                Immediate assistance channels for disaster response and support services.
            </p>

            <div className="contact-info fade-in">
                <div className="contact-card">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Emergency Hotline</h3>
                    <p>Available 24/7</p>
                    <a href="tel:+911234567890">+91-1234-567-890</a>
                </div>
                <div className="contact-card">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Support</h3>
                    <p>Response within 1 hour</p>
                    <a href="mailto:emergency@disasteralert.org">emergency@disasteralert.org</a>
                </div>
                <div className="contact-card">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Regional Offices</h3>
                    <p>Find your nearest office</p>
                    <a href="#">View locations</a>
                </div>
            </div>
        </section>
    </>
);
}

export default Home