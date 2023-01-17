import React from "react";

import Rounikprashar from "../assets/alumni/Rounik Prashar.jfif";
import avatar from "../assets/alumni/avatar.jfif";
import avatar2 from "../assets/alumni/avatar2.jfif";

const AlumniCard = (props) => {
  return (
    <React.Fragment>
      <figure className="snip1559">
        <div className="profile-image">
          <img src={props.img} alt={props.alt} />
        </div>
        <figcaption>
          <h3>{props.name}</h3>
          <p style={{ margin: "0 5px" }}>"{props.message}"</p>
          <p className="contact-detail">
            <strong>Placed At:</strong> {props.company}
          </p>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

const card = (props) => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">Alumni Speaks</h1>
          
<button type="button" class="btn btn-info text-dark "><a href="https://alumni.bitmesra.ac.in/">Visit alumni portal</a></button>



          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={Rounikprashar}
                alt="Rounik Prashar"
                name="Rounik Prashar"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
                company="Google"
              />
              <AlumniCard
                img={avatar}
                alt="Suryansh Tiwari"
                name="Suryansh Tiwari"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
              <AlumniCard
                img={avatar}
                alt="Devanshoo Udhani"
                name="Devanshoo Udhani"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={avatar}
                alt="Tarun Singhal"
                name="Tarun Singhal"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
              <AlumniCard
                img={avatar2}
                alt="Nishtha Sharma"
                name="Nishtha Sharma"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
              <AlumniCard
                img={avatar2}
                alt="Radhika Chandak"
                name="Radhika Chandak"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={avatar}
                alt="Shubham Upadhyay"
                name="Shubham Upadhyay"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
              <AlumniCard
                img={avatar}
                alt="Sahil Garg"
                name="Sahil Garg"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
              <AlumniCard
                img={avatar}
                alt="Nishant Malik"
                name="Nishant Malik"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={avatar}
                alt="Akshat Jain"
                name="Akshat Jain"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
              <AlumniCard
                img={avatar}
                alt="Shivansh Pandey"
                name="Shivansh Pandey"
                message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor."
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default card;
