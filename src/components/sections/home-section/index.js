import React, {Component} from "react";
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "./imgs/img1.jpg";
import Image2 from "./imgs/img2.jpg";
import Image3 from "./imgs/img3.jpg";
import Image4 from "./imgs/img4.jpg";

export default class Home extends Component {
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
            once: false,
        });
      }

    render() {
        return (
            <div id="home" className="home">
                <div className="color-section"></div>
                <div className="container">
                    <div className="column col-1">
                        <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        arrows={false}
                        >
                            <div>
                                <div className="slide-text">
                                    <h1>Welcome</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div>
                                <div className="slide-text">
                                    <h1>High Quality Website Templates</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div>
                                <div className="slide-text">
                                    <h1>We do things right.</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                            <div>
                                <div className="slide-text">
                                    <h1>We Do Awesome Things</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="column col-2">
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
                <div className="row">
                    <div className="col">
                        <h2>Love our works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        <p style={{ marginBottom: '3rem' }}>Aperiam neque id, illum laudantium autem vero quae debitis tempora modi. Ipsa molestias enim in rem et incidunt beatae fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.</p>
                    </div>
                    <div className="col">
                        <div className="absolute-box">
                            <div className="absolute-elem"></div>
                            <img src={Image1}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}