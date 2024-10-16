import banner from '../../images/banner-image.png'
import './Banner.css'


const Banner = () => {
  return (
    <div className="banner">
            <div className="banner-text">
                <h1>Feast Your Senses, <br /> <span className="fast-fresh">Fast and Fress</span></h1>
                <p>Order your favorite meal today!!!</p>
                <button className='btn'>View Menu</button>
            </div>
            <img className='banner-image' src={banner} alt="" />
    </div>
  )
}

export default Banner
