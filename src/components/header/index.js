import React, {useState, useEffect} from "react";
import ScrollspyNav from "react-scrollspy-nav";
import "./index.css"

export default function Header() {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 15)
        })
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 1200
        });
        }, false);
    }, [])
    return (
        <ScrollspyNav
            scrollTargetIds={["home", "projects", "process", "testimonials", "services", "pricing", "contacts"]}
            activeNavClass="is-active"
            scrollDuration="500"
            offset={0}
            headerBackground="true"
        >
        <div className={scroll ? "header header-scrolled" : "header"}>
            <div className="header-block">
                <div className="header-section">
                    <a className="header-logo">Expert</a>
                    <a href="#home" className="header-nav-button">Home</a>
                    <a href="#projects" className="header-nav-button">Projects</a>
                    <a href="#process" className="header-nav-button">Process</a>
                    <a href="#testimonials" className="header-nav-button">Testimonials</a>
                    <a href="#services" className="header-nav-button">Services</a>
                </div>
                <div className="header-section-right">
                    <a href="#pricing" className="header-nav-button black-underline" style={{ color: "black" }}>Pricing</a>
                    <a href="#contacts" className="header-nav-button-big">Contact</a>
                </div>
            </div>
        </div>
        </ScrollspyNav>
    );
}