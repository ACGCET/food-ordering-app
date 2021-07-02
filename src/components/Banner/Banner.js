import React,{useState} from 'react';
import './Banner.css';

export default function Banner() {

    const [show, setshow] = useState(true)
    const onClick = () => setshow(!show)

    return (
        <>
          <div id="home" className="banner" >
	          <div className="container">
		         <h1>All hard work and soft work only for food</h1>
		         <p>It's not the load that breaks you down, it's the way you carry it</p>
	          </div>
              <div>
             {show === true?
             <span className="show-links-btn"  id="small" onClick={onClick}>&nbsp;</span>
             :null
             }
             { show === false?
             <div className="quick-connect-links"  id="container" onClick={onClick}>
               <span class="hide-links-btn">&nbsp;</span> 
               <h4>Next Steps</h4> 
               <ul>
                 <li><a href="###">Choose Food </a></li>
                 <li><a href="###">Place Order</a></li>
                 <li><a href="###">Payment Method</a></li>
               </ul> 
             </div>
             :null}
        </div>
          </div>
        </>
    )
}
