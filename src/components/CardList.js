import Card from "./Card";
import React from "react";

const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map((user, i) => {
                    return <Card 
                     key={i} 
                     id={robots[i].id} 
                     name={robots[i].name} 
                     email={robots[i].email} 
                     website={robots[i].website}
                    />
                })
            }
        </div>
    );
}

export default CardList;