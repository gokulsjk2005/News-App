import React from "react";

const Header = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg p-3 bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand navbarBrand text-white fs-1" href="#">News App</a>
    <button className="navbar-toggler" style={{position:"absolute",top:18,right:18}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{cursor: "pointer"}} onClick={() => setCategory("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{cursor: "pointer"}} onClick={() => setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{cursor: "pointer"}} onClick={() => setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{cursor: "pointer"}} onClick={() => setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{cursor: "pointer"}} onClick={() => setCategory("science")}>Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" style={{cursor: "pointer"}} onClick={() => setCategory("technology")}>Technology</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
export default Header;
