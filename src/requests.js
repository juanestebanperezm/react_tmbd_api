const API_KEY="dbe64acf81cf3dc7f54bd2c298087787"

const requests={

fetchTrendingDay:`/trending/all/day?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc`,
fetchTrendingWeek:`/trending/all/week?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc`,
fetchDiscoverPopularity:`/discover/movie?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc`,
fetchDiscoverAction:`/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=28`,
fetchDiscoverComedy:`/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=35`,
fetchDiscoverRomance:`/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=10749`,
fetchDiscoverHorror:`/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=27`,
fetchDiscoverDocs:`/discover/movie?api_key=${API_KEY}&language=es-MX&with_genres=99`

}


export default requests