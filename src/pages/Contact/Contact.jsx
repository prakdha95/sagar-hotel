import { FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import './Contact.css'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <section className='contact_section'>
        <div className="back_pic"></div>
        <div className="contact_container">
            <h2>Contact Us Now!</h2>
            <div className="contact_info">
                <div className="location">
                <FaMapMarkedAlt style={{ fontSize: '2em', color: 'black' }} />
                    <h5>Address</h5>
                    <p>Galchhi-7,</p>
                    <p>Galchhi Chowk,</p>
                    <p>Dhading, Nepal</p>
                </div>
                <div className="phone">
                <FaPhone style={{ fontSize: '2em', color: 'black' }} />
                    <h5>Phone</h5>
                    <p>+971 9823445336</p>
                    <p>Sagar Dhakal</p>
                </div>
                <div className="email">
                <MdEmail style={{ fontSize: '2em', color: 'black' }} />
                    <h5>Email</h5>
                    <p>dristihotel@gmail.com</p>
                    <p>Dristi Hotel</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
