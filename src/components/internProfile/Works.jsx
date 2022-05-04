import React from 'react'

function Works({projects}) {

// console.log(projects)
// // document.getElementsByClassName("btn-primary")[0].click()
	return (
       
		<div className="Works py-4">
			<div className="row justify-content-center">

				{projects?.map((projectUrl) => 

					<div className="col-lg-4 px-2 pb-3">
						<img src={`https://api.site-shot.com/?url=${projectUrl}&userkey=IAAIEYKBJANTHZ6IA2EGC7G5XJ`}  className='img-fluid projectPreview' />
					</div>

				)}

			</div>
		</div>
	)
}

export default Works;