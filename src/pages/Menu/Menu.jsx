import { useState } from 'react'
import { assets, category_list, food_list } from '../../assets/images'
import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {

    const [category, setCategory] = useState('All')

    return (
        <>
            <section className='menu_section'>
                <header>
                    <div><h2>All Offers from DristiHotel</h2></div>
                    {/* <div className='searchbar'>
                        <form>
                            <div><img src={assets.searchIcon} alt="" /></div>
                            <input type="text" placeholder='search from menu...' />
                        </form>
                    </div> */}
                </header>

                <nav>
                    <div className="container">
                        <ul>
                            {category_list.map((item, index) => {
                                return (
                                    <div onClick={() => setCategory(prev => prev === item.category_name ? 'All' : item.category_name)} key={index}>
                                        <div className='item_image'>
                                            <img className={category === item.category_name ? 'selected' : ''} src={item.category_image} alt="" />
                                        </div>
                                        <p>{item.category_name}</p>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </nav>

                <section className='category_items' id='food_list'>
                    <div className="items_card" >
                        {
                            food_list.map((item, index) => {
                                if (category === 'All' || category === item.category) {
                                    return (
                                        <div className="card" key={index} id={item._id}>
                                            <div className="card_info">
                                                <h2>{item.name}</h2>
                                                <p>{item.description}</p>
                                                <b>Rs. {item.price}.00</b>
                                            </div>
                                            <div className="card_image">
                                                <img src={item.image} alt="" />
                                                {/* <div>
                                                    <h3>+</h3>
                                                </div> */}
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </section>
                {/* <section className='category_items'>
                    <h2>Momo</h2>
                    <div className="items_card">
                        <div className="card">
                            <div className="card_info">
                                <h2>Chicken Momo</h2>
                                <p>Authentic taste of himalayas. Red chutney with deliciously wrapped chicken balls</p>
                                <b>Rs. 100</b>
                            </div>
                            <div className="card_image">
                                <img src={assets.momo} alt="" />
                                <div>
                                    <h3>+</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_info">
                                <h2>Chicken Momo</h2>
                                <p>Authentic taste of himalayas. Red chutney with deliciously wrapped chicken balls</p>
                                <b>Rs. 100</b>
                            </div>
                            <div className="card_image">
                                <img src={assets.momo} alt="" />
                                <div>
                                    <h3>+</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_info">
                                <h2>Chicken Momo</h2>
                                <p>Authentic taste of himalayas. Red chutney with deliciously wrapped chicken balls</p>
                                <b>Rs. 100</b>
                            </div>
                            <div className="card_image">
                                <img src={assets.momo} alt="" />
                                <div>
                                    <h3>+</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_info">
                                <h2>Chicken Momo</h2>
                                <p>Authentic taste of himalayas. Red chutney with deliciously wrapped chicken balls</p>
                                <b>Rs. 100</b>
                            </div>
                            <div className="card_image">
                                <img src={assets.momo} alt="" />
                                <div>
                                    <h3>+</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </section> */}
            </section>
        </>
    )
}

export default Menu
