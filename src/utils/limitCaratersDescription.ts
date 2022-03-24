function limitCaratersDescription(description: string) {
  const exceededCharacterLimit = description.length >= 200 ? true : false;
  
  if(!exceededCharacterLimit) return description

  return description.substr(0, 199).concat('...')

}

export default limitCaratersDescription