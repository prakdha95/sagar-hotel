import './Home.css'
import { assets, food_list } from '../../assets/images'
import Deals from '../../components/Deals/Deals'
import Popular from '../../components/Popular/Popular'
import { useState } from 'react'

const Home = () => {

  const [search, setSearch] = useState('')
  const [filteredItems, setFilteredItems] = useState(food_list);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    const filtered = food_list.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }

  return (
    <>
      <main className='hero_section'>
        <div className="hero_left">
          <p>Order Restaurant food and takeaway</p>
          <h2>Feast Your Senses, <span>Fast and Fresh</span></h2>
          <div className='searchForm'>
            <form>
              <input type="text" value={search} onChange={handleSearch} placeholder='search your food...' />
              <button className='btn'>Search</button>
            </form>
            <div className='searchItems'>
              {search &&
                (filteredItems.length > 0 ? (
                  filteredItems.map(item => (
                    <li key={item._id}>{item.name}</li>
                  ))
                ) :
                  (<li>No items found</li>))}
            </div>
          </div>
        </div>

        <div className="hero_right">
          <img src={assets.homepageImage} alt="" />
        </div>
      </main>

      <Deals />
      <Popular />
    </>
  )
}

export default Home
