﻿export interface ISettings {
    id:number
}

export interface IExternalSettings extends ISettings {
    ssl: boolean,
    enable:boolean,
    subDir: string,
    ip: string,
    port:number
}

export interface IOmbiSettings extends ISettings {
    port: number,
//baseUrl:string, 
    collectAnalyticData: boolean,
    wizard: boolean,
    apiKey:string
}

export interface IEmbySettings extends IExternalSettings {
    apiKey: string,
    administratorId: string,
    enableEpisodeSearching:boolean
}

export interface IPlexSettings extends IExternalSettings {
    enableEpisodeSearching: boolean,
    plexAuthToken: string,
    machineIdentifier: string
}

export interface ISonarrSettings extends IExternalSettings {
    apiKey: string,
    qualityProfile: string,
    seasonFolders: boolean,
    rootPath: string,
    fullRootPath:string
}

export interface ILandingPageSettings extends ISettings {
    enabled: boolean,
    beforeLogin: boolean,
    afterLogin: boolean,
    noticeEnabled: boolean,
    noticeText: string,
    noticeBackgroundColor: string,
    timeLimit: boolean,
    startDateTime: Date,
    endDateTime:Date,
}