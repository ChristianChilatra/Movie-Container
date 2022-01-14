class API {
  constructor(API_KEY) {
    this.KEY_API = API_KEY;
  }

  baseAPI = "https://api.themoviedb.org/3/";

  discoverMovie(params) {

    const setParams = {
      filter: params? (params.filter?params.filter:'') : '',
      page: params? (params.page?params.page:1) : 1,
      query: params? (params.query?params.query:'') : '',
      id: params? (params.id?params.id:0) : 0
    }

    switch (setParams.filter) {
      case "asc":
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&sort_by=vote_average.asc&page=${setParams.page}&language=es`;
      case "search":
        return `${this.baseAPI}search/movie?api_key=${this.KEY_API}&query=${setParams.query}&page=${setParams.page}&language=es`;
      case "desc":
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&sort_by=vote_average.desc&page=${setParams.page}&language=es`;
      case "video":
        return `${this.baseAPI}movie/${setParams.id}/videos?api_key=${this.KEY_API}&language=es`;
      default:
        return `${this.baseAPI}discover/movie?api_key=${this.KEY_API}&page=${setParams.page}&language=es`;
    }
  }

}

export default API
