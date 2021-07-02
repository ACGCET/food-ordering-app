import React,{useState ,useEffect} from 'react'
import './Service.css'
import Cancel from './img1.svg'


export default function Service() {


    
const [show, setshow] = useState(true)
const onClick = () => setshow(!show)


const [offset, setOffset] = useState(0);

useEffect(() => {
  window.onscroll = () => {
    setOffset(window.pageYOffset)
  }
}, []);

    const image = [
       {
           url: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?cs=srgb&dl=pexels-engin-akyurt-1527603.jpg&fm=jpg",
           text:"Biriyani"
       },
       {
        url:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?cs=srgb&dl=pexels-lisa-fotios-1279330.jpg&fm=jpg",
        text:"Chicken Biriyani"
    },
    {
        url:"https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text:" Mutton Biriyani"
    },

    {
        url:"https://images.pexels.com/photos/1320917/pexels-photo-1320917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text:"Biriyani"
    },
    {
        url:"https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text:"Eggs Biriyani"
    },
    {
        url:"https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text:"Rice"
    },
    {
        url:"https://images.pexels.com/photos/4224311/pexels-photo-4224311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        text:"Hamburger."
    },
    {
        url: "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?cs=srgb&dl=pexels-engin-akyurt-1487511.jpg&fm=jpg",
        text:"Dosai"
    },
        ];
    
    return (
        <>
	<div className = "servicecontainer">
       <h1 className = "servicehead">Our Services</h1>
		<div className = "Card">
        {image.map((x) =>
         {
            return (  
                <div className = "list">
                  <div className = "service-box">
                    <img src={x.url} alt = "img" className = "menuimg"  />
                    <h3 className = "menu">{x.text}</h3>
                   </div>
                </div>	  
           )
        }) }   
		
		</div>

    <div>
       { offset >= 900?
       <> { show === true? 
         <div  className="floatingSubscribeVisible floatingTransition  ">
	        <div className="floating-subscribe-wrapper" id="floating-subscribe">
		       <div className="floating-subscribe-close" onClick={onClick}>
			     <img src={Cancel} alt="Close" className = "closeimg" />
		       </div>
		       <h2 className="heading">TODAY OFFERS</h2>
		       <div className="post-subscription-description">
	             	Buy one chicken Biriyani and get one Chicken Biriyani Free
	           </div>
			   <a href="###">
				 <button className="subscribeBtn">BUY</button>
			   </a>
	     	</div>
         </div>
         :null}
        </> 
         :null}
 
    </div>

	</div>
        </>
    )
}
