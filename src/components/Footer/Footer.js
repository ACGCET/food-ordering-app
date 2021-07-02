import React from 'react'
import  './Footer.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer () {
    return (
        <div className = "confooter">
        <div className="footerWrapper">
            <div className="rowq">
                <div className="column1">
                    <div className = "aa">
                    <ul>
                        <li>About  Us</li>
                        <li>Delivery Information</li>
                        <li>Foods Menu</li>
                        <li>Order Status</li>
                    </ul>
                    </div>
                </div>
                <div className="column1">
                    <div className="socialWrapper">
                        <ul>
                            <li className="brandName"><h1>LOGO</h1></li>
                            <li>Stay in touch with us</li>
                            <li className="socialIcons">
                                <span><AiOutlineFacebook  color ="white"/></span>
                                <span><AiOutlineInstagram color ="white"/></span>
                                <span><AiOutlineYoutube color ="white"/></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column1">
                    <ul>
                        <li>
                            <div>Our Corporate Office</div>
                            <div>No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.</div>
                        </li>
                        <li>
                            <div><span className="icons"><HiOutlineMail color = "white"/></span>sales@madeup.com</div>
                            <div><span className="icons"><HiOutlinePhone color = "white"/></span>044 9999 9999</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}