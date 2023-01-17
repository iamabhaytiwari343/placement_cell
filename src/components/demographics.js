import React from "react";
import gender from "../assets/images/SexRatio.png";
import student from "../assets/images/Stydentfaculty.png";
import Strength from "../assets/alumni/140.webp";
import image from "../assets/alumni/background.jpg";
import image2 from "../assets/alumni/bitd.jpg"
import image3 from "../assets/alumni/1.jpg"
import image4 from "../assets/alumni/two.png"

const Demographics = () => {
  return (
    <div className="demo">

      <div className="d-flex">
      {/* <img src={image} className="max-w-full h-50 p-1 bg-white border rounded-lg max-w-sm" alt="college canteen" /> */}
      <img src={image2} className="max-w-full h-50 p-1 bg-white border rounded-lg max-w-sm" alt="college canteen" />
      </div>

    <h1 className='demo-head'>Demographics</h1>
      <h1 style={{ marginTop: "5%",color:'navy' }} className="subheads">Gender Ratio</h1>
      <div className="gender-ratio-outer">
        <div className="gender-ratio-inner">
          <div className="gender-ratio-row">
            <img src={gender} alt="" className="gender" />
            <p style={{fontSize:'18px'}}>
              The institute aims to maintain a diverse culture in terms of
              gender ratio as well. The gender ratio in the college is observed
              as <strong>4 : 1.</strong>
            </p>
          </div>
          <h1 className="subheads">Student-Teacher Ratio</h1>
          <div className="gender-ratio-row">
            <img src={student} alt="" className="gender" />
            <p style={{fontSize:'18px'}}>
              To provide quality education to its students, the institute
              maintains a student-teacher ratio as <strong>10 : 1</strong> so that
              every individual is paid adequate attention.
            </p>
          </div>
          <h1 className="subheads">Final & Pre Final Year Strength</h1>
          <div className="gender-ratio-row" style={{marginBottom:'50px'}}>
            <img  src={Strength}  alt="" className="gender" />
            <p style={{fontSize:'18px'}}>
             BIT Deoghar admitted batch of B. Tech in Information Technology with an intake of 140 students w.e.f. the academic session 2020-21 and admitted batch of B. Tech in Computer Science with an intake of 77 students w.e.f. the academic session 2020-21.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex">
      {/* <img src={image} className="max-w-full h-auto p-1 bg-white border rounded-lg max-w-sm" alt="college canteen" /> */}
      <img src={image3} className="max-w-full h-auto p-1 bg-white border rounded-lg max-w-sm" alt="college canteen" />
      </div>
    </div>
  );
};

export default Demographics;
