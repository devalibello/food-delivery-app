import './Categories.css'
import { categoryList } from '../../assets/assets'


const Categories = ({category, setCategory}) => {
  
  return (
    <div className='categories'>
    <div className="category-text">
      <h2>Explore Our Menu</h2>
      <p className='categories-subheading'>Order UK Delivery brings your favorite meals straight to your doorstep with speed and convenience.</p>
    </div>
      <div className="food-categories">
      { categoryList.map((food, index) => 
        <div onClick={() => setCategory(prev => prev === food.name ? 'All' : food.name)}
            key={index} className={`food-container ${category === food.name ? 'active' : ''}`}>
            <img src={food.image} alt="" />
            <h3 className='category-food-name'>{food.name}</h3>
            <p className='category-food-footer'>{food.footer}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default Categories
