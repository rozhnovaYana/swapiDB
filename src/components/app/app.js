import React from "react"
import AppHeader from "../app-header"
import ItemList from "../item-list"
import PersonDetails from "../person-details"
import RandomPlanet from "../random-planet"
import classes from "./app.module.css"
const App=()=>{
    return(
        <div className={classes.app}>
            <div className={classes.container}>
                <AppHeader/>
                <RandomPlanet/>
                <div className={classes.dGrid}>
                    <ItemList/>
                    <PersonDetails/>
                </div>
            </div>
        </div>
    )
}
export default App;