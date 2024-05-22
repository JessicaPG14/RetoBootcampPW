import { test, expect } from '@playwright/test';
import { IYoutubePage } from './interfaces/YoutubeUI'
import { YoutubePage } from './pageObjexts/YoutubePageObject';
import { randomSong } from './data/songs.data';

test.describe('Youtube Test', () => {
    test('Search song', async ({page}) => {
        const youtubePage: IYoutubePage = new YoutubePage(page);

        await youtubePage.goto();
        await youtubePage.searchSong(randomSong.nameSong);

        await youtubePage.selectVideo();
    })
})