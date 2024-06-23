import React, {useState, useEffect} from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {useTranslation} from "react-i18next";
// import SwitchLanguage from "./SwitchLanguage";

export default function Header() {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const {t} = useTranslation();
    const header = t("header", {returnObjects: true});

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`header-top-fixed one-page-nav ${
                mobileToggle ? 'menu-open menu-open-desk' : ''
            } ${scrolled ? 'fixed-header' : ''}`}
        >
            <div className="container">
                <div className="logo">
                    <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => setMobileToggle(false)}
                    >
                        <img
                            style={{width: 164}}
                            className="logo-light"
                            alt="Logo"
                            src="/images/logo.png"
                        />
                    </ScrollLink>
                </div>
                <ul className="main-menu">
                    {header.map((row, index) => {
                        return (
                            <li key={index.toString()}>
                                <ScrollLink
                                    to={row?.url}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onClick={() => setMobileToggle(false)}
                                >
                                    {row?.title}
                                </ScrollLink>
                            </li>
                        )
                    })}

                    {/*<SwitchLanguage/>*/}
                </ul>
                {/* Top Menu */}
                <div className="d-flex">
                    {/*                    <ScrollLink
                      to="contactus"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => setMobileToggle(false)}
                      className="px-btn d-none d-lg-inline-flex"
                    >
                      Lets' Talk
                    </ScrollLink>*/}
                    <button
                        className="toggler-menu d-lg-none"
                        onClick={() => setMobileToggle(!mobileToggle)}
                    >
                        <span/>
                    </button>
                </div>
                {/* / */}
            </div>
        </div>
    );
}
