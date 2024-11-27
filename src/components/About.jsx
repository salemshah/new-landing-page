import {Icon} from '@iconify/react';
import React from 'react';
import parser from 'html-react-parser';
import {Link as ScrollLink} from 'react-scroll';
import {useTranslation} from "react-i18next";
import axiosInstance from "../client/axiosInstence";
import {useQuery} from "@tanstack/react-query";

const fetchHero = async () => {
    const {data} = await axiosInstance.get('/about-active');
    return data?.data;
};

export default function About({data}) {
    const {t} = useTranslation();
    const {data: about, isError, error} = useQuery({queryKey: ['about'], queryFn: fetchHero});
    if (isError) {
        console.log(error?.message)
    }
    const {btnUrl} = data;
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="effect-1">
                    <img
                        src="/images/effect-1.svg"
                        alt="about-minda"
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        data-aos-delay="500"
                    />
                </div>
                <div className="effect-2">
                    <img
                        src="/images/effect-2.svg"
                        alt="about-maind"
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
                            <img src={about?.imgUrl} alt="About maind"/>
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
                                <h2>{parser(t("about.miniTitle"))}</h2>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: about?.description}}/>
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
