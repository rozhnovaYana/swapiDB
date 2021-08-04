import React from "react"
import classes from "./random-planet.module.css"
const RandomPlanet=()=>{
    return(
        <div className={classes.randomPlanet}>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>
            <div className={classes.randomPlanetText}>
                <div>
                    Title
                </div>
                <div>
                    Title
                </div>
                <div>
                    Title
                </div>
            </div>
        </div>
    )
}
export default RandomPlanet;