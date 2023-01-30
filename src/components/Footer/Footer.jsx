
// import homeIcon from '../../resources/zlogo.jpeg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { Container } from './FooterStyles';


const Footer = () => {
	return (
		<Container>
			<div className='reach_out'>
				<figure className='logo'>
					<img src= /*{homeIcon} */ '' alt='homeIcon' />
				</figure>
				<div className='socials'>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://web.facebook.com/zubismartonline"
                >
                    <FacebookIcon color='primary'  />
                    </a>

                    <a
                     target="_blank"
                     rel="noreferrer"
                     href="https://www.instagram.com/zubismartonline/"
                    >
					<InstagramIcon style={{ color: 'pink' }} />
                    </a>
                   
				</div>
				<Link 
                to="/">
                <p className='copyright'>
					<span>©</span> 2022 ZubisMart<ShoppingCartIcon color='primary' className='logos'  alt='Logos'/>
				</p>
                </Link>
			</div>
			<div className='community'>
				<h2>ABOUT ZUBISMART</h2>
				<ul>
                    
					<Link
                    to="/about-us">
                    <li>About us</li>
                    </Link>

					<Link
                    to='/terms-and-conditions'>
                    <li>Terms and Conditions</li>
                    </Link>

                    <Link
                    to="/privacy-notice">
					<li>Privacy Notice</li>
                    </Link>
				</ul>
			</div>
			<div className='about'>
				<h2>LET US HELP YOU</h2>
				<ul className='luhy'>
                    <Link
                    to='/contact-us'>
                    <li>Contact Us</li>
                    </Link>
					
					<Link
                    to="/how-to-shop-on-ZubisMart">
                    <li>How to shop on ZubisMart</li>
                    </Link>
				</ul>
			</div>
		</Container>
	);
};

export default Footer;