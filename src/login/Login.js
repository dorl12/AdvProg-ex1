import React, { useRef, useState } from "react";
 import loginImg from './loginImg.jpg'
 import './style.css';
 import { users } from '../users.js'

 function Login(){
    const [userList, setUserList] = useState(users);
     const handle = ()=> {
            var userName = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var loginfo = {name : userName, pass : password};
            setUserList([...userList, loginfo]);
            console.log(userList);
           // console.log(userName);
            //console.log(password);
     }
     return (
         <div className="container">
             <div className="row">
                 <div className="col">
                 </div>
                 <div className="col-4">
                     <div className="content">
                     <div className="image">
                     <img src={loginImg}></img>
                     </div>
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
                         <span>Not Registered? <a href="#" className="link-primary" onClick={handle}>Click here</a> to register</span>
                     </div>
                 </div>
                 <div className="col">
                 </div>
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