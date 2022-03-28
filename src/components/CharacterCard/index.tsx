


import { useNavigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import useBreakpointDevice from '../../hooks/useBreakpointDevice';
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


function CharacterCard({ id, name, description, thumbnail }: CharacterCardProps) {

  const {
    isFavorite,
    addCharacterTeam,
    removeCharacterTeam
  } = useMyTeam()

  const navigate = useNavigate();

  const { device } = useBreakpointDevice()



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
    <div className={`character-card ${device}`} >
      <div className="character-card__image" onClick={() => navigate(`/character-profile/${id}`)}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`${name}`} />
      </div>
      <div className="character-card__body">
        <h2 onClick={() => navigate(`/character-profile/${id}`)}>{name}</h2>
        <p>{limitCaratersDescription(description, 100)}</p>
        <button
          style={isFavoriteCharacter ? { backgroundColor: 'var(--red)' } : { backgroundColor: 'var(--white)' }}
          onClick={() => handleOnClick()}
          data-tip data-for="tipButtom"
        >
          <img src={groupIcon} alt="Group icon" />
        </button>
        <ReactTooltip id="tipButtom" place="left" effect="float">
          { isFavoriteCharacter ? 'Remove character to team' : 'Add character from team' }
        </ReactTooltip>
      </div>
    </div>
  );
}

export default CharacterCard;