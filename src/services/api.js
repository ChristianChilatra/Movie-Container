class API{
  constructor(API_KEY){
    this.KEY_API = API_KEY;
  }

  baseAPI = 'http://api.themoviedb.org/3/'

  discoverMovie(page){
    return `${this.baseAPI}discover/movie/?api_key=${this.KEY_API}&page=${page}`;
  }

}

export default API