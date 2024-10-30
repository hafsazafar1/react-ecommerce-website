import { Link } from "react-router-dom";
import "../../css/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar px-3 py-4 ">
        <div className="Logo">
          <img
            src={
              "https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg "
            }width="150" 
            alt="Logo"
          />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search for item"></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icons">
          <ul className=" d-flex gap-3">
            <li>
              <i className="fa-solid fa-rotate "></i>
              <Link to="">Compare</Link>
            </li>
            <li>
              <i className="fa-regular fa-heart"></i>
              <Link to="">Whish</Link>
            </li>
            <li>
              <i className="fa fa-shopping-cart"></i>
              <Link to="">Cart</Link>
            </li>
            <li>
              <i className="fa-regular fa-user"></i>
              <Link to="">Account</Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          Deals
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Shop
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">
                  Vendors
                </a>
                </li>
               
                  <li className="nav-item">
                  <a className="nav-link" href="#">
                      Mega menue
                    </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="#">
                     Pages
                    </a>
                  </li>
                 
                  <li className="nav-item">
                  <a className="nav-link" href="#">
                     contact
                    </a>
                  </li>
                
                </ul>
             
          </div>
        </div>
      </nav>
    </>
  );
}
