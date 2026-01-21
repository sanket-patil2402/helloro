import "./HeroSection.css";
import doctors from "../assets/doctors.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Left visual area */}
      <div className="left-area">
        <div className="blob-bg"></div>

        {/* Floating Doctor Card */}
        <div className="doctor-card">
          <img src={doctors} alt="Doctor" className="doctor-img" />

          <div className="doctor-info">
            <h3>Dr. Prerna Narang</h3>

            <p className="info-line">
              <span className="icon">🔗</span>
              Gynecology + 2 others
            </p>

            <p className="info-line">
              <span className="icon">🎓</span>
              7 years of Experience
            </p>
          </div>

          <button className="arrow-btn">→</button>
        </div>
      </div>

      {/* Right content */}
      <div className="hero-text">
        <h2>
          Instant <span>FREE</span> 5-Mins Call
        </h2>
        <p>
          We understand the importance of building trust with your patients.
          That’s why Amrutam offers a free 5-minute call, helping you connect
          instantly and foster lasting patient relationships with ease.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
