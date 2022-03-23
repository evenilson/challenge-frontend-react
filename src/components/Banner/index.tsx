

import { CSSProperties, ReactNode } from 'react';
import './styles.scss'

type BannerProps = {
  title: string | ReactNode;
  children?: ReactNode
  styles?: React.CSSProperties
}

function Banner({title, children, styles={}}: BannerProps) {
  return (
    <section>
      <div className="container banner-content" style={styles}>
        <h1>
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

export default Banner;