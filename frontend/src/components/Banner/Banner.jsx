import { assets } from '../../assets/assets'
import './Banner.css'


const Banner = () => {
  return (
    <div className="banner">
            <div className="banner-text">
                <h1>Feast Your Senses, <br /> <span>Fast and Fresh</span></h1>
                <p>Explore diverse cuisines and order effortlessly. Satisfaction is just a click away!</p>
                <button className='btn'>View Menu</button>
            </div>
            <img className='banner-image' src={assets.bannerImage} alt="" />
    </div>
  )
}

export default Banner
