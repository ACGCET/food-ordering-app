import React from 'react'
import './About.css'

export default function About() {
    return (
      <>
	<div className = "aboutcontainer">
        <h1 className = "abheading">About Us</h1>
		<div className = "content">
	     	<div className = "aboutimg">
					<img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-1307698.jpg&fm=jpg" alt="about pic" className ="imgone"/>
			</div>
			<div className = "aboutdetails">	
				<p>Since our modest beginnings in 2005 with a little space in Toronto’s stylish Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food. In contrast to other Indian eateries, 
				 ‘Organization Name’ was made with the explicit expectation to appear as something else.</p>
			</div>
		</div>
	</div>


      </>
    )
}
