import React, { useEffect, useState } from "react";
import email from "../assests/email.png";
import padlock from "../assests/padlock.png";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { FORM_HEADING, BUTTON } from "../utils.js/constant";

const Login = () => {
    const [loginData, setLoginData] = useState(
        {
            email: '',
            password: '',
        });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!loginData.email.trim()) {
            validationErrors.email = "Email is required"
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginData.email)){
            validationErrors.email = "Email is not valid"
        }
    
        if(!loginData.password.trim()) {
            validationErrors.password = "Password is required"
        } else if(loginData.password.length < 6){
            validationErrors.password = "Password should be at least 6 characters"
        }

        setErrors(validationErrors)

        const data = JSON.parse(localStorage.getItem('formData'));
        if((data.email === loginData.email && data.password === loginData.password) && (Object.keys(validationErrors).length === 0)){
            alert("Login Successfully")
            navigate("/dashboard");
        } else{
            alert("Please Enter Correct Credentails")
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="headingText">
                            <h3>{FORM_HEADING.TITLE}</h3>
                            <p className="ctxText">{FORM_HEADING.LOGIN_CTX}</p>
                        </div>
                        <div className="container">
                            <img className="logo" src={email} alt="react logo" />
                                <input
                                    className="inputStyle"
                                    name="email"
                                    type="email"
                                    value={loginData.email}
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                />
                            {errors.email && <span className="emailSpan">{errors.email}</span>}
                        </div>
                        <div className="container">
                            <img className="logo" src={padlock} alt="contact" />
                                <input
                                    className="inputStyle"
                                    name="password"
                                    type="password"
                                    value={loginData.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            {errors.password && <span className="passwordSpan">{errors.password}</span>}
                        </div>
                        <button type="submit" className="signButton">{BUTTON.LOGIN}</button>
                        <p className="textStyle">Don't have an account? <Link className="signLink" to="/">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;