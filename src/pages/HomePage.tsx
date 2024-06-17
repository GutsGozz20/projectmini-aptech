
import { Helmet } from "react-helmet";
// import { FiPlay } from "react-icons/fi";
import MoviesList from "../components/MoviesList";
// import Swiper core and required modules
// import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiPlay } from "react-icons/fi";
const HomePage = () => {
  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet> 

        <Swiper
                spaceBetween={20} // khoảng cách giữa các slide
                slidesPerView={1} // số lượng hình trên 1 view
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                <section className="home container " id="home">
                    <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" className="home-img"/>
                    <div className="home-text">
                    <h1 className="home-tittle">Hitman's Wife's <br/>Bodyguard</h1>
                    <p>Releasing 23 july</p>
                    <a href="#" className="watch-btn">
                    <div className="bx">
                        <FiPlay className=""/>
                    </div>
                    <span>Watch the trailler</span>
                    </a>
                    </div>
                </section>
                </SwiperSlide>
        </Swiper>

    {/* <MoviesList/> */}
        {/* <section className="home container " id="home">
            <img src="https://movie-site-delta.vercel.app/img/home-background.png" alt="" className="home-img"/>
            <div className="home-text">
            <h1 className="home-tittle">Hitman's Wife's <br/>Bodyguard</h1>
            <p>Releasing 23 july</p>
            <a href="#" className="watch-btn">
            <div className="bx">
                <FiPlay className=""/>
            </div>
            <span>Watch the trailler</span>
            </a>
            </div>
        </section> */}
            <section className="popular container" id="popular">
                <div className="heading">
                    <h2 className="heading-title">Popular Movies</h2>
                </div>
                <div className="popular-content swiper ">
                    <MoviesList url={`/popular`} />
                </div>
            </section>

            <section className="movies-container container" id="movies">
                <div className="heading">
                    <h2 className="heading-title">Now Playing</h2>
                </div>
                <div className="movies-content">
                    <div className="popular-content swiper">
                        <MoviesList url={`/now_playing`} />
                    </div>
                </div>
            
       
                <div className="movies-content mt-[30px]">
                    <div className="popular-content swiper">
                        <MoviesList url={`/top_rated`} />
                    </div>
                </div>
                </section>
                <div className="next-page">
                    <a href="#" className="next-btn">Next Page</a>
                </div> 
    </>
  )
}

export default HomePage
