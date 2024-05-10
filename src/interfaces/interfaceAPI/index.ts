/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IGetCharacterResponse {
  characters: ICharacter[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}

export interface ICharacter {
  id: number;
  name: string;
  images: string[];
  debut?: IDebut;
  jutsu?: string[];
  personal: IPersonal;
  uniqueTraits?: string[];
  family?: IFamily;
  natureType?: string[];
  rank?: IRank;
  voiceActors?: IVoiceActors;
  tools?: string[];
}

export interface IDebut {
  manga?: string;
  anime?: string;
  game?: string;
  appearsIn: string;
  novel?: string;
  movie?: string;
  ova?: string;
}

export interface IPersonal {
  species?: string;
  status?: string;
  kekkeiGenkai?: string;
  classification?: string;
  jinchūriki?: string[];
  titles?: string[];
  affiliation: any;
  birthdate?: string;
  sex?: string;
  height?: IHeight;
  weight?: IWeight;
  bloodType?: string;
  occupation: any;
  team: any;
  partner?: string;
  age?: IAge;
  clan?: string;
}

export interface IHeight {
  "Part II"?: string;
  "Part I"?: string;
  "Blank Period"?: string;
  Gaiden?: string;
}

export interface IWeight {
  "Part II"?: string;
  "Part I"?: string;
}

export interface IAge {
  "Part I"?: string;
  "Part II"?: string;
  "Boruto Manga"?: string;
  "Academy Graduate"?: string;
  "Chunin Promotion"?: string;
}

export interface IFamily {
  husband?: string;
  brother?: string;
  father?: string;
  "adoptive brother"?: string;
  "adoptive father"?: string;
  son?: string;
  "adoptive son"?: string;
  cousin?: string;
  nephew?: string;
  "incarnation with the god tree"?: string;
  "depowered form"?: string;
}

export interface IRank {
  ninjaRank: INinjaRank;
  ninjaRegistration?: string;
}

export interface INinjaRank {
  "Part II"?: string;
  "Part I"?: string;
  "Boruto Manga"?: string;
}

export interface IVoiceActors {
  japanese: any;
  english: any;
}
