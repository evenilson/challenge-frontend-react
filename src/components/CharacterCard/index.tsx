


import groupIcon from './../../assets/icons/group.svg';

import './styles.scss';

type CharacterCard = {
  id: string,
  image: string,
  name: string,
  description: string,
}


function CharacterCard({ id, image, name, description }:CharacterCard) {
  return (
    <div className="character-card">
      <div className="character-card__image">
        <img src={image} alt={`Image the ${name}`} />
      </div>
      <div className="character-card__body">
        <h2>{name}</h2>
        <p>{description}</p>
        <button>
          <img src={groupIcon} alt="Group icon" />
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;