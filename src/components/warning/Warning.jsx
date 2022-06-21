import React from 'react';
import "./Warning.css"

function Warning(props){
const{year}=props
return(

    <div className="warning">
        <h2>There has been any expenses in <strong>{year}</strong> </h2>
    </div>




)

}

export default Warning;