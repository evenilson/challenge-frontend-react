

import searchIcon from '../../assets/icons/search.svg';

import './styles.scss';


type SearchProps = {
  text: string,
  onChange: any,
}



function Search({text, onChange}: SearchProps) {

  return (
    <div className="search-input">  
      <input 
        type="text"
        placeholder="Type in a character name"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="search-input__icon" >
        <img src={searchIcon} alt="Search" />
      </div>
    </div>
  )
}

export default Search;