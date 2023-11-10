import { ReactSVG } from "react-svg";
import "./search.scss";

function Search({ icon, placeholder, text }) {
  return (
    <div className="search mt-4">
      <ReactSVG src={icon} className="search-icon" />
      <input type="text" placeholder={placeholder} className="search-input" />
      <button className="btn btn-lg btn-outline-primary search-btn">
        {text}
      </button>
    </div>
  );
}

export default Search;
