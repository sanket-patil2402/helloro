import "./Welcome.css"
import doctors from "../assets/doctors.png";

function Welcome() {
  return (
    <section className="info">
      <div>
        <p className="welcome">Namaste, Welcome to Amrutam</p>

        <h1>
          Join Amrutam – <span>Grow Your Practice</span>
        </h1>

        <p className="subtitle">
          Connect with more patients, set your own schedule,<br />
          and grow your Ayurvedic practice effortlessly.
        </p>

        <button className="join-but">Join Now</button>

        <div className="stats">
          <div>
            <h3>500+</h3>
            <p>Average Active Users</p>
          </div>
          <div>
            <h3>40+</h3>
            <p>Average daily free calls</p>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-blob"></div>
          <img src={doctors} alt="Amrutam Doctors" className="hero-image" />

          {/* Floating Icons */}
          <div className="floating-icon icon-1">
            <span>🌿</span>
          </div>
          <div className="floating-icon icon-2">
            <span>🧘</span>
          </div>
          <div className="floating-icon icon-3">
            <span>📅</span>
          </div>
        </div>
      </div>
    </section>
  )

}
export default Welcome;
