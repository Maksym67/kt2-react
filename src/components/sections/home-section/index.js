import React, {useEffect} from "react";
import "./index.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="home" className="home">
            <div className="color-section"></div>
        </div>
    );
}

export default Home;