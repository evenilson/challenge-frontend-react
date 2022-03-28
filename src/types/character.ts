export interface ICharacter {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

export interface IComic {
  id: string;
  title: string;
  description: string;
  pageCount: number;
  prices: [{price: number}],
  available: number
  dates: {
    type: string,
    date: string
  }[],
  thumbnail: {
    extension: string;
    path: string;
  }
}