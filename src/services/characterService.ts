import api from "./api";


function getCharacters() {
  api.get("characters", {
    params: {
      limit: 8,
    }
  })
  .then((data) => {
    return data.data
  })
  .catch((err) => {   
    return Promise.reject(err)
  })
}

export default getCharacters