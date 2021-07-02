import React,{useState} from 'react'
import { GoThreeBars } from 'react-icons/go';
import {AiOutlineClose } from 'react-icons/ai'
import './Navbar.css'

export default function Navbar() {

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

        //hide mobile nav
        const openNav= () =>
        {
            setMobileNavOpen(false)
        }
    
        //show mobile nav
        const closeNav = () => 
        {
            setMobileNavOpen(true)
        }

    return (
        <>

            <div className = "con">
                <div className = "Logo">
                  <p className = "logo">LOGO</p>
                </div>
                    <div className = "list"> 
                        <ul className = "ul-nav">
                            <li><a href = "##">Product</a></li>
                            <li><a href = "##">Princing</a></li>
                            <li><a href = "##">Food Type</a></li>
                            <li><a href = "##">Branches</a></li>
                        </ul>
                      <div onClick = {closeNav}><GoThreeBars color = "white" className="bar"/></div>
                    </div>
                </div>
                <div className = {isMobileNavOpen === true ?"overlay show" : "overlay hide"} id="overlay">
                    <div className ="closebtnc" onClick = {openNav}><AiOutlineClose /></div>
                        <div className = "overlayContent">
                            <ul className = "overul">
                              <li className = "overli">Product</li>
                              <li className = "overli">Princing</li>
                              <li  className = "overli">Downlaod</li>
                              <li className = "overli">Topice</li>
                            </ul>
                        </div>
                </div>
                
        </>
    )
}
