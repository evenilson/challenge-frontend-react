

import searchIcon from '../../assets/icons/search.svg';

import './styles.scss';

function Search() {

  return (
    <div className="search-input">  
      <input 
        type="text" 
      />
      <div className="search-input__icon">
        <img src={searchIcon} alt="Search icon" />
      </div>
    </div>
  )
}

export default Search;