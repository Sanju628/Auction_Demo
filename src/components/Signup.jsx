import React, { useEffect, useState } from "react";
import contact from "../assests/contact.png";
import email from "../assests/email.png";
import padlock from "../assests/padlock.png";
import phone from "../assests/phone.png";
import { Link } from "react-router-dom";
import { FORM_HEADING, BUTTON } from "../utils.js/constant";


const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
      })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    }

    useEffect(() => {
        localStorage.setItem('formData',JSON.stringify(formData));
    },[formData]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.username.trim()) {
            validationErrors.username = "Username is required"
        }
    
        if(!formData.email.trim()) {
            validationErrors.email = "Email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email = "Email is not valid"
        }
    
        if(!formData.password.trim()) {
            validationErrors.password = "Password is required"
        } else if(formData.password.length < 6){
            validationErrors.password = "Password should be at least 6 characters"
        }
    
        if(formData.phone.length < 10) {
            validationErrors.phone = "Number should be at least 10 digit"
        }
    
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0) {
            alert("Sign Up Successfully")
        }
    
    }
    return (
        <>
            <div className="wrapper">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="headingText">
                            <h3>{FORM_HEADING.TITLE}</h3>
                            <p className="ctxText">{FORM_HEADING.SIGN_UP_CTX}</p>
                        </div>
                        <div className="container">
                            <img className="logo" src={contact} alt="Contact" />
                                <input
                                    className="inputStyle"
                                    name="username"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}  
                                />
                            {errors.username && <span className="userSpan">{errors.username}</span>} 
                        </div>
                        <div className="container">
                            <img className="logo" src={email} alt="Email" />
                                <input
                                    className="inputStyle"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={handleChange}  
                                />
                            {errors.email && <span className="emailSpan">{errors.email}</span>}
                        </div>
                        <div className="container">
                            <img className="logo" src={phone} alt="Phone" />
                                <input
                                    className="inputStyle"
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    onChange={handleChange}  
                                />
                            {errors.phone && <span className="phoneSpan">{errors.phone}</span>}  
                        </div>
                        <div className="container">
                            <img className="logo" src={padlock} alt="Password" />
                                <input
                                    className="inputStyle"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}  
                                />
                            {errors.password && <span className="passwordSpan">{errors.password}</span>}  
                        </div>
                        <button className="signButton">{BUTTON.SIGN_UP}</button>
                        <p className="textStyle">Already have an account? <Link className="signLink" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp