import React from "react"
import classes from "./app-header.module.css"
const AppHeader=()=>{
    return(
        <div className={classes.appHeader}>
            <div className={classes.title}>
                <a href="#">
                    Swapi DB
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">People</a>
                    </li>
                    <li>
                        <a href="#">Planets</a>
                    </li>
                    <li>
                        <a href="#">Starships</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default AppHeader;