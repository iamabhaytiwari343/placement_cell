import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/demo.pdf";
import jnf from "../assets/demo.docx";


const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                BIT
                <br />
                Academic Builduing
                <br />
                Deoghar – 814142
              </p>
              <p>
                <a href="mailto:infobitdeoghar@bitmesra.ac.in ">
                  infobitdeoghar@bitmesra.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col">
              <h2>Links</h2>
              <p>
                <a
                  href="https://internship.aicte-india.org/"
                  target="blank"
                >
                  AICTE Internship
                </a>
              </p>
              <p>
                <a href={brochurePdf} target="blank">
                  Brochure
                </a>
              </p>
              <p>
                <a href={jnf} target="blank">
                  SCO Application form
                </a>
              </p>
              <p>
                <Link to="/courses">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
              </p>
              <p>
                <Link to="/alumni-speaks">Alumni Speaks</Link>
              </p>
              <p>
                <a href="https://internshala.com/">Internshala</a>
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2021. <strong>BIT Mesra Deoghar Campus.</strong> (Developed
          & Managed By -{" "}
          <a href="https://www.linkedin.com/in/abhay-tiwari-22063023b/" target="none">
            Abhay Tiwari
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
