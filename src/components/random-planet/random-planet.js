import React, { Component } from "react"
import classes from "./random-planet.module.css"
import SwapiService from "../../services/swapi-service"
class RandomPlanet extends Component{
    state={
        name:null,
        population:null,
        rotationPeriod:null,
        diameter:null,
        id:null
    }
    constructor(){
        super()
        this.updatePlanet()
    }
    service=new SwapiService()
    updatePlanet=()=>{
        let id=Math.floor(Math.random()*25)+5
        this.service.getPlanet(id)
        .then(planet=>{
            this.setState({
                id,
                name:planet.name,
                population:planet.population,
                rotationPeriod:planet.rotation_period,
                diameter:planet.diameter 
            })
        })
    }
    render(){
        const{id, name, population, rotationPeriod, diameter}=this.state;
        return(
            <div className={classes.randomPlanet}>
                <div>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                </div>
                <div className={classes.randomPlanetText}>
                    <div>
                        {name}
                    </div>
                    <div>
                        <b>Population: </b>{population}
                    </div>
                    <div>
                        <b>Rotation period: </b>{rotationPeriod}
                    </div>
                    <div>
                        <b>Diameter: </b>{diameter}
                    </div>
                </div>
            </div>
        )
    }
    
}
export default RandomPlanet;