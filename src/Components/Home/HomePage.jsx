import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; 

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className='nav-item'>
            <div className="dropdown">
              <button className="dropbtn">Login</button>
              <div className="dropdown-content">
                <Link to="/admin-login">Admin Login</Link>
                <Link to="/voter-login">Student Login</Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <section id="home" className="section">
        <div className="container">
          <div className="content">
            <h2>Home Section</h2>
            <p>Welcome to the Home section</p>
            {/* Button to navigate to the About section */}
            <Link to="#about" className="btn">Learn More</Link>
          </div>
          <div className="image">
            {/* Background image */}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          
          <div className="content">
            <h2>About Section</h2>
            <p>Learn more about us and our mission.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
