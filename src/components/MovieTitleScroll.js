import{Carousel} from 'react-bootstrap'
const MovieTitleScroll= ({movies}) => {
console.log('Here are my movies', movies)
  return (
    <div>
    {!!movies &&
      movies.map(movie => {
        return (
          <div>
            {movie.original_title}
            {movie.overview}
            <img
                src='https://image.tmdb.org/t/p/w200/1E5baAaEse26fej7uHcjOgEE2t2.jpg'
                 alt="First slide"
              />
          </div>
        )
      })
    }
    </div>
  )
    // <Carousel>
    //   {movies.length > 0 &&
      
    //     movies.map((movie, index) => {
    //       console.log('WE HERE ==>', movie)
    //       return (
    //         <Carousel.Item key={`movie-${index}`}>
    //            <img
    //               className="d-block w-100"
    //               src={movie.poster_path}
    //               alt="First slide"
    //             />
    //         <Carousel.Caption>
    //           <h3>THIS IS MY TITLE</h3>
    //           <p>{movie.overview}</p>
    //         </Carousel.Caption>
    //        </Carousel.Item>
    //       )
    //     })
    //   }
    // </Carousel>
  // );
}


    
export default MovieTitleScroll;

    
