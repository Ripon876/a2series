import React from 'react';
import './Career.css';

function ApplicationForm() {
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
							<form action="" className="pb-5">
								<div className="row g-3 pt-5">
									<div className="col">
									<input type="text" className="form-control" placeholder="First name" aria-label="First name" />
									</div>
									<div className="col">
									<input type="text" className="form-control" placeholder="Last name*" aria-label="Last name" required="" />
									</div>
								</div>
								<div className="pt-4">
									<input type="email" placeholder="Email*" className="form-control" required="" />
								</div>
								<div className="row g-3 pt-4">
									<div className="col">
									<input type="text" className="form-control" placeholder="Github URL*" aria-label="Github URL" required="" />
									</div>
									<div className="col">
									<input type="text" className="form-control" placeholder="Portfolio Link" aria-label="Last name" />
									</div>
								</div>
								<div className="mb-3 pt-3">
									<label for="formGroupExampleInput" className="form-label text-muted">Upload Your Resume*</label>
									<small>
									<label for="formGroupExampleInput" className="form-label text-muted">(.pdf .doc)</label>
									</small>
									<input type="file" accept=".pdf, .doc" className="form-control" />
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