import Image from "../image/image";

import { ReactSVG } from "react-svg";

import "./card.scss";

function Card({ image }) {
  return (
    <div className="card">
      <div className="card-header">
        <Image image={image} ratio={375 / 524} alt="house" />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <span className="card-body-price">$ 220,00</span>
            <span className="card-body-time">per month</span>
          </div>
          <div className="card-body-react">
            <ReactSVG src="icons/heart.svg" />
          </div>
        </div>
        <div className="card-body-title">
          <span>3 bed semi-detached house for sale</span>
        </div>
        <div className="card-body-location d-flex align-items-center">
          <ReactSVG src="icons/location.svg" />
          <span>Kenmure Road, London E8</span>
        </div>
        <div className="card-body-features d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <ReactSVG src="icons/bed.svg" />
            <span>2 Bed</span>
          </div>
          <div className="d-flex align-items-center">
            <ReactSVG src="icons/path.svg" />
            <span>2 Bath</span>
          </div>
          <div className="d-flex align-items-center">
            <ReactSVG src="icons/table.svg" />
            <span>2 Dining</span>
          </div>
          <div className="d-flex align-items-center">
            <ReactSVG src="icons/Intersect.svg" />
            <span>726sqft</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-footer-user d-flex flex-wrap align-items-center justify-content-between">
          <div className="card-footer-user-info d-flex align-items-center">
            <div className="card-footer-user-info-avatar">
              <img src="/images/user1.png" alt="user" loading="lazy" />
            </div>
            <div>
              <span className="card-footer-user-info-name d-block">
                Jenny Wilson
              </span>
              <span className="card-footer-user-info-job">Agent</span>
            </div>
          </div>
          <div className="card-footer-user-contact d-flex align-items-center">
            <ReactSVG src="icons/mobile.svg" />
            <ReactSVG src="icons/mail1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
