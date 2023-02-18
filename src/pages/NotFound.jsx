import React from 'react'




    
function NotFound() {
	return (
		<div style={{position : 'relative',background : '#f5f7fb',color : '#0e141e', height : '100vh',width : '100vw' }}>
			<div style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
				<h1><span>404</span> | Page Not Found</h1>
			</div>
		</div>
	)
}

export default NotFound;