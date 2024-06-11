import {Icon} from '@iconify/react';
import React from 'react';
import parser from 'html-react-parser';
import {Link as ScrollLink} from 'react-scroll';
import {useTranslation} from "react-i18next";

export default function About({data}) {
    const {t} = useTranslation();
    const {imgSrc, miniTitle, title, description, description1, description2, description3, funfacts, btnText, btnUrl} =
        data;
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="effect-1">
                    <img
                        src="/images/effect-1.svg"
                        alt="Shape"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                    />
                </div>
                <div className="effect-2">
                    <img
                        src="/images/effect-2.svg"
                        alt="Shape"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                    />
                </div>
                <div className="row align-items-center gy-5">
                    <div
                        className="col-lg-6 col-xl-5"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                    >
                        <div className="about-banner text-center">
                            <img src={imgSrc} alt="Thumb"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-7 px-lg-5">
                        <div
                            className="about-text"
                            data-aos="fade"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            <div className="section-heading">
                                {/*{miniTitle && (*/}
                                {/*    <h6>*/}
                                {/*        <span>{miniTitle}</span>*/}
                                {/*    </h6>*/}
                                {/*)}*/}

                                <h2>{parser(t("about.miniTitle"))}</h2>
                            </div>
                            <p>{t("about.description")}</p>
                            <p>{t("about.description1")}</p>
                            <p>{t("about.description2")}</p>
                            <p>{t("about.description3")}</p>
                            <div className="review-box">
                                {/*{funfacts?.map((item, index) => (*/}
                                {/*  <div className="r-box" key={index}>*/}
                                {/*    <h3>*/}
                                {/*      {item.number}*/}
                                {/*      <span>+</span>*/}
                                {/*    </h3>*/}
                                {/*    <label>{item.title}</label>*/}
                                {/*  </div>*/}
                                {/*))}*/}
                            </div>
                            <div className="btn-bar">
                                <ScrollLink
                                    to={btnUrl}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={300}
                                    className="px-btn"
                                >
                                    <span>{t("about.btnText")}</span>{' '}
                                    <i>
                                        <Icon icon="bi:arrow-right"/>
                                    </i>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
