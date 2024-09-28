import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar d-flex flex-wrap align-items-center justify-content-between">
        {/* Logo and brand name */}
        <a href="/" className="brand d-flex align-items-center text-white text-decoration-none">
          <img src={logo} alt="DUO Driver Logo" className="logo" />
          <span className="brand-name ms-2">DUO Driver</span>
        </a>

        {/* Navigation links */}
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-white">Overview</a></li>
          <li><a href="#Reviews" className="nav-link px-2 text-white">Reviews</a></li>
          <li><a href="#Details" className="nav-link px-2 text-white">Details</a></li>
        </ul>

        {/* GitHub icon (pushed to the right) */}
        <div className="ms-auto">
          <a href="https://github.com/Ashish9738/Duo-Drive.git" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
