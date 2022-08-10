import React from 'react';
import { NavLink } from "react-router-dom";
export default function Nav() {
    const user_id = sessionStorage.getItem('u_id');
    const firebasestate = sessionStorage.getItem('user_id');
    const handleClick = () => {
        if (firebasestate) {

            sessionStorage.clear();

            window.location.href = 'http://localhost:3000/'

        }

        sessionStorage.clear();
        window.location.href = 'http://localhost:3000/'
    }

    return (

        <>

            <header id="header">
                <div class="wpo-site-header">
                    <nav class="navigation navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <div class="row align-items-right">
                                <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div class="mobail-menu">
                                        <button type="button" class="navbar-toggler open-btn">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar first-angle"></span>
                                            <span class="icon-bar middle-angle"></span>
                                            <span class="icon-bar last-angle"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-6 col-6">
                                    <div class="navbar-header">
                                        <a class="navbar-brand" href="/"><img src="../logo.png"
                                            alt="" style={{ marginTop: "15px", width: "150px" }} /></a>
                                    </div>
                                </div>
                                <div class="col-lg-10 col-md-1 col-1">
                                    <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                        <button class="menu-close"><i class="ti-close"></i></button>
                                        <ul class="nav navbar-nav mb-2 mb-lg-0">
                                            {user_id == null ? (
                                                <>
                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/" >Home</NavLink>

                                                    </li>

                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/contact" >Contact</NavLink>

                                                    </li>
                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/about" >About</NavLink>

                                                    </li>

                                                </>
                                            ) : (
                                                <>
                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/" >Home</NavLink>

                                                    </li>


                                                    <li class="menu-item-has-children">
                                                        <NavLink to="/add">
                                                            Add Product
                                                        </NavLink>


                                                    </li>
                                                    <li class="menu-item-has-children">

                                                        <NavLink to="/about" >About</NavLink>

                                                    </li><li class="menu-item-has-children">

                                                        <NavLink to="/contact" >Contact</NavLink>

                                                    </li>

                                                    {/* <li class="menu-item-has-children">
                                        <NavLink to="/share" >Post</NavLink>

                                    </li> */}
                                                </>
                                            )}

                                            <li class="menu-item-has-children" >
                                                <a className="nav-link" style={{ color: "#1a3b55", marginLeft: "40px" }}><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" >

                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg></a>
                                                <ul class="sub-menu">
                                                    {user_id == null ? (
                                                        <>
                                                            <li >
                                                                <NavLink to="/login" >Login</NavLink>
                                                            </li>
                                                            <li >
                                                                <NavLink to="/Register" >Register</NavLink>
                                                            </li>

                                                        </>


                                                    ) : (
                                                        <>



                                                            <li >
                                                                <NavLink onClick={handleClick} to="/" >LogOut</NavLink>
                                                            </li>

                                                        </>

                                                    )}

                                                </ul>
                                            </li>


                                        </ul>


                                        {/* <div class="col-lg-2 col-md-2 col-2"> */}

                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>



    );
}
