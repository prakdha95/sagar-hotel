import './Deals.css'
import {NavLink} from 'react-router-dom'
import {assets} from '../../assets/images'

const Deals = () => {
  return (
    <>
      <section className='deals_section'>
        <div className="deals_container">
            <div className="heading">
                <h2>Upto -20% off. DristiHotel exclusive deals</h2>
                <ul>
                    <NavLink to={'/veg'}><li>Veg</li></NavLink>
                    <NavLink to={'/momo'}><li>Momo</li></NavLink>
                    <NavLink to={'/chowmein'}><li>Chowmin</li></NavLink>
                    <NavLink to={'/others'}><li>Others</li></NavLink>
                </ul>
            </div>
            <div className="item_card">
                <div className="card">
                    <img src={assets.chicken_fry} alt="" />
                    <p>-5%</p>
                    <small>Chicken Fry</small>
                </div>
                <div className="card">
                    <img src={assets.veg_fryrice} alt="" />
                    <p>-10%</p>
                    <small>Veg Fry Rice</small>
                </div>
                <div className="card">
                    <img src={assets.mix_khaja} alt="" />
                    <p>-5%</p>
                    <small>Mix Khaja Set</small>
                </div>
                <div className="card">
                    <img src={assets.aloo_jeera} alt="" />
                    <p>-20%</p>
                    <small>Alu Jeera</small>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Deals
