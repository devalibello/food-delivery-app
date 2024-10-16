import banner from '../../images/banner-image.png'
import 'Banner.css'


const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-cover">
            <div className="banner-text">
                <h1 className="banner-l"></h1>
                <p className="banner-right"></p>
                <button>View Menu</button>
            </div>
            <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner
