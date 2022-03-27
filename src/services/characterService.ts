import api from "./api";


async function getCharacters(limit: number, offset: number, text: string){

  const params: any = {
    limit,
    offset,
  }

  if (text) params['nameStartsWith'] = text

  try {
    const { data } = await api.get('characters', {
      params: params  
    });

    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}

export default getCharacters