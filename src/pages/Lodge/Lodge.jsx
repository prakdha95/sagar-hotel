import './Lodge.css'
import { assets } from '../../assets/images'
import { FaPhone, FaMapMarkerAlt, FaBed, FaCoffee, FaConciergeBell } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Lodge = () => {
    return (
        <>
            <section className='lodge_section'>
                <div className="container">
                    <div className="back_image">
                        <img src={assets.lodge_background} alt="" />
                    </div>
                    <div className="info_container_top">
                        <h3>Dristi Hotel & Lodge</h3>
                        <div className="contact">
                            <div>
                                <FaPhone style={{ fontSize: '0.8em', color: 'white' }} />
                                <p>+977 9823445336</p>
                            </div>
                            <div>
                                <MdEmail style={{ fontSize: '1em', color: 'white' }} />
                                <p>dristihotel@gmail.com</p>
                            </div>
                            <div>
                                <FaMapMarkerAlt style={{ fontSize: '0.8em', color: 'white' }} />
                                <p>Galchhi-7, Galchhi Chowk, Dhading</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lodge_info">
                    <div className="heading">
                        <h5>Details:</h5>
                    </div>
                    <div className="info_container">
                        <div className="top">
                            <h3>About Dristi Hotel & Lodge</h3>
                        </div>
                        <div className="middle">
                            <p>Nestled at the heart of Galchhi Chowk, this charming lodge offers a perfect blend of comfort and convenience for travelers journeying through the stunning Himalayas of Nepal. A step above the typical teahouse experience, Dristi Hotel & Lodge presents an inviting retreat with exceptional hospitality, delicious meals, and a tranquil atmosphere. Whether you are passing through or planning a longer stay, our lodge provides a complete package with every detail thoughtfully attended to, ensuring a seamless experience. From cozy rooms to top-notch service, we strive to make every guest feel right at home. Dristi hotel & lodge is truly a ‘Home Away from Home’ in the heart of the Himalayas.</p>
                        </div>
                        <div className='end'>
                            <p>Proprioter: <span>Mr. Sagar Dhakal</span></p>
                        </div>
                    </div>
                </div>
                <div className="lodge_info">
                    <div className='room_count'>
                        <FaBed size={30} color="#000" />
                        <b>4</b>
                        <p>Hotel Rooms</p>
                    </div>
                </div>
                <div className="lodge_info">
                    <div className='amenity'>
                        <p>Amenities</p>
                    </div>
                    <div className='contain'>
                        <div>
                            <FaCoffee size={26} color="#FF4500" />
                            <p>Breakfast</p>
                        </div>
                        <div>
                            <FaConciergeBell size={26} color="#4CAF50" />
                            <p>Room Service</p>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Lodge
