import React, { useState } from 'react'
import one from './img1.png'
import two from './img2.png'
import three from './img3.png'
import six from './img6.png'
import one1 from './img7.png'
import one2 from './img8.png'
import one3 from './img9.png'
import one6 from './img12.png'
import './Megatab.css'

export default function Megatab() {


    const [show,setshow] =  useState(1);

    return (
        <>
        <h1 className = "exheading">Expolre conversational experience by solution</h1>
        <div className = "megacontainer">
        <div className = "elementor-tabs-wrapper">
        <ul>
            <li>
                <div id = "elementor-tab-title1" className={`elementor-tab-title ${show === 1?'elementor':""}` } onClick={() => setshow(1)}>
                    <div className = {`tab-icon-active ${show === 1?'tab':""}`} id="tab1">
                        <img src={one} id="img1" alt="one" className = {`icon-img ${show === 1?'img-color':""}`}/>
                    </div>
                    <br></br><br></br>
                    <p  className={`subtitle${show ===1?'tit1':""}`}>WhatsApp For Business</p>
                </div>
            </li>
            
            <li>
                <div id="elementor-tab-title2" className={`elementor-tab-title ${show ===2?'elementor':""}` } onClick={() => setshow(2)}>
                    <div className={`tab-icon-active ${show ===2?'tab':""}`} id="tab2">
                        <img src={two}  alt="one" className={`icon-img ${show ===2?'img-color':""}`}/>
                    </div>
                    <br></br><br></br>
                    <p  className={`subtitle${show ===2?'tit1':""}`}>Customer Support</p>
                </div>
            </li>
            
            <li>
                <div id="elementor-tab-title3" className={`elementor-tab-title ${show ===3?'elementor':""}` } onClick={() => setshow(3)}>
                    <div className={`tab-icon-active ${show ===3?'tab':""}`} id="tab3">
                        <img src={three} alt="one" className={`icon-img ${show ===3?'img-color':""}`}/>
                    </div>
                    <br></br><br></br>
                    <p  className={`subtitle${show === 3?'tit1':""}`}>Customer Engagement</p>
                </div>
            </li>
            
            
            
            <li>
                <div id="elementor-tab-title6" className={`elementor-tab-title ${show ===6?'elementor':""}` } onClick={() => setshow(6)}>
                    <div className={`tab-icon-active ${show ===6?'tab':""}`} id="tab6">
                        <img src={six} alt="one" className={`icon-img ${show ===6?'img-color':""}`}/>
                    </div>
                    <br></br><br></br>
                    <p id="tit" className={`subtitle${show ===6?'tit1':""}`}>Digital Advertising</p>
                </div>
            </li>
        </ul>  
            </div>  
         {show ===1?   <div id="one">
                <div className="divclass" id="one">
                    <div className="example img-bg">
                        <img src={one1} alt="sss" />
                        </div>
                        <div className="example" id="oneex">
                            <h2 className="h2new">WhatsApp for Business</h2>
                            <p className="pnew">
                                Send the menu - enter the menu in the catalog of the WhatsApp Business account to allow customers to know what you are selling.
                                Take orders - customers can easily contact you to order a meal and organize delivery in an instant and organized way</p>
                            <a href="##"><p>Learn More</p></a>
                        </div>
                    
                </div>
            </div>:show ===3?
            <div id="two">
                <div className="divclass" id="two">
                   
                        <div className="example" id="oneex">
                            <h2 className="h2new">Customer Engagement</h2>
                            <p className="pnew">Connect, converse, and convert customers, anytime, in any language and grow your enterprise. With AI-powered virtual assistants, you can capture leads, cross-sell and up-sell, aid product discovery, launch-smart promotions, schedule reminders, and much more. Empower your sales and marketing teams to do more!</p>
                            <a href="##"><p>Learn More</p></a>
                        </div>
                        <div className="example img-bg">
                        <img src={one2} alt="sss" />
                        </div>
                    
                </div>
            </div>:show ===2?
            <div id="three">
                <div className="divclass" id="three">
                    <div className="example img-bg">
                        <img src={one3} alt="sss" />
                        </div>
                        <div className="example" id="oneex">
                            <h2 className="h2new">Customer Support</h2>
                            <p className="pnew">We mainly focus on most common problems customers complained about were - 

                               Late deliveries (50%),
                               Wrong order (37%),
                               Cold food or food that was not fresh (36%),
                               Driver needing directions (33%),
                               Food not arriving (26%),
                               Bad attitude of driver (14%).</p>
                            <a href="##"><p>Learn More</p></a>
                        </div>
                   
                </div>
            </div>:
            <div id="six">
                <div className="divclass" id="six">
                    <div className="example img-bg">
                        <img src={one6} alt="sss" />
                        </div>
                        <div className="example" id="oneex">
                            <h2 className="h2new">Digital Advertising</h2>
                            <p className="pnew">AI-powered conversational digital media solutions give brand marketers &amp; digital agencies a new and amplified way to attract and engage consumers, gather precise, and drive substantial outcomes across 30+ channels.</p>
                            <a href="##"><p>Learn More</p></a>
                        </div>
                    
                </div>
            </div>}

      </div>
      </>
    )
}
