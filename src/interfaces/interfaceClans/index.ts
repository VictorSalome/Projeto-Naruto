// interface clans

export interface IGetClanResponse {
  clans: IClan[];
  currentPage: number;
  pageSize: number;
  totalClans: number;
}

export interface IClan {
  id: number;
  name: string;
  characters: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  images: string;
  debut?: IDebut;
  jutsu?: string[];
  personal: IPersonal;
  rank?: IRank;
  voiceActors?: IVoiceActors;
  family?: IFamily;
  tools?: string[];
  natureType?: string[];
  uniqueTraits?: string[];
  舟戸青煉FunatoSeiren?: IFunatoSeiren;
  畜生道Chikushōdō?: IChikushd;
}

export interface IDebut {
  manga?: string;
  anime?: string;
  novel?: string;
  game?: string;
  ova?: string;
  appearsIn: string;
  movie?: string;
}

export interface IPersonal {
  sex: string;
  affiliation: string;
  clan: string;
  age?: IAge;
  status?: string;
  team: unknown;
  birthdate?: string;
  height?: IHeight;
  weight?: IWeight;
  bloodType?: string;
  occupation: unknown;
  partner?: string;
  titles?: string[];
  kekkeiGenkai: unknown;
  classification: unknown;
  species?: string;
}

export interface IAge {
  "Part II"?: string;
  "Part I"?: string;
  "Academy Graduate"?: string;
  "Chunin Promotion"?: string;
  Gaiden?: string;
  "Boruto Movie"?: string;
}

export interface IHeight {
  "Part II"?: string;
  Gaiden?: string;
  "Part I"?: string;
  "Blank Period"?: string;
  "Boruto Movie"?: string;
}

export interface IWeight {
  "Part II"?: string;
  "Part I"?: string;
}

export interface IRank {
  ninjaRank?: INinjaRank;
  ninjaRegistration?: string;
}

export interface INinjaRank {
  Gaiden?: string;
  "Part I"?: string;
  "Boruto Manga"?: string;
  "Part II"?: string;
  "Blank Period"?: string;
}

export interface IVoiceActors {
  japanese: unknown;
  english: unknown;
}

export interface IFamily {
  son?: string;
  granddaughter?: string;
  mother?: string;
  daughter?: string;
  wife?: string;
  husband?: string;
  "grandmother "?: string;
  "father "?: string;
  "mother "?: string;
  sister?: string;
  lover?: string;
  brother?: string;
  "older brother"?: string;
  "younger brother"?: string;
  grandfather?: string;
  father?: string;
  uncle?: string;
  cousin?: string;
  "first cousin once removed"?: string;
  nephew?: string;
  niece?: string;
  "adoptive nephew"?: string;
  grandson?: string;
  "wife "?: string;
  "adoptive grandson"?: string;
  grandnephew?: string;
  grandniece?: string;
  "younger cousin"?: string;
  "adoptive son"?: string;
  "adoptive brother"?: string;
  "adoptive father"?: string;
  "adoptive sister"?: string;
  grandmother?: string;
  "granduncle "?: string;
  "uncle "?: string;
}

export interface IFunatoSeiren {}

export interface IChikushd {}
