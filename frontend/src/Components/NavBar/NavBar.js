import NavButton from "../NavButton/navButton";

const NavBar = () =>{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
              <NavButton path="/Rooms" label={"Registration"} className="nav-link" />
              </li>
              <li class="nav-item">
              <NavButton path="/Login" label={"Login"} className="nav-link" />
              </li>
              <li class="nav-item">
              <NavButton path="/Registration" label={"Registration"} className="nav-link" />
              </li>
              <li class="nav-item">
              <NavButton path="/Registration" label={"Registration"} className="nav-link" />
              </li>
              <li class="nav-item">
              <NavButton path="/Rooms" label={"Rooms"} className="nav-link" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
}

export default NavBar