import React from 'react';
import Benefit from './Benefit';
import './WhoWeAre.css';

function WhoWeAre() {
	return (
		<div className="whoWeAre">
			<div className="whoWeAreHeader text-center pt-4">
				<h1 className="sectionTitle display-4  bold">Who We Are</h1>
				<p className="sectionPara w-75 m-auto py-2">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit nit amet ligula. bul ultrices  Donec velit nit amet ligula.Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
			</div>
			<div className="container pt-5">
				<div className="ourQualities py-5">
				<h2 className="text-center">BENEFITS OF WORKING WITH US</h2>
					<div className="row">
						<Benefit title="Kick Start" imgSrc="./img/kickstart.svg" text="Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
						<Benefit title="Top Quality Engineers" imgSrc="./img/engineer.svg" text="Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
						<Benefit title="End to End Management" imgSrc="./img/managment.svg" text="Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
						<Benefit title="Operational Efficiency" imgSrc="./img/setting.svg" text="Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhoWeAre;