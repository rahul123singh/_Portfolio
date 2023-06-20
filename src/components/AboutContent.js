import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from 'react';
import React1 from "../assets/human.png";
import React2 from "../assets/project1.png";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Graphic Designer</h1>
                <h2>"Grasp"</h2>
                <div className="centered-paragraph">
                <p>
                   &gt;  Grasp is an IISc student startup hosting informative sessions on exams, careers, and academic journeys.It also does Global collaborations with prestigious speakers.
                </p>
                <p>&gt; Made some good and interesting notes using graphic illustrations for the students of the grasp to make organic chemistry more interesting.</p>
                </div>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            {/* <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AboutContent;
