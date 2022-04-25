import React, { useState } from "react";
import './style.css';
import { contacts, data } from '../Chat/hooks/Storage.js'

function Register({ registered, setRegister, setCurrentUser }) {
    let [notes, setNotes] = useState("");
    let [image, setImage] = useState("");
    let [userState, setUserState] = useState("");

    const handle = () => {
        var userName = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var passValidation = document.getElementById("passwordValidation").value;
        var nickName = document.getElementById("nickName").value;
        if (validate(userName, password, passValidation, nickName)) {
            if (contacts.findIndex((user) => { return user.name == userName}) === (-1)) {
                if (image === "") {
                    image = 'default.jpg'
                }
                contacts.push({ name: userName, pass: password, displayName: nickName, img: image });
                data.push({
                    name: userName,
                    contacts: [],
                    info: [{sender: '', chat :[]}]});
                
                setCurrentUser(userName);   
                registered(true);
            }
            setUserState("UserName already exist in the system!" );
        }
    }

    const validate = (userName, password, passValidation, nickName) => {
        let reg = /^[a-zA-Z0-9]+$/i;
        let note = '';
        let test = reg.test(userName);
        if (!test) {
            note += 'invalid username! ';
        }
        test = reg.test(password);
        if (!test) {
            note += 'invalid password! ';
        }
        test = reg.test(nickName);
        if (!test) {
            note += 'invalid nickName! ';
        }
        if (password !== passValidation) {
            note += 'password do not match!';
        }
        setNotes(note);
        return (note === '');
    }

    const uploadPic = (e) => {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            if (fileReader.readyState === 2) setImage(fileReader.result);
        }
        fileReader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div className="content">
            <div className="form-register">
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" name="username" placeholder="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordValidation">Confirm Password</label>
                    <input type="password" name="passwordValidation" placeholder="Confirm Password" id="passwordValidation" />
                </div>
                <div className="form-group">
                    <label htmlFor="nickName">NickName</label>
                    <input type="text" name="nickName" placeholder="nickName" id="nickName" />
                </div>
                <div className="form-group">
                    <label htmlFor="profilePic">profilePic</label>
                    <input type="file" name="profilePic" placeholder="profilePic" id="profilePic" onChange={uploadPic} />
                </div>
            </div>
            <div className="notes"><p>{notes}</p></div>
            <p><div className="notes"><p>{userState}</p></div></p>
            <div className="footer">
                <button type="button" className="submit_button" onClick={handle}>Register</button>
            </div>
            <div className="backToLoginScreen">
                <span>Already Registered? <a href="#" className="link-primary" onClick={() => (setRegister(false))}>Click here</a> to login</span>
            </div>
        </div>
    );
}

export default Register;
