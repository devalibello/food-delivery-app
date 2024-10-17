import './Categories.css'
import { categoryList } from '../../assets/assets'


const Categories = ({category, setCategory}) => {
  
  return (
    <div className='categories'>
      <h2>Explore Our Menu</h2>
      <p className='categories-subheading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Velit quae modi, quibusdam eius esse tenetur? Vel accusamus iure nostrum tempore?</p>
      <div className="food-categories">
      { categoryList.map((food, index) => 
        <div onClick={() => setCategory(prev => prev === food.name ? 'All' : food.name)}
            key={index} className={`food-container ${category === food.name ? 'active' : ''}`}>
            <img src={food.image} alt="" />
            <h3>{food.name}</h3>
            <p>{food.footer}</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default Categories
