import Image from "../image/image";

import { ReactSVG } from "react-svg";

import "./secondary-card.scss";

function SecondaryCard({ image }) {
  return (
    <div className="secondary-card">
      <div className="secondary-card-header">
        <Image image={image} ratio={375 / 524} alt="house" />
      </div>
      <div className="secondary-card-body">
        <div className="secondary-card-body-header">
          <div className="secondary-card-body-category">Category</div>
          <div className="secondary-card-body-time">5 min read</div>
        </div>
        <div className="secondary-card-body-title">
          <span>Blog title heading will go here</span>
        </div>
        <div className="secondary-card-body-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </div>
        <div className="secondary-card-body-btn">
          <span>Read more</span>
          <ReactSVG src="icons/more.svg" />
        </div>
      </div>
    </div>
  );
}

export default SecondaryCard;
