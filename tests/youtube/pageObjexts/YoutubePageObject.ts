import { Browser, expect, Page } from '@playwright/test'
import { IYoutubePage } from '../interfaces/YoutubeUI';
import { Context } from 'vm';


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
        const index = Math.floor(Math.random() * lstVideos.length);
        const randomVideo = lstVideos[index];
        await this.page.waitForTimeout(5000);

        const lstTitleVideo = await randomVideo.$('a#video-title');
        const titleVideoSelect = await lstTitleVideo?.textContent();

        console.log(titleVideoSelect);

        await randomVideo.click();
        
        const lblTitleVideoOpen = await this.page.$('#title > h1');
        const titleVideoOpen = await lblTitleVideoOpen?.textContent();

        console.log(titleVideoOpen)
        //expect(lblTitleVideoOpen).toBe(titleVideoSelect);
    }
}