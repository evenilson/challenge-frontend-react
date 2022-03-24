

import { ReactNode } from 'react';
import './styles.scss'

type BannerProps = {
  title: string | ReactNode;
  children?: ReactNode
  styles?: React.CSSProperties
  styleTitle?: React.CSSProperties
}

function Banner({title, children, styles={}, styleTitle = {}}: BannerProps) {
  return (
    <section className="banner">
      <div className="container banner-content" style={styles}>
        <h1 style={styleTitle}>
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

export default Banner;