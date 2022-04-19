import React from "react";
import loginImg from "C:\Users\Dor Levi\Desktop\advanced Programming2\ass1\loginImg.svg";

export class Register extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
        );
    }
}