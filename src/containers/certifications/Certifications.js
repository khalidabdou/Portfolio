import React, {Component} from 'react';
import './Certifications.css';
import { Fade } from "react-reveal";
import {Projects} from "../../portfolio";

import CertificationCard from '../../components/certificationCard/CertificationCard';

export default function Certifications() {
  return (
    <Fade bottom duration={2000} distance="20px">
    <div className="main" id="certs">
			<h1 className="cert-header-title">My Projects</h1>
      <div className="cert-main-div">
        <div className="cert-text-div">
          {Projects.projects.map( pro => {
						return <CertificationCard project={pro} />;
					})}
        </div>
      </div>
    </div>
    </Fade>
  );
}
