const Footer = () => {
  return (
    <div className="container1">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 ml-4 text-body-secondary">© 2024 DUO Driver. All rights reserved.</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        {/* <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Overview
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#Reviews" className="nav-link px-2 text-body-secondary">
              Reviews
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a href="#Details" className="nav-link px-2 text-body-secondary">
              Details
            </a>
          </li>
        </ul> */} 
      </footer>
    </div>
  );
};

export default Footer;
