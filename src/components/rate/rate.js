import { ReactSVG } from "react-svg";
import "./rate.scss";

function Rate({ rate }) {
  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < rate; i++) {
    fullStars.push(<ReactSVG src="/icons/rate.svg" />);
  }

  for (let i = 0; i < 5 - rate; i++) {
    emptyStars.push(<ReactSVG src="/icons/star.svg" />);
  }

  return (
    <div className="rate">
      <div className="rate-stars">
        {fullStars}
        {emptyStars}
      </div>
      <div className="rate-desc">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare."
      </div>
      <div className="rate-user d-flex flex-wrap align-items-center justify-content-between">
        <div className="rate-user-info d-flex align-items-center">
          <div className="rate-user-info-avatar">
            <img src="/images/user1.png" alt="user" loading="lazy" />
          </div>
          <div>
            <span className="rate-user-info-name d-block">Jenny Wilson</span>
            <span className="rate-user-info-job">Agent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rate;
