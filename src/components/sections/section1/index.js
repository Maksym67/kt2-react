import React,{useEffect} from "react";
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section1() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className="section1">
            <div className="color-section"></div>
        </div>
    );
}

export default Section1;