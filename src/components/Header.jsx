import React from "react";
import { Link } from "react-router-dom";
import { TABS } from "../utils.js/constant";

const Header = () => {
    return (
        <>
            <div className="header">
                <div>
                    <h3>Auction Solutions</h3>
                </div>
                <div className="navItems">
                    <ul>
                        <li>
                            <Link className="navLink" to="/">{TABS.HOME}</Link>
                        </li>
                        <li>
                            <Link className="navLink" to="/dashboard">{TABS.DASHBOARD}</Link>
                        </li>
                        <li>
                            <Link className="navLink" to="/hobbies">{TABS.HOBBIES}</Link>
                        </li>
                        <li>
                            <Link className="navLink" to="/login">{TABS.SIGN_IN}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;