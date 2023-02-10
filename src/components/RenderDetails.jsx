import React, { useState } from "react";
const RenderDetail = (curElem) => {
    
    const {id,title,body } = curElem;
    return (
        <> 
           
        <div className="row ">
            <div className="grid grid-three-column">
                <div className="container"> {id} .</div>
                <div className="container">{title}</div>
                <div className="container">{body}</div>
            </div>
        </div>
        
        </>
       
    )
}
export default RenderDetail;