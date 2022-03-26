export interface ICharacter {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}