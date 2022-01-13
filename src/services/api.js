class API {
  constructor(API_KEY) {
    this.KEY_API = API_KEY;
  }

  baseAPI = "https://api.themoviedb.org/3/";

  discoverMovie(page, filter, query) {
    switch (filter) {
      case "asc":
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&sort_by=vote_average.asc&page=${page}&language=es`;
      case "search":
        return `${this.baseAPI}search/movie?api_key=${this.KEY_API}&query=${query}&page=${page}&language=es`;
      case "desc":
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&sort_by=vote_average.desc&page=${page}&language=es`;
      default:
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&page=${page}&language=es`;
    }
  }
}

export default API