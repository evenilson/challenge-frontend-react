import { CSSProperties } from 'react';
import './styles.scss';

type LoadingPros = {
  style?: CSSProperties
}

function Loading({style={}}: LoadingPros) {
  return (
    <div className="loading" style={style}></div>
  );
}

export default Loading;