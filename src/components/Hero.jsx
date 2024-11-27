import {Icon} from '@iconify/react';
import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {Link as ScrollLink} from 'react-scroll';
import {useQuery} from '@tanstack/react-query';
import axiosInstance from "../client/axiosInstence";
import IconLink from "./IconLink";
import {useTranslation} from "react-i18next";

const fetchHero = async () => {
    const {data} = await axiosInstance.get('/hero-active');
    return data?.data;
};

export default function Hero({data, service}) {
    const {t} = useTranslation();

    // React Query for data fetching
    const {data: hero, isError, error} = useQuery({queryKey: ['hero'], queryFn: fetchHero});

    // Fallback values for hero properties
    const textAnim1 = hero?.textAnim1 || 'Loading...';
    const textAnim2 = hero?.textAnim2 || 'Loading...';
    const heading = hero?.heading || t("hero.defaultHeading");
    const description = hero?.description || t("hero.defaultDescription");
    const imgUrl = hero?.imgUrl || "/images/default-image.jpg";
    const {btnUrl} = data;

    if (isError) {
        console.log(error?.message)
    }

    return (
        <section
            className="home-section"
            id="home"
            data-scroll-index={0}
            style={{
                background: `url("/images/hero-background.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh"
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="hs-text-box">
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="100"
                            >
                                {heading}
                            </h1>
                            <h3
                                style={{minHeight: 120}}
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="200"
                            >
                                <TypeAnimation
                                    key={textAnim1 + textAnim2}
                                    sequence={[textAnim1, 1500, textAnim2, 1500]}
                                    speed={50}
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </h3>
                            <div
                                className="text"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-delay="300"
                            >
                                <div dangerouslySetInnerHTML={{__html: description}}/>
                            </div>
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
                                    <span>{t("hero.btnText")}</span>
                                    <i className="d-flex">
                                        <Icon icon="bi:arrow-right"/>
                                    </i>
                                </ScrollLink>
                                <div className="mt-4 mt-md-0 hero-social">
                                    <IconLink icon="ic:baseline-facebook" to={service?.facebookLink}/>
                                    <IconLink icon="line-md:instagram" to={service?.instagramLink}/>
                                    <IconLink icon="ic:baseline-tiktok" to={service?.tiktokLink}/>
                                    <IconLink icon="line-md:twitter-x-alt" to={service?.xLink}/>
                                    <IconLink icon="line-md:youtube" to={service?.youtubeLink}/>
                                </div>
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
