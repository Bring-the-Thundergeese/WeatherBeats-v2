import React from "react";
import { useSelector } from "react-redux";

export default function Background()    {

//import background from store
const background = useSelector((state) => state.updater.bg)

//inline style for background color 
let bg = {
    backgroundColor: `${background}`,
}

//display background color

return(
    
    <div style={bg}>
    </div>

)


}