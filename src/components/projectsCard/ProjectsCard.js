import React, { Component} from 'react';
import "./ProjectsCardi.css";
import {Fade} from 'react-reveal';

class CertificationCard extends Component {
    render(){
        const project = this.props.project;
        return (
			<Fade bottom duration={1000} distance="20px">
					<div className="cert-card">
						<div className="content">
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								<div className="content-overlay"></div>
									<div className="cert-header " style={{ backgroundColor: project.color_code}}>
										<img
											className="cert-body-image"
											src={project.picture}
											alt={""}
										/>
									</div>
								<div className="content-details fadeIn-top">
									<h3 className="content-title">{project.title}</h3>
								</div>
							</a>
						</div>
						<div className="cert-body">
							<h2 className="cert-body-title">{project.title}</h2>
							<h3 className="cert-body-subtitle">{project.subtitle}</h3>
						</div>
					</div>
			</Fade>
				);
    }
}

export default CertificationCard;