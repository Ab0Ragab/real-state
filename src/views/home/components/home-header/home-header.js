import Search from "../../../../components/search/search";
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
            <Search
              icon="icons/search.svg"
              placeholder="Search City, Adress, or Country"
              text="Search Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
