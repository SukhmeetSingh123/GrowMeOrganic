import React from "react";
import { useDetailContext } from "../context/MainPage_Context";
import RenderDetail from "./RenderDetails";
const MainPage = () => {
    const { isLoading, detail } = useDetailContext();

    if (isLoading) {
        return <div>......Loading</div>
    }
    return (
        <div>
            <div className="row ">
             <div className=" grid grid-three-column">
                <div className="container">
                <h3>Id</h3>
                </div>
                <div className="container">
                <h3>Title</h3>
                </div>
                <div className="container">
                <h3>Description</h3>
                </div>
            </div>
            </div>
            {

                detail.map((curElem) => {
                    return <RenderDetail key={curElem.id} {...curElem} />
                })
            }
        </div>

    );

}
export default MainPage;