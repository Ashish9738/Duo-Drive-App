import logo from "../assets/logo.jpg";
import { FaGithub } from "react-icons/fa"; // Import the GitHub icon

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        {/* Logo and brand name */}
        <a href="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="DUO Driver Logo" className="logo" style={{ width: '40px', height: '40px' }} />
          <span className="brand-name ms-2">DUO DRIVE</span>
        </a>

        {/* Hamburger toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navigation items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#" className="nav-link">Overview</a>
            </li>
            <li className="nav-item">
              <a href="#Details" className="nav-link">Details</a>
            </li>
          </ul>

          {/* GitHub icon (pushed to the right) */}
          <div className="d-flex ms-lg-3">
            <a
              href="https://github.com/Ashish9738/Duo-Drive.git"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link p-0"
            >
              <FaGithub className="fs-3 text-white" /> {/* Font size and color */}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
