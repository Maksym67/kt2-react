import React from "react";
import Slider from "react-slick";
import "./index.css"

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
                        <div className="icon-circle"></div>
                        <div className="card-title">Branding Design</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="icon-circle"></div>
                        <div className="card-title">Wordpress Integration</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="icon-circle"></div>
                        <div className="card-title">Web Development</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="icon-circle"></div>
                        <div className="card-title">HTML5/CSS3</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div>
                    <div className="card"><div className="icon-circle"></div>
                        <div className="card-title">Web Templates</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p></div>
                </div>
                <div>
                    <div className="card">
                    <div className="icon-circle"></div>
                        <div className="card-title">Creative Design</div>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Services;