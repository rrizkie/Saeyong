import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";
import logo from "./assets/logo.png";
import saeyong from "./assets/Saeyong.png";
import about from "./assets/About.jpg";
import proactive from "./assets/Proactive.png";
import improve from "./assets/Improve.png";
import solution from "./assets/Solutions.png";
import discuss from "./assets/Discuss.jpg";
import kurniawan from "./assets/Kurniawan.jpg";
import iswanto from "./assets/Iswanto.jpg";
import ramadi from "./assets/Ramadi.jpg";
import "./app.css";
import ContactModal from "./modal";

const App = () => {
  const [isVisible, setIsvisible] = useState(false);

  return (
    <div className="root">
      <div className="navbar">
        <div style={{ marginLeft: "25px" }}>
          <img src={logo} alt="logo" width="210" height="60" />
        </div>
        <div
          style={{
            marginRight: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className="menu">
            <li className="list">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="#banner"
              >
                Home
              </a>
            </li>
            <li className="divider">|</li>
            <li className="list">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="#team"
              >
                Our Team
              </a>
            </li>
            <li className="divider">|</li>
            <li className="list" onClick={() => setIsvisible(true)}>
              Contact
            </li>
          </ul>
        </div>
      </div>

      <div id="banner" className="banner"></div>

      <div className="text">
        <Typography className="text-1">
          National Company
          <br />
          with Global Quality
        </Typography>
        <Typography className="text-2">
          We provice excellent service on supply chain <br />
          management in oil and gas industry
        </Typography>
        <button className="button" onClick={() => setIsvisible(true)}>
          Get to Know Us
        </button>
      </div>

      <ContactModal visible={isVisible} close={() => setIsvisible(false)} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div id="about" className="box">
          <div className="content-container">
            <div>
              <img src={about} alt="about" className="box-image" />
            </div>
            <div
              style={{
                marginLeft: "15px",
                marginBottom: "10px",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <h5 className="title">About Us</h5>
              </div>
              <Typography className="vision">
                <strong>Vision:</strong>
                <br />
                "National Company with Global Quality"
              </Typography>
              <div className-="text-container">
                <text className="about-text">
                  PT Saeyong Magna Utama is a national company engaged in supply
                  chain management in the energy sector, especially oil and gas
                  from upstream, midstream, to downstream.
                  <br /> <br /> We provide excellent services, operations and
                  maintenance, procurements, logistics, and chemical. We are
                  comitted to provide services in safe, innovative, and
                  sustainable solutions to oil and gas industry challenges.
                  <br /> <br />
                  We are very competent and comply on national rules and
                  regulations in Indonesia to such extent so that we can support
                  partners work professionally in the industry to provide
                  excellent services for the clients. We continously building
                  networks and collaborations to speed up the procurement
                  process by eliminating waste and generating new ideas so that
                  we can produced material and service efficiently.
                  <br /> <br />
                  PT Saeyong Magna Utama is highly commited to health, safety,
                  security, and environmental. We always seeks expanding our
                  business to deliver fully integrated services and projects
                  that add value for our clients, people, and the industry.
                </text>
              </div>
            </div>
          </div>
        </div>

        <div className="box-2">
          <div className="box-container">
            <div
              style={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <h5 className="title">Corporate Value</h5>
            </div>
            <div className="value-container">
              <div className="value-content">
                <img src={proactive} alt="proactive" />
                <div>
                  <button>Proactive</button>
                  <text>Always active proposing solutions for customers.</text>
                </div>
              </div>

              <div className="value-content">
                <img src={improve} alt="proactive" />
                <div>
                  <button>Improve</button>
                  <text>
                    Continously improvement and accept challenges from
                    customers.
                  </text>
                </div>
              </div>

              <div className="value-content">
                <img src={solution} alt="proactive" />
                <div>
                  <button>Solution</button>
                  <text>Combat customers problem for solutions.</text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-3">
          <div className="box-3-container">
            <div className="mission-container">
              <div
                style={{
                  display: "flex",
                  textAlign: "left",
                  marginLeft: "28.15px",
                }}
                className="text-mission-container"
              >
                <h5 className="title">Our Missions</h5>
              </div>
              <ol className="mission-list">
                <li>
                  Making the supply chain scheme in the industry to be more
                  efficient.
                </li>
                <li>
                  Proactive provide solutions to satisfy our customers and the
                  products.
                </li>
                <li>
                  Bring our sophisticated technology and supply chain management
                  expertise with the commitment to helath, safety, and
                  environment.
                </li>
                <li>Maintain integrity and professionalism at work.</li>
                <li>
                  Establish harmonious and mutually beneﬁcial relationships with
                  customers, partners, and other stakeholder.
                </li>
              </ol>
            </div>
            <img src={discuss} alt="mission" />
          </div>
        </div>

        <div id="team" className="box-4">
          <div>
            <div
              style={{
                display: "flex",
                textAlign: "left",
                marginLeft: "31.15px",
              }}
            >
              <h5 className="title">Our Team</h5>
            </div>
            <div className="box-4-container">
              <div className="team-text">
                Our team is consist of people that have experience and
                networking in oil and gas industry. We combine a vary of
                expertise focused on oil and gas industry to deliver the best
                services to our partners and customers.
              </div>
              <div className="team-container">
                <div className="team-content">
                  <img src={kurniawan} alt="kurniawan" />
                  <text>
                    <strong>Kurniawan Junaedi</strong>
                    <br />
                    Direktur Utama
                  </text>
                </div>

                <div className="team-content">
                  <img src={iswanto} alt="iswanto" />
                  <text>
                    <strong>Iswanto Jasman</strong>
                    <br />
                    Direktur
                  </text>
                </div>

                <div className="team-content">
                  <img src={ramadi} alt="ramadi" />
                  <text>
                    <strong>Ramadi Bela</strong>
                    <br />
                    Komisaris
                  </text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="info">
            <img src={saeyong} alt="logo" />
            <div>
              <text
                style={{
                  width: "243px",
                  fontWeight: "600",
                }}
              >
                Jakarta
              </text>
              <br />
              <br />
              <text>
                Sudirman Office
                <br />
                Jl.Jendral Sudirman no.68
                <br />
                Jakarta Pusat, DKI Jakarta
                <br />
                10220
              </text>
            </div>
            <div className="contact">
              <div>
                <Mail />
                <text>info@saeyong.co.id</text>
              </div>

              <div>
                <Phone />
                <text>+62 21-827-83443</text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright Saeyong 2021</div>
    </div>
  );
};

export default App;
