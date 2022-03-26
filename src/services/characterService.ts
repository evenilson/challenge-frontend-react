import api from "./api";


async function getCharacters(limit: number, offset: number){
  try {
    const { data } = await api.get('characters', {
      params: {
        limit,
        offset,
      },  
    });

    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}

export default getCharacters