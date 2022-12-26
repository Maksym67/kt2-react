import React, {Component} from "react";
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import Image1 from "./imgs/img1.jpg";
import Image2 from "./imgs/img2.jpg";
import Image3 from "./imgs/img3.jpg";
import Image4 from "./imgs/img4.jpg";
import Ico1 from "./imgs/1.png";
import Ico2 from "./imgs/2.png";
import Ico3 from "./imgs/3.png";
import Ico4 from "./imgs/4.png";
import Tick from "./imgs/tick.png";
import ChatBox from "./imgs/chat.png"

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
            once: true,
        });
      }

    render() {
        return (
            <div id="home" className="home">
                <div className="color-section"></div>
                <div className="container">
                    <div className="column col-1" data-aos="fade-up">
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
                        <div className="nav-btns">
                            <a className="slick-next" href="#">123</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col" data-aos="fade-up">
                        <h2>Love our works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        <p style={{ marginBottom: '3rem' }}>Aperiam neque id, illum laudantium autem vero quae debitis tempora modi. Ipsa molestias enim in rem et incidunt beatae fugit, ab quam optio atque maiores facere est quidem, veritatis commodi.</p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><img src={Tick} style={{ width: '15px', marginRight: '10px' }}/>Aperiam neque id illum laudantium</li>
                            <li><img src={Tick} style={{ width: '15px', marginRight: '10px' }}/>Maiores facere est quidem</li>
                            <li><img src={Tick} style={{ width: '15px', marginRight: '10px' }}/>Laudantium autem vero</li>
                        </ul>
                    </div>
                    <div className="col" data-aos="fade-up" data-aos-delay="100">
                        <div style={{ position: 'relative' }} className="absolute-box">
                            <div className="absolute-elem">
                                <img src={ChatBox} style={{ width: '40px', marginBottom: '10px' }}/>
                                <h3>Pixel Perfect Templates</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.</p>
                                <span>Visit <a href="#" style={{ color: '#dc3545', textDecoration: 'none' }}>Colorlib</a></span>
                            </div>
                            <img src={Image1}></img>
                        </div>
                    </div>
                </div>
                <div className="row-22">
                    <div className="counter" data-aos="fade-up">
                        <img src={Ico1}></img>
                        <div className="counter-text">
                            <CountUp
                            start={0}
                            end={360}
                            duration={2.75}
                            separator=" "
                            enableScrollSpy
                            >
                                <span>360</span>
                            </CountUp>
                            <p>Creativity</p>
                        </div>
                    </div>
                    <div className="counter" data-aos="fade-up" data-aos-delay="100">
                        <img src={Ico2}></img>
                        <div className="counter-text">
                            <CountUp
                            start={0}
                            end={4500}
                            duration={2.75}
                            separator=" "
                            enableScrollSpy
                            >
                                <span>4500</span>
                            </CountUp>
                            <p>WordPress Themes</p>
                        </div>
                    </div>
                    <div className="counter" data-aos="fade-up" data-aos-delay="200">
                        <img src={Ico3}></img>
                        <div className="counter-text">
                        <CountUp
                            start={0}
                            end={120}
                            duration={2.75}
                            separator=" "
                            enableScrollSpy
                            >
                                <span>120</span>
                            </CountUp>
                            <p>HTML5 / CSS3</p>
                        </div>
                    </div>
                    <div className="counter" data-aos="fade-up" data-aos-delay="300">
                        <img src={Ico4}></img>
                        <div className="counter-text">
                            <CountUp
                            start={0}
                            end={3913}
                            duration={2.75}
                            separator=" "
                            enableScrollSpy
                            >
                                <span>3,913</span>
                            </CountUp>
                            <p>HTML5 / CSS3</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}