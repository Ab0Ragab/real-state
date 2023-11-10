import { ReactSVG } from "react-svg";

import "./footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <ReactSVG className="footer-logo" src="icons/logo.svg" />
              <div className="footer-info">
                Find your dream house and invest in a beautiful future for your
                family
              </div>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <ReactSVG
                    className="footer-contact-item-icon"
                    src="icons/phone.svg"
                  />
                  <span className="footer-contact-item-text">026886982629</span>
                </div>
                <div className="footer-contact-item">
                  <ReactSVG
                    className="footer-contact-item-icon"
                    src="icons/mail.svg"
                  />
                  <span className="footer-contact-item-text">
                    rumahan@hotmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="footer-title text-secondary">Information</h6>
              <p>
                <a href="#!" className="footer-link">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Our Apart
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Customer Service
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="footer-title text-secondary">Our Product</h6>
              <p>
                <a href="#!" className="footer-link">
                  Furniture
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Real Estates
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Other Home
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="footer-title text-secondary">Help Center</h6>
              <p>
                <a href="#!" className="footer-link">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Terms & Condition
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Legal Support
                </a>
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="footer-title text-secondary">Social Media</h6>
              <p>
                <a href="#!" className="footer-link">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Facebook
                </a>
              </p>
              <p>
                <a href="#!" className="footer-link">
                  Youtube
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-copy-right">
        Copyright {year} All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
