


import { Link } from 'react-router-dom';
import useMyTeam from '../../hooks/useMyTeam';
import limitCaratersDescription from '../../utils/limitCaratersDescription';
import groupIcon from './../../assets/icons/group.svg';

import './styles.scss';

type CharacterCardProps = {
  id: string,
  name: string,
  description: string
  thumbnail: {
    extension: string;
    path: string;
  }
}


function CharacterCard({ id, name, description, thumbnail}:CharacterCardProps) {

  const {
    isFavorite,
    addCharacterTeam,
    removeCharacterTeam
  } = useMyTeam()


  const characterCurrent = {
    id: id,
    thumbnail: thumbnail,
    name: name,
    description: description
  }

  const isFavoriteCharacter = isFavorite(id)

  function handleOnClick() {

    if (isFavoriteCharacter) return removeCharacterTeam(id)
    return addCharacterTeam(characterCurrent)
  }

  return (
    <div className="character-card">
      <div className="character-card__image">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name}`} />
      </div>
      <div className="character-card__body">
        <Link to={`/character-profile/${id}`}><h2>{name}</h2></Link>
        <p>{limitCaratersDescription(description, 100)}</p>
        <button
          style={isFavoriteCharacter ? {backgroundColor: 'var(--red)'} : {backgroundColor: 'var(--white)'}}
          onClick={() => handleOnClick()}
        >
          <img src={groupIcon} alt="Group icon" />
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;