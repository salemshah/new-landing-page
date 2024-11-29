import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import IconLink from "./IconLink";

export default function Contact({ data, service }) {

  const { contactImg } = data;

  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded oveflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              <div
                className="contactus-title"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{service?.formHeader}</h5>
                <p className="m-0">{service?.formDescription}</p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="col-lg-8">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-4 pe-md-5">
              <div className="contact-banner d-none d-lg-block mb-5">
                <img src={contactImg} alt="Minda logo"/>
              </div>
              <ContactInfo service={service}/>
              <div className="mt-4 mt-md-0 hero-social flex-wrap">
                {service?.facebookLink && <IconLink icon="ic:baseline-facebook" to={service?.facebookLink}/>}
                {service?.instagramLink && <IconLink icon="line-md:instagram" to={service?.instagramLink}/>}
                {service?.xLink && <IconLink icon="entypo-social:linkedin" to={service?.xLink}/>}
                {/*{service?.tiktokLink && <IconLink icon="ic:baseline-tiktok" to={service?.tiktokLink}/>}*/}
                {/*{service?.xLink && <IconLink icon="line-md:twitter-x-alt" to={service?.xLink}/>}*/}
                {/*{service?.youtubeLink && <IconLink icon="line-md:youtube" to={service?.youtubeLink}/>}*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
