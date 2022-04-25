import React,{useState,useEffect} from 'react'

function Works() {

const [imgLength, setImgLength] = useState(0);
 const totalImg = 3;

useEffect(() => {
	console.log('loaded',imgLength)
}, [imgLength])


	return (
       
		<div className="Works py-4">
			<div className="row justify-content-center">


			 
				<div className="col-lg-4 px-2 pb-3">
					<img onLoad={()=> {setImgLength(imgLength+1)}} src="https://api.site-shot.com/?url=https://google.com/&userkey=IAAIEYKBJANTHZ6IA2EGC7G5XJ" alt="" className='img-fluid' />
				</div>
				<div className="col-lg-4 px-2 pb-3">
					<img onLoad={()=> {setImgLength(imgLength+1)}} src="https://api.site-shot.com/?url=https://google.com/&userkey=IAAIEYKBJANTHZ6IA2EGC7G5XJ" alt="" className='img-fluid' />
				</div>
				<div className="col-lg-4 px-2 pb-3">
					<img onLoad={()=> {setImgLength(imgLength+1)}} src="https://api.site-shot.com/?url=https://google.com/&userkey=IAAIEYKBJANTHZ6IA2EGC7G5XJ" alt="" className='img-fluid' />
				</div>
		
			</div>
		</div>
	)
}

export default Works;