import "./FooterStyles.css"
import { FaGraduationCap, FaPhone, FaMailBulk,FaMapMarkerAlt, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">

                    {/* Loation */}
                    <div className="location">
                        <FaGraduationCap size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Ramaiah Institute Of Technology</p>
                        
                        </div>
                    </div>

                    <div className="marker">
                        <div className="icon-container">
                        <FaMapMarkerAlt size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </div>
                        <div>
                           
                            <p>Bangalore</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            80928-13332</h4>
                    </div>

                    {/* Email */}

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            rahulkrsingh1906@gmail.com</h4>
                    </div>
                </div>





                <div className="right">
                    <h4>About:</h4>
                    <p>This is Rahul Kumar Singh. A passionate Web Developer.</p>
                    <p> A tehnophile guy who loves to explore new things</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/rahul-kumar-singh-614922236/" target="_blank">
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>

                        <a href="https://github.com/rahul123singh" target="_blank">
                        <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>

                        <a href="https://www.instagram.com/rahul.singh2902/" target="_blank">
                            <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        </a>


                    </div>
                </div>

                <div className="right"></div>
            </div>
        </div>
    )
}

export default Footer