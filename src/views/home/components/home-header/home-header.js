import { ReactSVG } from "react-svg";

import "./home-header.scss";

function HomeHeader() {
  return (
    <div className="home-header d-flex justify-content-center align-items-center text-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-7 col-md-9 col-12">
            <h1 className="home-header-title">
              Build Grow And Manage Your Brand
            </h1>
            <div className="home-header-search mt-4">
              <ReactSVG
                src="icons/search.svg"
                className="home-header-search-icon"
              />
              <input
                type="text"
                placeholder="Search City, Adress, or Country"
                className="home-header-search-input form-control"
              />
              <button className="btn btn-lg btn-outline-primary home-header-search-btn">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
