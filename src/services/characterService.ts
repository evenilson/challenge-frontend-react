import api from "./api";


function getCharacters() {
  api.get("characters")
  .then((data) => {
    return data.data
  })
  .catch((err) => {   
    return Promise.reject(err)
  })
}

export default getCharacters