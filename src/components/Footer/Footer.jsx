import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_left">
          <h2>Dristi<span>Hotel</span></h2>
        </div>
        <div className="footer_center">
          <h4>Contact No: <span>+977 9823445336</span></h4>
        </div>
        {/* <div className="footer_right">
          <h4>Legal Pages</h4>
          <div>
            <ul>
              <li>Term & conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Modern Slavery Statement</li>
            </ul>
          </div>
        </div> */}
        {/* <div className="footer_end">
          <h4>Important Links</h4>
          <div>
            <ul>
              <li>Get help</li>
              <li>Add your restaurant</li>
              <li>Sign up</li>
              <li>Create account</li>
            </ul>
          </div>
        </div> */}
      </footer>
      <section className='footer_copyright'>
        <p>DristiHotel Copyright 2024, All Rights Reserved</p>
      </section>
    </>
  )
}

export default Footer
