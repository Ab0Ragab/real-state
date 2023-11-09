import { ReactSVG } from "react-svg";

import "./filter.scss";

function Filter() {
  return (
    <div className="filter d-flex">
      <div className="filter-item d-flex align-items-center p-3">
        <div className="filter-item-label">Filters</div>
        <div className="filter-item-icon">
          <ReactSVG src="icons/filter.svg" />
        </div>
      </div>
      <div className="filter-item d-flex align-items-center p-3">
        <div className="filter-item-type">Sort:</div>
        <div className="filter-item-label text-nowrap">Newest Listed</div>
        <div className="filter-item-icon">
          <ReactSVG src="icons/down-arrow.svg" />
        </div>
      </div>
      <div className="filter-item d-flex align-items-center p-3">
        <div className="filter-item-icon">
          <ReactSVG src="icons/list.svg" />
        </div>
        <div className="filter-item-label">List</div>
      </div>
      <div className="filter-item d-flex align-items-center p-3">
        <div className="filter-item-icon">
          <ReactSVG src="icons/location1.svg" />
        </div>
        <div className="filter-item-label">Map</div>
      </div>
    </div>
  );
}

export default Filter;
