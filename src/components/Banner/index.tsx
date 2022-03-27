

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/icons/back.svg';

import './styles.scss'

type BannerProps = {
  title: string | ReactNode;
  children?: ReactNode
  styles?: React.CSSProperties
  styleTitle?: React.CSSProperties
  backButtom?: boolean
}


function Banner({title, children, styles={}, styleTitle = {}, backButtom = false}: BannerProps) {
  return (
    <section className="banner">
      <div className="container banner-content" style={styles}>
        <h1 style={styleTitle}>
          {title}
        </h1>
        {children}
        
        {
          backButtom && 
          <Link to="/home" className="back">
            <strong>Return to previous page</strong>
            <img src={backIcon} alt="Back icon" />
          </Link>
        }
      </div>
    </section>
  );
}

export default Banner;