import React from "react";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "./WorkAndEducation.css";

export const WorkAndEducation = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - present"
        iconStyle={{ background: "#4570e0", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Software Developer Intern @Copart
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
        <p>
          Front End Development, User Experience, Visual Design, Project
          Management, Team Worker
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - present"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          The University of Texas at Dallas
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
        <p>
          Graduate Student pursuing Masters degree in Computer Science Major{" "}
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2018"
        iconStyle={{ background: "#4570e0", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Senior Software Engineer @Capgemini
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
        <p>
          Developed Web Services using Spring Framework and User Interfaces
          using ReactJS
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2013 - 2017"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          National Institute of Technology Calicut
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Kerala, India</h4>
        <p>Under Graduate Student</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};
