import React from "react"
import classes from "./person-detals.module.css"
const PersonDetails=()=>{
    return(
        <div className={classes.personDetails}>
            <div>
                <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"/>
            </div>            
            <div className={classes.personDetailsText}>
                Text
            </div>
        </div>
    )
}
export default PersonDetails;