import { Helmet } from "react-helmet"
import NowPlayingMoviesList from "../components/NowPlayingMoviesList"
// import MoviesList from "../components/MoviesList"


const PopularPage = () => {
  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Popular</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <section className="popular container popular-route" id="popular">
                <div className="popular-content swiper flex gap-5 flex-wrap justify-between mb-8">
                    <NowPlayingMoviesList url={`/popular`} />
                </div>
                <div className="movies-content">
                    <div className="popular-content swiper">
                        <NowPlayingMoviesList url={`/now_playing`} />
                    </div>
                </div>
                
            </section>
        
        
        </>
  )
}

export default PopularPage
