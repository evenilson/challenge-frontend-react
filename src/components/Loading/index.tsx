import './styles.scss';

type LoadingPros = {
  title?: string
}

function Loading({title=''}: LoadingPros) {
  return (
    <div className="loading">
      <div className="loading__spin"></div>
      {title && <p className="loading__title">{title}</p>}
    </div>
  );
}

export default Loading;