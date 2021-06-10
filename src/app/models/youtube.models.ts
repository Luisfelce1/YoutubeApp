export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    prevPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: Video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface Video {
    publishedAt:            Date;
    channelId:              ChannelID;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           ChannelTitle;
    playlistId:             PlaylistID;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: ChannelTitle;
    videoOwnerChannelId:    ChannelID;
}

export enum ChannelID {
    UCAv98LDjf5KvFib5ElhpYg = "UC_Av98lDjf5KvFib5elhpYg",
}

export enum ChannelTitle {
    RauwAlejandroTv = "RauwAlejandroTv",
}

export enum PlaylistID {
    UUAv98LDjf5KvFib5ElhpYg = "UU_Av98lDjf5KvFib5elhpYg",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:  Default;
    medium:   Default;
    high:     Default;
    standard: Default;
    maxres?:  Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
