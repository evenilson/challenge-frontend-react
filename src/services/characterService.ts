import api from "./api";


export async function getCharacters(limit: number, offset: number, text: string){

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

export async function getCharacterById(id: string){
  try {
    const { data } = await api.get(`characters/${id}`);
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function getComics(id: string){
  try {
    const { data } = await api.get(`characters/${id}/comics`, {
      params: {
        limit: 5
      }
    });
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}