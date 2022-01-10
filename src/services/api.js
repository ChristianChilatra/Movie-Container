class API{
  constructor(API_KEY){
    this.KEY_API = API_KEY;
  }

  baseAPI = 'https://api.themoviedb.org/3/'

  discoverMovie(page, filter){
    switch (filter) {
      case "asc":
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&sort_by=vote_average.asc&page=${page}`;
        break;
      case "desc":
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&sort_by=vote_average.desc&page=${page}`;
        break;
      default:
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&page=${page}`;
    }
  }

}

export default API