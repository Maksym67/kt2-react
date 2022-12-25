import React from "react";
import Slider from "react-slick";
import "./index.css"
import Image1 from "./imgs/img1.jpg";
import Image2 from "./imgs/img2.jpg";
import Image3 from "./imgs/img3.jpg";
import Image4 from "./imgs/img4.jpg";

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    }
    return(
        <div id="projects" className="projects">
            <div className="section-text">
                <h2 className="section-title">Our Projects</h2>
                <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
            </div>
            <Slider {...settings}>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>BRANDING</span>
                        </div>
                        <img src={Image1}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>ILLUSTRATION</span>
                        </div>
                        <img src={Image2}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>WEB DEVELOPMENT</span>
                        </div>
                        <img src={Image3}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>WEBSITE</span>
                        </div>
                        <img src={Image4}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>BRANDING</span>
                        </div>
                        <img src={Image1}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>ILLUSTRATION</span>
                        </div>
                        <img src={Image2}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>WEB DEVELOPMENT</span>
                        </div>
                        <img src={Image3}></img>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="thumb-text">
                            <h3 className="card-title">Project name here</h3>
                            <span>WEBSITE</span>
                        </div>
                        <img src={Image4}></img>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Projects;