import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="upper-footer">
        <div className="footer-order-section">
            <div className="logo2-section">
                <img src={assets.logo2} alt="" />
                <p>Company # 490039-445, Registered with <br />House of companies.</p>
            </div>
            <div className="footer-socials">
                <img src={assets.facebook} alt="" />
                <img src={assets.instagram} alt="" />
                <img src={assets.snapchat} alt="" />
                <img src={assets.tiktok} alt="" />
            </div>
        </div>
        <div className="footer-links first">
            <p>Pages</p>
            <p>Terms and Conditions</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Modern Slavery Statement</p>
        </div>
        <div className="footer-links second">
            <p>Get Help</p>
            <p>Your Restaurant</p>
            <p>Delivery</p>
            <p>Create Business Account</p>
            <p>More</p>
        </div>
    </div>
    <div className="lower-footer">
        <p>Order.uk Copyright 2025, All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer
