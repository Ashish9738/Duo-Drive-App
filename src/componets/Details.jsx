const Details = () => {
    return (
        <section id="Details">
        <div className="container3">
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon text-bg-primary bg-gradient fs-2 mb-3 d-flex align-items-center justify-content-center">
            <i className="bi bi-collection"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Technology</h3>
          <p>Here is some description text for the first feature, providing insight and information about the topic.</p>
          <a href="#" className="icon-link">
            Click for more<i className="bi bi-chevron-right ms-1"></i>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon text-bg-primary bg-gradient fs-2 mb-3 d-flex align-items-center justify-content-center">
          <i className="bi bi-gear"></i>

          </div>
          <h3 className="fs-2 text-body-emphasis">Tools and Framework</h3>
          <p>Here is some more descriptive text, with more details and explanations for this particular feature.</p>
        </div>
        <div className="feature col">
          <div className="feature-icon text-bg-primary bg-gradient fs-2 mb-3 d-flex align-items-center justify-content-center">
            <i className="bi bi-toggles2"></i>
          </div>
          <h3 className="fs-2 text-body-emphasis">Developer</h3>
          <p>This paragraph adds extra context and detail to the third feature, helping users understand its purpose.</p>
        </div>
      </div>
      </div>
      </section>
    );
  };
  
  export default Details;
  