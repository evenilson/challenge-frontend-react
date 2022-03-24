

import useBreakpointDevice from '../../hooks/useBreakpointDevice';
import limitCaratersDescription from '../../utils/limitCaratersDescription';

import './styles.scss'

type CharacterApresentationCardProps = {
  name: string,
  description: string,
  image: string,
}

function CharacterApresentationCard({name, description, image}: CharacterApresentationCardProps) {

  const { device } = useBreakpointDevice();

  return (
    <div className={`character-apresentation-card ${device}`}>
      <div className="character-apresentation-card__image">
        <img src={image} alt="Image The Hero" />
      </div>
      <div className="character-apresentation-card__body">
        <h1>{name}</h1>
        <p>{limitCaratersDescription(description)}</p>
      </div>
    </div>
  );
}

export default CharacterApresentationCard;