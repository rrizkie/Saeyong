/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Modal } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Mail, Phone } from "@material-ui/icons";
import "./modal.css";

const ContactModal = ({ visible, close }) => {
  return (
    <Modal open={visible} onClose={close} aria-labelledby="simple-modal-title">
      <div className="modal-size">
        <h5>Our Contact</h5>
        <div className="container">
          <div className="left-container">
            <div style={{ margin: "0 5px" }}>
              <LocationOnIcon />
            </div>
            <text>
              <strong>Office Location</strong>
              <br />
              Sudirman Sahid Office LG no.6
              <br />
              Jl.Jendral Sudirman no.68
              <br />
              Jakarta Pusat, DKI Jakarta
              <br />
              10220
              <br />
              <br />
              <a
                // eslint-disable-next-line react/jsx-no-target-blank
                target="_blank"
                href="https://www.google.com/maps/search/Sudirman+Sahid+Office+LG+No.+6+Jl.+Jendral+Sudirman+No.+68+Jakarta+Pusat,+DKI+Jakarta+10220/@-6.2105074,106.8167436,17z/data=!3m1!4b1"
              >
                Check on Maps
              </a>
            </text>
          </div>
          <div className="divider-modal"></div>
          <div>
            <div className="left-container">
              <div style={{ margin: "0 5px" }}>
                <Mail />
              </div>
              <text>
                <strong>Email</strong>
                <br />
                info@seayong.co.id
              </text>
            </div>
            <div className="left-container">
              <div style={{ margin: "0 5px" }}>
                <Phone />
              </div>
              <text>
                <strong>Phone</strong>
                <br />
                +62 21-87-83443
              </text>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
