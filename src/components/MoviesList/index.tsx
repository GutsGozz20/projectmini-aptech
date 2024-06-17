// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';


const API = "https://api.themoviedb.org/3/movie";
const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmY0YWJjNGUzMTEyYzNhOGIyODMwMWMxYWQwMzllZSIsInN1YiI6IjY0MTI3N2Q2ZTE4ZTNmMDdkMDU1ZjY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iw5OvKuR35yRllO8eoRWjvCQnlFmh8nieiLD9NpSDc8`

interface IMovies {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

interface IResponse {
  page: number;
  results: IMovies[];
  total_pages: number;
  total_results: number;
}
  const MoviesList = ({ url }: { url: string }) => {

    const [movies, setMovies] = useState<IResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log("isLoading", isLoading);
    
    useEffect(() => {
      setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}${url}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setIsLoading(false);
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination]} // tạo < > và ...
        navigation
        // pagination={{ clickable: true }}
        spaceBetween={20} // khoảng cách giữa các slide
        slidesPerView={4} // số lượng hình trên 1 view
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {       
        movies &&
          movies?.results.length > 0 &&
          movies?.results.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <div className="movie-box">
                    <Link to={`/${movie.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="" className="movie-box-img"/>
                    <div className="box-text">
                        <h1 className="movie-tittle">{movie.title}</h1>
                        <span className="movie-type">{movie.release_date}</span>
                        <a href="#" className="watch-btn play-btn">
                        <div className="bx">
                        <FiPlay className=""/>
                        </div>
                        </a>
                    </div>
                  </Link>
                </div>  
              </SwiperSlide>                        
            )
          })}  
      </Swiper>
    </>
             
  )
}

export default MoviesList
