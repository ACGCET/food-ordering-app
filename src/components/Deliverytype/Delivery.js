import React, { useState } from 'react'
import './Delivery.css'
import one from './img1.png'
import three from './img3.png'
import two from './img2.png'

export default function Delivery() {

    const [show,setshow] =  useState(1);

    return (
        <>
        <div className = "decontainer">
            <div className="multichannell-con">
                <div className="sl-pce-lft">
                    <div className="imgs">
                      {show ===1?<div><img id="sale1"   src={one} alt = "img"/></div>:
                        show ===2?<div><img id="sale2"  src={two}  alt = "img"/></div>:
                        show ===3?<div><img id="sale3"  src={three}  alt = "img"/></div>:
                        null}
                    </div>
                </div>
                <div className="sl-pce-rit">
					<div className="slid-lineanim">
						<ul className="slt-list">
							<li onClick={() => setshow(1)}>
													
								<h3>Conduct sales  and wait for order</h3>
							    <p>Conduct presentations and meetings  within myteam cooks. Organize cooks, make best tast of foods and list them in site.</p>				
							</li>
							<li onClick={() => setshow(2)}>
								<h3>Stay ahead of the numbers</h3>
								<p>Never lose track of sales and performance metrics, even while you are away. From dedicated mobile apps, to blended dashboards, our powerful AI tools ensure you are always ahead of the curve.</p>
							</li>
							<li onClick={() => setshow(3)}>
								<h3>Collaborate with your </h3>
								<p>Collaborate with your team through common feeds. Share insights, answer each other's questions, and send lead or deal updates to keep everyone on the same page.</p>
							</li>
						</ul>
					<span className={`active_line ${show===1?'first':show===2?'second':'third'}`}>&nbsp;</span>
					</div>
				</div>	
            </div>
            </div>
        </>
    )
}
