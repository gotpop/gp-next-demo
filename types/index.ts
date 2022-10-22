export interface IFeedProps {
    posts: IPost[]
}

export interface IPost {
    id: string
    title: string
    body: string
}

export interface IForm {
    [key: string]: {
        value: string
        valid: boolean
        error: string
    }
}

export interface ILoader {
    src: string
    width: number
}

export interface IPhotoProps {
    photos: IPhoto[]
}

export interface IPhoto {
    thumbnailUrl: string
    title: string
    url: string
}