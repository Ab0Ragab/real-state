import { ReactSVG } from "react-svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Headroom from "react-headroom";

import "./header.scss";

function Header() {
  const links = ["Buy", "Rent", "Commercial", "House"];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Headroom>
      <div className="container pt-2">
        <div className="header d-flex align-items-center justify-content-between">
          <div className="header-links d-lg-block d-none">
            <ul className="nav">
              {links.map((link, i) => (
                <li className="nav-item" key={i}>
                  <span className="nav-link">{link}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-logo">
            <ReactSVG src="icons/logo.svg" />
          </div>
          <div className="header-buttons d-md-flex d-none">
            <button
              type="button"
              className="btn btn-lg btn-outline-primary d-flex">
              <ReactSVG src="icons/upload.svg" />
              <span className="ms-2">Upload Property</span>
            </button>
            <button
              type="button"
              className="btn btn-lg btn-primary d-flex ms-3">
              <ReactSVG src="icons/user.svg" />
              <span className="ms-2">Sing in</span>
            </button>
          </div>
          <button
            type="button"
            className="btn btn-light d-flex d-md-none"
            onClick={handleShow}>
            <ReactSVG src="icons/menu.svg" />
          </button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="header-menu-links">
                <ul className="list-group list-group-flush text-center">
                  {links.map((link, i) => (
                    <li className="list-group-item" key={i}>
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="header-menu-buttons d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-lg btn-outline-primary">
                  <ReactSVG src="icons/upload.svg" />
                  <span className="ms-2">Upload Property</span>
                </button>
                <button type="button" className="btn btn-lg btn-primary">
                  <ReactSVG src="icons/user.svg" />
                  <span className="ms-2">Sing in</span>
                </button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </Headroom>
  );
}

export default Header;
