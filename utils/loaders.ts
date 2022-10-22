import { ILoader } from "@types/index"

export const myLoaderSmall = ({ src, width }: ILoader) => {
    const imgId = src.replace('https://via.placeholder.com/150/', '')
    const image = `https://via.placeholder.com/${width}/${imgId}`

    return image
}

export const myILoaderLarge = ({ src, width }: ILoader) => {
    const imgId = src.replace('https://via.placeholder.com/600/', '')
    const image = `https://via.placeholder.com/${width}/${imgId}`

    return image
}