export default class SwapiService{
    _urlBase='https://swapi.dev/api/'
    async getResource(url){
        const body=await fetch(this._urlBase+url)
        if(!body.ok){
            throw new Error(`Could not fetch url ${this._urlBase}${url}`)
        }
        return await body.json()
    }
    async getAllPeople(){
      const allPeople=await this.getResource("people/")
      return allPeople.results;
    }
    getPerson(id){
      return this.getResource(`people/${id}`)
    }
    async getAllPlanets(){
      const allPeople=await this.getResource("planets/")
      return allPeople.results;
    }
    getPlanet(id){
      return this.getResource(`planets/${id}`)
    }
    async getAllStarships(){
      const allPeople=await this.getResource("starships/")
      return allPeople.results;
    }
    getStarship(id){
      return this.getResource(`starships/${id}`)
    }
  }
  
