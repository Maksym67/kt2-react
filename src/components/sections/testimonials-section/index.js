import React, {Component} from "react";
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "./imgs/1.jpg";
import Image2 from "./imgs/2.jpg";
import Image3 from "./imgs/3.jpg";
import Image4 from "./imgs/4.jpg";

export default class Testimonials extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
      AOS.init({
          once: true,
      });
    }

    render() {
        return (
            <div id="testimonials" className="testimonials">
                <div data-aos="fade-up" data-aos-delay="100" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: '10rem' }}>
                    <h2>Testimonials</h2>
                    <p className="description">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
                <div className="container">
                    <div className="column col-1" data-aos="fade-up">
                        <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        arrows={false}
                        >
                            <div>
                                <div className="slide-text">
                                    <p className="slide-title">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem."</p>
                                    <p className="author">— Rober Kenneth</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-text">
                                    <p className="slide-title">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem."</p>
                                    <p className="author">— Joshua Smith</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-text">
                                    <p className="slide-title">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem."</p>
                                    <p className="author">— Jean Doe</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-text">
                                    <p className="slide-title">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos corrupti, obcaecati repudiandae, animi ad quos. Eius expedita ipsa qui autem."</p>
                                    <p className="author">— Gregg Pollach</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="column col-2" data-aos="fade-up" data-aos-delay="200">
                        <Slider
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={1}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            autoplay={true}
                            autoplaySpeed={5000}
                            pauseOnHover={true}
                            >
                            <div>
                                <img src={Image1}></img>
                            </div>
                            <div>
                                <img src={Image2}></img>
                            </div>
                            <div>
                                <img src={Image3}></img>
                            </div>
                            <div>
                                <img src={Image4}></img>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}