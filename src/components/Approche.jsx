import {Icon} from '@iconify/react';
import React from 'react';
import parser from 'html-react-parser';
import {Link as ScrollLink} from 'react-scroll';
import {useTranslation} from "react-i18next";

export default function Approche({data}) {
    const {t} = useTranslation();
    const {imgSrc, miniTitle, title, description, description1, description2, funfacts, btnText, btnUrl} =
        data;
    return (
        <section className="about-section section" id="approach">
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
                <div className="row align-items-center justify-content-center gy-5">
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
                    <div className="col-lg-6 col-xl-5 px-lg-5">
                        <div
                            className="about-text"
                            data-aos="fade"
                            data-aos-duration="1200"
                            data-aos-delay="400"
                        >
                            <div className="section-heading">
                                {/*{miniTitle && (*/}
                                {/*  <h6>*/}
                                {/*    <span>{miniTitle}</span>*/}
                                {/*  </h6>*/}
                                {/*)}*/}

                                <h2>{parser(t("approach.miniTitle"))}</h2>
                            </div>
                            <p>{t("approach.description")}</p>
                            <p>{t("approach.description1")}</p>
                            <p>{t("approach.description2")}</p>
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
                                    <span>{t("approach.btnText")}</span>{' '}
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