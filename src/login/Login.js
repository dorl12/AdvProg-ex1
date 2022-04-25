import React, { useState } from "react";
import './style.css';
import { contacts } from '../Chat/hooks/Storage.js'
import Register from './Register.js'

function Login({ registered, setCurrentUser }) {
    let [register, setRegister] = useState(false);

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handle();
        }
    }

    const handle = () => {
        var userName = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (contacts.findIndex((user) => { return user.name == userName && user.pass == password }) !== (-1)) {
            registered(true);
            setCurrentUser(userName);
        }
    }

    return (
        <div className="container">
            <div className="screen">
                {register ? <Register registered={registered} setRegister={setRegister} setCurrentUser={setCurrentUser}></Register> :
                    <div className="content">
                        <form className="form-login">
                            <div className="form-group">
                                <i className="login_icon fas fa-lock"></i>
                                <label htmlFor="userName">Username</label>
                                <input type="text" name="username" placeholder="username" id="username" />
                            </div>
                            <div className="form-group">
                                <i className="login_icon fas fa-lock"></i>
                                <label htmlFor="password">Password</label>
                                <input onKeyDown={handleKey} type="password" namename="password" placeholder="password" id="password" />
                            </div>
                            <button type="button" className="submit_button" onClick={handle}>Login</button>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </form>
                        <div className="registerOption">
                            <span>Not Registered? <a href="#" className="link-primary" onClick={() => { setRegister(true) }}>Click here</a> to register</span>
                        </div>
                    </div>}
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
}

export default Login;
