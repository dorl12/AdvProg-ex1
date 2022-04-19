import React from 'react';
function NavTop() {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src='' alt="" width="30" height="24" className="d-inline-block align-text-top"></img>
            Pic+User
        </a>
        <div className="container-fluid">
            <a className="navbar-brand" href="/chat">Chat</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <a className="navbar-brand" href="/">Main Web</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
        </div>
    </nav>  
    )
}

export default NavTop;