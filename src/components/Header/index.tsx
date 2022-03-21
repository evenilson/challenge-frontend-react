




import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
 
  return (
    <header>
      <nav className="container header-content">
        <div className="header-content__logo">
          <img src='' alt="Iron-Man image" />
          <h1>Marvel Strike Team</h1>
        </div>
        <Link to="/" className="header-content__buttom">
          <span>My team</span>
          <img src='' alt="Team icon" />
        </Link>
      </nav>
      
    </header>
 )
}

export default Header;