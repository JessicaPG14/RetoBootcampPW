import { Browser, expect, Page } from '@playwright/test'
import { IYoutubePage } from '../interfaces/YoutubeUI';
import { RandomUtils } from '../namespace/random.namespace';
import { randomSong, songs } from '../data/songs.data';


export class YoutubePage implements IYoutubePage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto('https://www.youtube.com/');
        await this.page.waitForTimeout(5000);
    }

    async enterSong(song: string): Promise<void> {
        await this.page.click('//input[@id="search"]');
        await this.page.fill('//input[@id="search"]', song);
    }

    async search(): Promise<void> {
        await this.page.click('//button[@id="search-icon-legacy"]');
        await this.page.waitForSelector('ytd-video-renderer');
    }

    async searchSong(song: string): Promise<void> {
        await this.enterSong(song);
        await this.search();
    }

    async selectVideo(): Promise<void> {
        const lstVideos = await this.page.$$('ytd-video-renderer');
        const randomVideo = RandomUtils.getRandomElement(lstVideos);
        await this.page.waitForTimeout(5000);

        const lstTitleVideo = await randomVideo.$('a#video-title');
        const titleVideoSelect = await lstTitleVideo?.textContent();

        console.log(titleVideoSelect);

        await randomVideo.click();
        
        expect(titleVideoSelect).toContain(randomSong.nameSong);
    }
}