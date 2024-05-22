export const songs = [
    {nameSong: 'Amantes, Daniel Calderon'},
    {nameSong: 'Manos de Tijera'},
    {nameSong: 'Cigarrillo, Ana Gabriel'}
]

function getSong(songs: { nameSong: string }[]): { nameSong: string } {
    const index = Math.floor(Math.random() * songs.length);
    return songs[index];
}

export const randomSong = getSong(songs);

