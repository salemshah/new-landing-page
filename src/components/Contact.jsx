import React from 'react';
import SocialBtns from './SocialBtns';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import {useTranslation} from "react-i18next";

export default function Contact({ data, socialData }) {
  const {t} = useTranslation();

  const { contactImg, contactInfo } = data;

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
                <h5>{t("contact.sectionHeading.title")}</h5>
                <p className="m-0">{t("contact.sectionHeading.subTitle")}</p>
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
              <div className="contact-banner d-none d-lg-block">
                <img src={contactImg} alt="Avatar" />
              </div>
              <ContactInfo contactInfoData={contactInfo} />
              <SocialBtns socialBtns={socialData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
