import React from 'react';
import SectionHeading from './SectionHeading';

export default function Overview({data}) {
    const {sectionHeading, allService} = data;
    return (
        <section className="section" id="overview">
            <div className="container">
                <SectionHeading
                    miniTitle={sectionHeading.miniTitle}
                    title={sectionHeading.title}
                />
                <div className="row gy-5">
                    {allService?.map((item, index) => (
                        <div className="col-sm-6 col-lg-4" key={index}>
                            <div
                                className="services-box"
                                style={{backgroundImage: `url(${item.imgUrl})`}}
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                data-aos-delay={index * 100}
                            >
                                <div className="services-body">
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
