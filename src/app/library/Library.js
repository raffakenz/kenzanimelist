export const getAnimeRespon = async(resource, query) => {
    const respon = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await respon.json()
    return anime
}