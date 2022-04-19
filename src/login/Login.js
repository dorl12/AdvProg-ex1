import React, { useState } from "react";
import loginImg from './loginImg.jpg'
import './style.css';
import { users } from './users.js'
import Register from './register.js'

function Login({ registered, setCurrentUser }) {
    let [register, setRegister] = useState(false);

    const handle = () => {
        var userName = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (users.findIndex((user) => { return user.name == userName && user.pass == password }) !== (-1)) {
            registered(true);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-7">
                    {register ? <Register registered={registered} setCurrentUser={setCurrentUser}></Register> :
                        <div className="content">
                            <div className="form">
                                <div className="form-group">
                                    <label htmlFor="userName">Username</label>
                                    <input type="text" name="username" placeholder="username" id="username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" nameName="password" placeholder="password" id="password" />
                                </div>
                            </div>
                            <div className="footer">
                                <button type="button" className="btn" onClick={handle}>Login</button>
                            </div>
                            <span>Not Registered? <a href="#" className="link-primary" onClick={() => { setRegister(true) }}>Click here</a> to register</span>
                        </div>}
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default Login;

// <div className="base-container">
// <div className="top">
// <div></div>
// </div>
// <div className="buttom"></div>
// <div className="content">
//     <div className="form">
//         <div className="form-group">
//             <label htmlFor="userName">Username</label>
//             <input type="text" name="username" placeholder="username" />
//         </div>
//         <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" name="password" placeholder="password" />
//         </div>
//     </div>
// </div>
// <div className="footer">
//     <button type="button" className="btn" onClick={handle}>Login</button>
// </div>
// </div>