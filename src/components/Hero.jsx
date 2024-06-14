import {Icon} from '@iconify/react';
import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {Link as ScrollLink} from 'react-scroll';
import {useTranslation} from "react-i18next";

export default function Hero({data}) {
    const {t} = useTranslation();
    // const [typingText, setTypingText] = useState([])

    const typingText = t("hero.typingText", {returnObjects: true});


    const {imgUrl, btnUrl} = data;
    return (
        <section className="home-section" id="home" data-scroll-index={0} style={{
            background: `url("/images/hero-background.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh"

        }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="hs-text-box">
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="100"
                            >
                                {t("hero.heading")}
                            </h1>
                            <h3
                                style={{minHeight: 120}}
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="200"
                            >
                                <TypeAnimation
                                    sequence={typingText}
                                    speed={0}
                                    repeat={Infinity}
                                />
                            </h3>
                            <p
                                className="text"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                            >
                                {t('hero.description')}
                            </p>
                            <div
                                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="400"
                            >
                                <ScrollLink
                                    to={btnUrl}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="px-btn"
                                >
                                    <span>{t("hero.btnText")}</span>{' '}
                                    <i className="d-flex">
                                        <Icon icon="bi:arrow-right"/>
                                    </i>
                                </ScrollLink>
                                {/*<SocialBtns*/}
                                {/*  socialBtns={socialData}*/}
                                {/*  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hs-banner">
                            <img src={imgUrl} className="home-banner" alt="minda"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
