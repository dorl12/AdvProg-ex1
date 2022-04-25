import React, { useState } from "react";
import './style.css';
import { contacts } from '../Chat/hooks/Storage.js'
import Register from './Register.js'

function Login({ registered, setCurrentUser }) {
    let [register, setRegister] = useState(false);
    let [notes, setNotes] = useState("");
    let [userState, setUserState] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handle();
        }
    }

    const handle = () => {
        var userName = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (validate(userName, password)) {
            if (contacts.findIndex((user) => { return user.name == userName && user.pass == password }) !== (-1)) {
                registered(true);
                setCurrentUser(userName);
            }
            setUserState("User does not exist, please register");
        }
    }

    const validate = (userName, password) => {
        let reg = /^[a-zA-Z0-9]+$/i;
        let note = '';
        let test = reg.test(userName);
        if (!test) {
            note += 'invalid Username! ';
        }
        test = reg.test(password);
        if (!test) {
            note += 'invalid Password! ';
        }
        setNotes(note);
        return (note === '');
    }

    return (
        <div className="container">
            <div className="screen">
                {register ? <Register registered={registered} setRegister={setRegister} setCurrentUser={setCurrentUser}></Register> :
                    <div className="content">
                        <div className="title"><h1>Sign In</h1></div>
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
                            <p><div className="notes"><p>{notes}</p></div></p>
                            <p><div className="notes"><p>{userState}</p></div></p>
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
