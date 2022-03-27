


import useMyTeam from '../../hooks/useMyTeam';
import limitCaratersDescription from '../../utils/limitCaratersDescription';
import groupIcon from './../../assets/icons/group.svg';

import './styles.scss';

type CharacterCard = {
  id: string,
  name: string,
  description: string
  thumbnail: {
    extension: string;
    path: string;
  }
}


function CharacterCard({ id, name, description , thumbnail}:CharacterCard) {

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
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Image the ${name}`} />
      </div>
      <div className="character-card__body">
        <h2>{name}</h2>
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