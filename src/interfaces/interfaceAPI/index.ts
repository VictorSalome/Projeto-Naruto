/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IGetCharacterResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  totalCharacters: number;
}

export interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  jutsu?: string[];
  personal: Personal;
  uniqueTraits?: string[];
  family?: Family;
  natureType?: string[];
  rank?: Rank;
  voiceActors?: VoiceActors;
  tools?: string[];
}

export interface Debut {
  manga?: string;
  anime?: string;
  game?: string;
  appearsIn: string;
  novel?: string;
  movie?: string;
  ova?: string;
}

export interface Personal {
  species?: string;
  status?: string;
  kekkeiGenkai?: string;
  classification?: string;
  jinchūriki?: string[];
  titles?: string[];
  affiliation: any;
  birthdate?: string;
  sex?: string;
  height?: Height;
  weight?: Weight;
  bloodType?: string;
  occupation: any;
  team: any;
  partner?: string;
  age?: Age;
  clan?: string;
}

export interface Height {
  "Part II"?: string;
  "Part I"?: string;
  "Blank Period"?: string;
  Gaiden?: string;
}

export interface Weight {
  "Part II"?: string;
  "Part I"?: string;
}

export interface Age {
  "Part I"?: string;
  "Part II"?: string;
  "Boruto Manga"?: string;
  "Academy Graduate"?: string;
  "Chunin Promotion"?: string;
}

export interface Family {
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

export interface Rank {
  ninjaRank: NinjaRank;
  ninjaRegistration?: string;
}

export interface NinjaRank {
  "Part II"?: string;
  "Part I"?: string;
  "Boruto Manga"?: string;
}

export interface VoiceActors {
  japanese: any;
  english: any;
}
