import React, { useState, useEffect } from "react";
import { Markup } from "react-render-markup";
import axios from "axios";
import { Fade } from "react-reveal";
import "./About.css";

function About() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_SITE_HOST}/api/about`).then(
			(data) => {
				setData(data.data);
				console.log(data.data?.long_descrition);
			}
		);
	}, []);

	return (
		<Fade>
			<div className="about" id="about">
				<div className="aboutHeader text-center">
					<h1 className="sectionTitle bold">
						{data?.title ? data.title : "About"}
					</h1>
					<p className="text-muted sectionPara">
						{data?.short_description
							? data.short_description
							: ""}
					</p>
				</div>
				<div className="aboutContent pt-5">
					<div className="container">
						<div className="justify-content-center row">
							<div className="col-lg-6 text-center">
								<div className="d-flex h-100">
									<img
										src={
											data?.img &&
											data.img
										}
										className="img-fluid"
										alt=""
									/>
								</div>
							</div>
							<div className="col-lg-6 pt-5">
								<div className="aboutInfo">
									<h1>Hi!,</h1>
									<p><Markup markup={data?.long_descrition ? data.long_descrition.substr(0,data?.long_descrition.lastIndexOf("<p")) : ""} /></p>
									{/*<p>
										<Markup
											markup={
												data?.long_descrition
													? data.long_descrition
													: ""
											}
										/>
									</p>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default About;
