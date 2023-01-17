import React from "react";
import Card from "./Card";
import rcjhasir from "../assets/alumni/rcjha.jfif"
import knmsir from "../assets/alumni/knmsir.jfif"
import rklalsir from "../assets/alumni/rklalsir.jpg"
import dssir from "../assets/alumni/dssir.jpg"
import arsir from "../assets/alumni/arsir.jfif"
import avatar from "../assets/team22/avatar.jfif"
import avatar2 from "../assets/team22/avatar2.jfif"

import vikashsir from "../assets/alumni/vikashsir.jfif"
import prafullasir from "../assets/alumni/prafullasir.jpg"
import arbindsir from "../assets/alumni/arbindsir.jpeg"

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={rcjhasir}
                alt="director"
                name="Dr. R.C. Jha"
                isTeacher={false}
                position="Director"
                email="directorbitd@bitmesra.ac.in"
                linkedin="https://www.bitmesra.ac.in/Visit_My_Page?cid=4&deptid=109&i=e6fGoLZ6CSq4jE%2fGGTqA1A%3d%3d"
                islinkedin={true}                
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={knmsir}
                alt="Dr Kamta Nath Mishra"
                name="Dr Kamta Nath Mishra"
                isTeacher={true}
                position="Professor Incharge of Department of Computer Science and Engineering Department"
                email="knmishra@bitmesra.ac.in , mishrakn@yahoo.com"
                phone="+91-9695052989"
                linkedin="https://in.linkedin.com/in/dr-kamta-nath-mishra-2a274a20"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={rklalsir}
                alt="Dr. Rajesh Kumar Lal"
                name="Dr. Rajesh Kumar Lal"
                isTeacher={true}
                position="Professor Incharge of Electronics and Communication Engineering Department"
                email=" rklal@bitmesra.ac.in"
                phone="+91-9431991791"
                linkedin="https://in.linkedin.com/in/drrklal"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={dssir}
                alt="Dr. Deep Shekhar Acharya"
                name="Dr. Deep Shekhar Acharya"
                isTeacher={true}
                position="Professor Incharge of Electrical and Electronics Enginnering Department "
                phone="+91-8986662370"
                email=" dsacharya@bitmesra.ac.in"
                linkedin="https://in.linkedin.com/in/dsacharya"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={arsir}
                alt="Dr. Arbind Kumar"
                name="Dr. Arbind Kumar"
                isTeacher={true}
                position="Professor and Incharge of Mechanical Engineering Department"
                phone="+91-8986662370"
                email="arbindkumar03@bitmesra.ac.in"
                linkedin="https://www.linkedin.com/in/abhishekworks787"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={vikashsir}
                alt="Prof.  Vikash Sharma"
                name="Prof.  Vikash Sharma"
                isTeacher={true}
                position="Training and Placement Officer"
                phone="+91-xxxxxxxxxxxx"
                email="vikash.sharma@bitmesra.ac.in"
                linkedin="https://in.linkedin.com/in/vikash-sharma1965"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={prafullasir}
                alt="Prof. Prafulla Kumar Manoharan"
                name="Prof. Prafulla Kumar Manoharan"
                isTeacher={true}
                position="T&P Department Core Member"
                phone="+91-xxxxxxxxxxx"
                email=" pkmanoharan@bitmesra.ac.in"
                linkedin="https://in.linkedin.com/in/prafulla-manoharan-18a34a71"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={arbindsir}
                alt="Mr. Arbind Kumar Choudhary"
                name="Mr. Arbind Kumar Choudhary"
                isTeacher={false}
                position="Departmental Faculty Representatives"
                phone="+91-xxxxxxxxxx"
                email="arbind.kc@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={avatar}
                alt="Nirmal Nambiar"
                name="Nirmal Nambiar"
                isTeacher={false}
                position="Departmental Faculty Representatives"
                phone="+91-xxxxxxxxxxx"
                linkedin="https://www.linkedin.com/in/nirmal-nambiar-739288197/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={avatar}
                alt="Jasleen Bhatia"
                name="Jasleen Bhatia"
                isTeacher={false}
                position="Departmental Faculty Representatives"
                phone="+91-xxxxxxxxxx"
                email="infobitdeoghar@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={avatar2}
                alt="Shivani Kushwaha"
                name="Shivani Kushwaha"
                isTeacher={false}
                position="Departmental Faculty Representatives"
                phone="+91-9453422900"
                email="infobitdeoghar@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={avatar2}
                alt="Zainab Fatima"
                name="Zainab Fatima"
                isTeacher={false}
                position="MTech Placement Executive"
                phone="+91-8433497963"
                email="infobitdeoghar@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={avatar}
                alt="Gaurav Tripathi"
                name="Gaurav Tripathi"
                isTeacher={false}
                position="Phd Placement Coordinator"
                email="infobitdeoghar@bitmesra.ac.in"
                phone="+91-6280058825"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={avatar2}
                alt="Orunayan Bhattacharya"
                name="Orunayan Bhattacharya"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Coordinator"
                phone="+91-9038686200"
                email="infobitdeoghar@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={avatar}
                alt="Ajay Vikram"
                name="Ajay Vikram"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Executive"
                phone="+91-9019593477"
                email="infobitdeoghar@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={avatar2}
                alt="Aysha Hannah"
                name="Aysha Hannah"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Executive"
                phone="+91-9656482753"
                email="infobitdeoghar@bitmesra.ac.in"
                linkedin="#"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              /> 
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
