import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  // Destructuring (ES6)
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home mr-1" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question mr-1" />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus mr-1" />
                Add Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Default Props if none is passed
Header.defaultProps = {
  branding: 'My App'
};

// PropTypes - Prop Validation
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
