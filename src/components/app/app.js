import React from "react"
import AppHeader from "../app-header"
import ItemList from "../item-list"
import RandomPlanet from "../random-planet"
import classes from "./app.module.css"
const App=()=>{
    return(
        <div className={classes.app}>
            <div className={classes.container}>
                <AppHeader/>
                <RandomPlanet/>
                <div>
                    <ItemList/>
                </div>
            </div>
        </div>
    )
}
export default App;