import AnimeList from "./components/AnimeList"
import Header from "./components/AnimeList/Header"
import { getAnimeRespon } from "./library/Library"

const Page = async() => {
  const topAnime = await getAnimeRespon("top/anime", "limit=10")

  return (
    <> 
      <section>
        <Header title="Paling Populer🔥" linkTitle="Lihat semua anime" linkHref="/populer" />
        <AnimeList api={topAnime}/>
        {/* footer */}
        <div className="flex justify-center items-center">
          <footer className="text-white text-xl p-10 font-bold">Created by Kenz, 2024</footer>
        </div>
      </section>
    </>
  )
}

export default Page