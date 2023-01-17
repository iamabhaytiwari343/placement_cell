import React from "react";
import SubCard from "./sub-card";
import { semList } from "./semlist";

const Courses = () => (
  <React.Fragment>
    <div className="courses-outer-wrapper">
      <div className="courses">
        <h1>Courses</h1>
        <ul>
          <li>B.Tech.</li>
        </ul>
        <p className="courses-overview">
          The B.Tech in Computer Science, is the flagship program offered by the Department of Computer Science and Engineering. The course offers a unique mix of deep theoretical knowledge supplemented by well-designed sessional courses to hone students for all round competency. The course offers exceptional placement opportunities with recruiters from across the globe recruiting student from the program.
        </p>
        <p className="courses-overview">The Department of Electronics and Communication Engineering is one of the largest departments of the institute having largest student and faculty strength. Due to its modern infrastructure and exposure given to the students, it is one of the elite departments in India.</p>
        <p className="courses-overview">Since its inception in 1955, the Department of Mechanical Engineering has a wide reputation for the quality of teaching and research it offers. It has been awarded top grades for both teaching and research activities from independent and government bodies. The excellent laboratory facilities, modern computer clusters, systematically designed curriculum, and dedicated faculty members make this Department a dynamic place to study.<br />

          Mechanical Engineering Graduates from BIT Mesra are sought after by many prestigious companies. There is also an excellent careers center on campus, which helps the students to get entry into multinational companies.</p>
        <p className="courses-overview">The Department of Electrical & Electronics Engineering is dedicated to the current needs of industry with the flexibility to tune its programmes according to different requirements. Application of new technology in various fields is one of the main focuses in the activities of the department. Department of EEE has recently received grants amounting to Rs. 2.7 Crore from UGC, DST, AICTE,CDAC, TEQIP etc. to strengthen the research facility for the development in design and development of lightning protection system etc. The domain of Smart Grid, Energy Efficient Electrical Motor Drives, Department of EEE has MoUs with University of Padova, Italy and with other Industries.</p>

        <button disabled>Course Overview</button>
      </div>
    </div>
    <div className="course-outer">
      <div className="course-inner">
        {semList.map((val, index) => (
          <SubCard semNum={val} sem={val} ind={index} key={val + index} />
        ))}
      </div>
    </div>

  </React.Fragment>



);

export default Courses;
