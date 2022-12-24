import React, {Component} from "react";
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "./imgs/img1.jpg"

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

    render () {
        return (
            <div id="home" className="home">
                <div className="color-section"></div>
                <div className="container">
                    <div className="column col-1">
                        <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        >
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
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
                            >
                            <div>
                                <img src={Image1}></img>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}