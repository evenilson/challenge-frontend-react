
import './styles.scss';

type TitleListProps = {
  title: string
  total: number
}


function TitleList({title, total}: TitleListProps) {
  return (
    <div className="title-list">
      <h1>{title}</h1>
      <h4>{total} results</h4>
    </div>
  );
}

export default TitleList;