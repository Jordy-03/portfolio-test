/* Takes base URL, appends path, and reutnrs full URL */
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}