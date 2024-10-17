import './Categories.css'
import burger from '../../images/burger-category.png'
const Categories = () => {
  return (
    <div className='categories'>
      <h2>Explore Our Menu</h2>
      <p className='categories-subheading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Velit quae modi, quibusdam eius esse tenetur? Vel accusamus iure nostrum tempore?</p>
      <div className="food-categories">
        <div className="food-container">
            <img src={burger} alt="" />
            <h3>Burger</h3>
            <p>Exceptional Taste</p>
        </div>
        <div className="food-container">
            <img src={burger} alt="" />
            <h3>Burger</h3>
            <p>Exceptional Taste</p>
        </div>
      </div>
    </div>
  )
}

export default Categories
