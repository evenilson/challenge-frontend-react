import limitCaratersDescription from "../../utils/limitCaratersDescription";

import './styles.scss';

type ComicCardProps = {
  image: string,
  name: string,
  releaseDate: string,
  numberPages: number,
  description: string,
  price: string,
}

function ComicCard({image, name, releaseDate, numberPages, description, price}: ComicCardProps) {
  return(
    <div className="comic-card">
      <div className="comic-card__image">
        <img src={image} alt={`Image ${name}`} />
      </div>
      <div className="comic-card__body">
        <h1>{name}</h1>
        <div className="body-datails"> <span> {releaseDate} </span> <span> {numberPages} pages</span> <span> {price} </span></div>
        <p>{limitCaratersDescription(description, 200)}</p>
      </div>
    </div>
  );

}


export default ComicCard;