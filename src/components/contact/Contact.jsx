import React,{useState}  from 'react';
import axios from 'axios';
import './Contact.css';


function Contact() {
var initialData ={
		firstName : '',
		lastName : '',
		email : '',
		msg : '',
	    isError: {
		    firstName : '',
			lastName : '',
			email : '',
			msg : '',
	        }
        }



  const [data, setData] = useState(initialData);
  const [msg, setMsg] = useState('');
  const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
  var  isError  = data.isError;



const checkForm = (data) => {

    var errKey;
	for (const key in data) {

           var newData
           if(typeof data[key] !== 'object'  && data[key] === '' ){
					errKey = key;
				  	isError[key] = "Required";
           }
       
		}  
		for(const key in data.isError){
			if(data.isError[key].length > 0){
				errKey = key;
			}
		}
 
   	var newData = {...data};
	newData.isError = isError;
    setData(newData)
 
    return errKey ?  false :  true;

}






function handleSubmit(e){

 e.preventDefault();

    if (checkForm(data)) {
        console.log("valid");



console.log(data)

    var {isError,...formData} = data;
    axios.post(`${process.env.REACT_APP_SITE_HOST}/api/contact`,formData)
    .then((res) => {
    	// console.log(res.data)

  if(res.status === 200 && res.data.success === true){
  	setMsg(res.data.msg);
  	setData(initialData)
  }

    })




    } else {
        console.log("Form is invalid!");
    }
}




function handleChange(e){
e.preventDefault();
        const { name, value } = e.target;
        let isError = data.isError;
        switch (name) {
            case "firstName":
                isError[name] =
                    value.length < 2 ? "Atleast 2 characaters required" : "";

                break;
            case "lastName":
                isError[name] =
                    value.length < 4 ? "Atleast 4 characaters required" : "";

                break;
            case "email":

                isError[name] = regExp.test(value)
                    ? ""
                    : "Email address is invalid";

                break;
            case "msg":

                isError[name] =
                    value.length < 50 ? "Atleast 50 characaters required" : "";

                break;
            default:
                break;


}
	var newData = {...data};
	newData.isError = isError;
	newData[name] = value;
    setData(newData)

}





	return (
		<div className="contact" id="contact">
			<div className="contactHeader text-center pt-4">
				<h1 className="sectionTitle bold">Contact Us</h1>
				<p className="text-muted sectionPara">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
			</div>
			<div className="contactContent pb-5">
				<div className="container">
					<div className="row justify-content-center">

					   <div className="msg text-center text-success">
					   	<p className="m-0">{msg && msg}</p>
					   </div>
						<div className="col-lg-7 col-md-7 col-sm-10">
						<form className="contactForm" onSubmit={handleSubmit}>
							<div className="form-group d-flex py-2" style={{gap : "20px"}} >
							<div className='w-50'>
							    <label className='p-2' htmlFor="firstName">First Name</label>
							    <input type="text" className="form-control" value={data.firstName}  name="firstName" id="firstName" placeholder="John" onChange={handleChange}/>
							    
                         {isError.firstName && <span className="d-block invalid-feedback">{isError.firstName}</span>}
                    
					</div>
							<div className='w-50'>
							    <label className='p-2' htmlFor="lastName">Last Name</label>
							    <input type="text" className="form-control" id="lastName" value={data.lastName}  name="lastName" placeholder="Doe" onChange={handleChange}/>
							     {isError.lastName && <span className="d-block invalid-feedback">{isError.lastName}</span>}
							</div>
						
							</div>
						    <div className="form-group py-2">
							    <label className='p-2' htmlFor="email">Email</label> 
							    <input type="email"  className="form-control" name="email" value={data.email} id="email" placeholder="johndoe123@gmail.com" onChange={handleChange}/>
				        {isError.email && <span className="d-block invalid-feedback">{isError.email}</span>}
		  
						    </div>
						    <div className="form-group pb-4">
							   <label className='p-2'  htmlFor="message">Message</label>
    							<textarea className="form-control" id="message" rows="7"  placeholder="write your message" value={data.msg}  onChange={handleChange} name="msg" ></textarea>
    							{isError.msg && <span className="d-block invalid-feedback">{isError.msg}</span>}
						    </div>
						    <div className="text-center">
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

export default Contact;