import banner from '../../images/banner-image.png'
import './Banner.css'


const Banner = () => {
  return (
    <div className="banner">
            <div className="banner-text">
                <h1>Feast Your Senses, <br /> <span>Fast and Fresh</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, recusandae!</p>
                <button className='btn'>View Menu</button>
            </div>
            <img className='banner-image' src={banner} alt="" />
    </div>
  )
}

export default Banner
