import logo from "../assets/logo.jpg"

const Hero = () => {
  return (
    <div className="container2">
    <div className="hero px-4 py-5 my-5 text-center">
      <img className="hero-image d-block mx-auto mb-4" src={logo} alt="Logo" width="72" height="72" />
      <h1 className="display-5 fw-bold">Welcome to DUO Driver</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
        Pair AI Learner: Elevate your learning journey with the power of personalized AI guidance. Experience seamless collaboration as your AI partner adapts to your unique needs, 
        providing targeted feedback and insights to accelerate your progress. Unlock your full potential, learn faster, and achieve your goals with the perfect learning companion by your side.        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Start Chatting</button> */}
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Download</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
