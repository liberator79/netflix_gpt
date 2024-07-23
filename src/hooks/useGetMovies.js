import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../store/movieSlice";
import nowPlaying from "../static/files/data"
const useGetMovies = (movieState) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(addMovies({ movieState, data: nowPlaying.results }));
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []); 

};

export default useGetMovies;
