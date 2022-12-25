import React from "react";
import Slider from "react-slick";
import "./index.css"
import Image1 from "./imgs/1.png";
import Image2 from "./imgs/2.png";
import Image3 from "./imgs/3.png";
import Image4 from "./imgs/4.png";
import Image5 from "./imgs/5.png";
import Image6 from "./imgs/6.png";

function Services() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    }
    return(
        <div id="services" className="services">
            <div className="section-text">
                <h2 className="section-title">Services</h2>
                <p className="section-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
            </div>
            <Slider {...settings}>
                <div>
                    <div className="card">
                        <div className="icon-circle">
                            <img src={Image1}></img>
                        </div>
                        <div className="card-title">Branding Design</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div style={{ height: "75vh" }} className="card">
                        <div className="icon-circle">
                            <img src={Image2}></img>
                        </div>
                        <div className="card-title">Wordpress Integration</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="icon-circle">
                            <img src={Image5}></img>
                        </div>
                        <div className="card-title">Web Development</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="icon-circle">
                            <img src={Image6}></img>
                        </div>
                        <div className="card-title">HTML5/CSS3</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="icon-circle">
                            <img src={Image3}></img>
                        </div>
                        <div className="card-title">Web Templates</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p></div>
                    </div>
                <div>
                    <div className="card">
                        <div className="icon-circle">
                            <img src={Image4}></img>
                        </div>
                        <div className="card-title">Creative Design</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Services;