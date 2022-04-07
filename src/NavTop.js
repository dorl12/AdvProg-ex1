function NavTop() {
    return(
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src='' alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
            Pic+User
        </a>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Exit</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            </div>
        </div>
    </nav>  
    )
}

export default NavTop;