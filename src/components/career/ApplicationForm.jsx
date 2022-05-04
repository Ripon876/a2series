import React,{useState,useRef} from 'react';
import axios from 'axios';
import './Career.css';

function ApplicationForm() {

const [showMsg, setShowMsg] = useState(false);
const openingRef  =  useRef(null);


function handleSubmit(e){
    e.preventDefault();
    var data = new FormData(e.target);
    var opening = openingRef.current.textContent.split("for ")[1];
    data.set("opening",opening);


	const config = {     
	    headers: { 'content-type': 'multipart/form-data' }
	}

	axios.post(`${process.env.REACT_APP_SITE_HOST}/api/career/apply`, data, config)
	    .then(response => {

	    	var inputs = document.querySelectorAll('input');
			inputs.forEach(input => {
			   input.value = '';
			});
	        setShowMsg(true)
	    })
	    .catch(error => {
	        console.log(error);
	    });

	}




	return (
		<div className="applicationForm">
			<h1 className="text-center py-5">Apply Now</h1>
			<div className="container py-4">
				<div className="justify-content-center row pt-4">
					<div className="col-md-6 col-md-6 col-sm-10">
						<div className="applyImg d-flex">
							<img src="../img/apply.svg" alt="Apply Now" className="img-fluid"/>
						</div>
					</div>
					<div className="col-md-6 col-md-6 col-sm-10">
						<div className="applyForm">

							<form  onSubmit={handleSubmit} className="pb-5">
						      {showMsg && <p className='text-success text-center' style={{fontSize:  "21px"}}>Application successfuly submited</p> }	
								<div className="row g-3">
									<div className="col">
									<input type="text" required  className="form-control" name="firstName" placeholder="First name" aria-label="First name" />
									</div>
									<div className="col">
									<input type="text"  className="form-control" name="lastName" placeholder="Last name"   required  />
									</div>
								</div>
								<div className="pt-4">
									<input type="email" placeholder="Email" name="email" className="form-control" required />
								</div>
								<div className="row g-3 pt-4">
									<div className="col">
									<input type="url" className="form-control" name="github" placeholder="Github URL" aria-label="Github URL" required  />
									</div>
									<div className="col">
									<input type="url" className="form-control" name="portfolio" placeholder="Portfolio Link" required  />
									</div>
								</div>
								<div className="mb-3 pt-3">
									<label  className="form-label text-muted">Upload Your Resume*</label>
									<small>
									<label  className="form-label text-muted">(.pdf)</label>
									</small>
									<input type="file" accept=".pdf" name="cv" className="form-control" required />
								</div>
								<div>
								{!showMsg && <label ref={openingRef} className="form-label text-muted">Applying for <strong>{window.location.href.split("?")[1].replace(/_/g," ")} </strong></label> }	
								</div>
								<div className="pt-3 pb-3">
									<button type="submit" className="btn subBtn">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ApplicationForm