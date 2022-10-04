const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  },
};
