export const getGifs = async( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=IcS2ANCPXfNGkrse30cQ04PuRf4yjPKw`;
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map (img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}
