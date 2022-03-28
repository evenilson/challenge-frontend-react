import useBreakpointDevice from "../../hooks/useBreakpointDevice";
import limitCaratersDescription from "../../utils/limitCaratersDescription";

import './styles.scss';

type ComicCardProps = {
  image: string,
  name: string,
  releaseDate: any,
  numberPages: number,
  description: string,
  price: any,
}



function ComicCard({image, name, releaseDate, numberPages, description, price}: ComicCardProps) {

  const { device } = useBreakpointDevice()

  return(
    <div className={`comic-card ${device}`}>
      <div className="comic-card__image">
        <img src={image} alt={`Image ${name}`} />
      </div>
      <div className="comic-card__body">
        <h1>{name}</h1>
        <div className="body-datails">
           <span>{new Date(releaseDate[1].date).toLocaleDateString('en-US')} </span> 
           <span> {numberPages} pages</span>
          <span> {price[0].price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} </span>
          </div>
        <p>{limitCaratersDescription(description, 300)}</p>
      </div>
    </div>
  );

}


export default ComicCard;