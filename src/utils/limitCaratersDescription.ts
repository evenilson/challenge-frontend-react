function limitCaratersDescription(description: string, limit: number) {
  const exceededCharacterLimit = description.length >= limit ? true : false;
  
  if(!exceededCharacterLimit) return description

  return description.substr(0, limit - 1).concat('...')

}

export default limitCaratersDescription