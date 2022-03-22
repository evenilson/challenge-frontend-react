
import { Link } from 'react-router-dom';

import ironImg from '../../assets/images/iron-man.svg';
import usersIcon from '../../assets/icons/users.svg';

import './styles.scss';

function Header() {
 
  return (
    <header>
      <nav className="container header-content">
        <Link to="/" className="header-content__logo">
          <img src={ironImg} alt="Iron-Man image" />
          <h1>Marvel Strike Team</h1>
        </Link>
        <Link to="/" className="header-content__buttom">
          <p>My team</p>
          <img src={usersIcon} alt="Users icon" />
        </Link>
      </nav>
    </header>
 )
}

export default Header;