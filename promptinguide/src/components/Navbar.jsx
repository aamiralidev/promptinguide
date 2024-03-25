import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg fw-bold bg-white ps-5 pe-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Prompt Guide
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <div className="d-flex justify-content-center w-75">
            <ul className="navbar-nav gap-4 ps-5 ms-5">
              <li className="nav-item nav-bar-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  onClick={() => navigate("/learn")}
                >
                  Learn
                </a>
              </li>
              <li className="nav-item nav-bar-item">
                <a className="nav-link" onClick={() => navigate("/templates")}>
                  Templates
                </a>
              </li>
              <li className="nav-item nav-bar-item">
                <a className="nav-link" onClick={() => navigate("/prompts")}>
                  Search
                </a>
              </li>
              <li className="nav-item nav-bar-item">
                <a className="nav-link" onClick={() => navigate("/dashboard")}>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary">Log In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
