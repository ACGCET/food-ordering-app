import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
       <>

	<div className="cccontainer">
		<h2 className = "conheading">Contact Us</h2>
		<form>
			<div className="row formcon">
				<div className="col-md-6 inputcontact">
					<input type="text" name="" placeholder="First Name" />
				</div>
				<div className="col-md-6  inputcontact">
					<input type="text" name="" placeholder="Last Name" />
				</div>
				<div className="col-md-6 inputcontact">
					<input type="text" name="" placeholder="Email" />
				</div>
				<div className="col-md-6 inputcontact">
					<input type="text" name="" placeholder="Phone" />
				</div>
				<div className="col-md-12 inputcontact">
					<textarea placeholder="Message" />
				</div>
				<div className="col-md-12 text-center submitbtn">
					<input type="submit" name="" value="Submit" />
				</div>
			</div>
		</form>
	</div>

       </>
    )
}
