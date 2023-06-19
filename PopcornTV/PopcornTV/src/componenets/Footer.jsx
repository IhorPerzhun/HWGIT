import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Popcorn TV
        </Link>
      </h2>
      
    </div>
  );
};

export default Footer;
