import { Page } from '@playwright/test'

export interface IYoutubePage {
    goto(): Promise<void>;
    enterSong(song:string): Promise<void>;
    search(): Promise<void>;
    searchSong(song:string): Promise<void>;
    selectVideo(): Promise<void>;
}