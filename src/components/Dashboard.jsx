import React, { useEffect, useState } from "react";
import { IMG_URL, DASHBOARD_DATA, URL, BUTTON} from "../utils.js/constant";


const Dashboard = () => {
    const [postData, setPostData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [reason, setReason] = useState();
    const [localData, setLocalData] = useState([]);

    const getData = async () => {
        const data = await fetch(URL);
        const jsonData = await data.json();
        setPostData(jsonData);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleSubmit = () => {
        setLocalData([
            {
                "Title": title,
                "Description": description,
                "Reason": reason,
            }
        ]);
        setTitle('');
        setDescription('');
        setReason('');
    }

    useEffect(() => {
        getData();
    },[]);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(localData));
    },[localData])

    return (
        <>
            <div>
                <div className="cardHeading">
                    <h1 className="dashHead">{DASHBOARD_DATA.TITLE}</h1>
                    <p className="dashCtx">{DASHBOARD_DATA.BODY}</p>
                </div>
                <div className="hobbStyle">
                    <button className="hobbButton" onClick={handleToggle}>{BUTTON.MODAL_BTN}</button>
                </div>
                {toggle && <div className="modalContainer">
                    <div className="modal">
                        <h3 className="hobbieCtx">Hobbies Modal</h3>
                        <input 
                            className="modalContent inputTitle" 
                            type="text" 
                            placeholder="Title of Hobbies" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input 
                            className="modalContent inputDescrip" 
                            type="text" 
                            placeholder="Description of Hobbies" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input 
                            className="modalContent inputReason" 
                            type="text" 
                            placeholder="Reason for Hobbies" 
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        />
                        <div className="modalButton">
                            <button className="modalCancel" onClick={handleToggle}>{BUTTON.CANCEL}</button>
                            <button className="modalSubmit" onClick={handleSubmit}>{BUTTON.SUBMIT}</button>
                        </div>
                    </div>
                </div>}
                <div className="outterCard">
                {postData.length === 0 ? <h3>Loading....</h3> : postData.slice(0,32).map((val) => {
                    return(
                        <div className="cardContainer">
                            <img 
                                className="logoImg"
                                src={IMG_URL}
                            />
                            <div className="cardData">
                                <h3 className="dashHead">{`${val.id} Product`}</h3>
                                <h5 className="dashHead">{val.title}</h5>
                                <p className="dashHead">{val.body.split(" ").slice(0,15).join(" ")}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </>

    )
};

export default Dashboard;