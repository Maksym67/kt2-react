import React, {useState, useEffect} from "react";
import ScrollspyNav from "react-scrollspy-nav";
import "./index.css"

export default function Header() {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 15)
        })
    }, [])
    return (
        <ScrollspyNav
            scrollTargetIds={["home"]}
            activeNavClass="is-active"
            scrollDuration="500"
        >
        <div className={scroll ? "header header-scrolled" : "header"}>
            <div className="header-block">
                <div className="header-section">
                    <a className="header-logo">Expert</a>
                    <a href="#home" className="header-nav-button">Home</a>
                    <a className="header-nav-button">Projects</a>
                    <a className="header-nav-button">Process</a>
                    <a className="header-nav-button">Testimonials</a>
                    <a className="header-nav-button">Services</a>
                </div>
                <div className="header-section-right">
                    <a className="header-nav-button black-underline">Pricing</a>
                    <a className="header-nav-button-big">Contact</a>
                </div>
            </div>
        </div>
        </ScrollspyNav>
    );
}