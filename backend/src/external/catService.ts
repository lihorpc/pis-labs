import axios from 'axios';

export interface CatFact {
  fact: string;
  length: number;
}

export async function getCatFact(): Promise<CatFact> {
  const res = await axios.get<CatFact>('https://catfact.ninja/fact');
  return res.data;
}
