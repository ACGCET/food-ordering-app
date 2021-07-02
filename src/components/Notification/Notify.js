import React, { useState } from 'react'
import './Notify.css'

export default function Notify() {

    const [show, setshow] = useState(true)
    const onClick = () => setshow(false)

    return (
       <>
           
     {show===true?
     <div className="banner-notification" id="banner">
		 <p className = "notifytext"> <span className="tag tag-new">NEW OFFERS</span>&nbsp;When you come with your family and friends, extra 10% discount.&nbsp;
         <span className="cancel" onClick={onClick}>
         <svg className="octicon octicon-x issues-reset-query-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" ><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
         </span>
         </p>
     </div>
     :null}
        </>
    )
}
