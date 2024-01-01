import React, { useEffect, useState } from "react";
import { HOBBIES_DATA } from "../utils.js/constant";

const Hobbies = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const val = JSON.parse(localStorage.getItem('data'));
        if(val.length){
            setItems(val);
        } else {
            setItems([
                {
                    "Title": "No Data in LocalStorage",
                    "Description": "No Data in LocalStorage",
                    "Reason": "No Data in LocalStorage",
                }
            ])
        }
    },[])
    return (
        <>
            <div>
                <div className="cardHeading">
                    <h1 className="dashHead">{HOBBIES_DATA.TITLE}</h1>
                    <p className="dashCtx">{HOBBIES_DATA.BODY}</p>
                </div>
                <div className="outterCard">
                    {items.map((val) => {
                        return (
                            <div className="dataContainer">
                                <div className="cardData">
                                    <h4 className="dashHead">{`Title : ${val.Title}`}</h4>
                                    <p className="dashHead">{`Reason : ${val.Reason}`}</p>
                                    <p className="dashHead">{`Description : ${val.Description}`}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Hobbies;