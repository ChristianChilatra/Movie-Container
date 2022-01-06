class API{
  constructor(API_KEY){
    this.KEY_API = API_KEY;
  }

  baseAPI = 'https://api.themoviedb.org/3/'

  get discoverMovie(){
    return `${this.baseAPI}discover/movie/?api_key=${this.KEY_API}&page=1`;
  }

}

export default API