import './Popular.css'
import {assets} from '../../assets/images'

const Popular = () => {
  return (
    <>
      <section className='popular_section'>
        <div className="popular_container">
            <div className="heading">
                <h2>DristiHotel Popular <br />Categories</h2>
            </div>
            <div className="item_card">
                <div className="card">
                    <img src={assets.chicken_steammomo} alt="" />
                    <small>Chicken Momo</small>
                </div>
                <div className="card">
                    <img src={assets.chowmein} alt="" />
                    <small>Veg Chowmein</small>
                </div>
                <div className="card">
                    <img src={assets.buff_frymomo} alt="" />
                    <small>Buff Fried Momo</small>
                </div>
                <div className="card">
                    <img src={assets.chicken_chilli} alt="" />
                    <small>Chicken Chilli</small>
                </div>
                <div className="card">
                    <img src={assets.chickenchowmein} alt="" />
                    <small>Chicken Chowmein</small>
                </div>
                <div className="card">
                    <img src={assets.vegkhana1} alt="" />
                    <small>Mutton Khana</small>
                </div>
                <div className="card">
                    <img src={assets.vegkhajaset} alt="" />
                    <small>Chicken Khaja</small>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Popular
