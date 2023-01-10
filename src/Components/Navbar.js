import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
    static propTypes = {};

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        IndianNews
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-Link text-light mx-2" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/business">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/entertainment">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/health">
                                    Health
                                </Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/science">
                                    Science
                                </Link>
                            </li>

                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/sports">
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-Link text-light" to="/technology">
                                    Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
