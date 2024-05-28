import { RandomUtils } from "../namespace/random.namespace";

export const songs = [
    {nameSong: 'Amantes'},
    {nameSong: 'Manos de Tijera'},
    {nameSong: 'Cigarrillo'}
]

export const randomSong = RandomUtils.getRandomElement(songs);
