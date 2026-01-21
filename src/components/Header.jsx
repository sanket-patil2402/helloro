import './Header.css'

function Header() {
  return (
    <section>
      <header className="top-bar">
        <div className="content">
          <div className="title">
            Register Yourself As An Amrutam Doctor
          </div>

          <button className="join-but">
            Join Now
          </button>
        </div>
      </header>
      <div className="">
        <div className='topic' >
          <h2>AMRUTAM</h2>
        </div>
        <nav className="nav-bar">
          <ul className='nav-links'>
            <li>About Us</li>
            <li>Onboarding</li>
            <li>FAQ</li>
            <li>Testimonials</li>
          </ul>
        </nav>

      </div>

    </section>
  )
}

export default Header;