import React from 'react';
import {useTranslation} from "react-i18next";

export default function ContactInfo( ) {
  const {t} = useTranslation();
  const contactInfoData = t("contact.contactInfo", {returnObjects: true});
  return (
    <div className="contact-info">
      {contactInfoData.map((item, index) => (
        <div
          className="contact-info-in"
          key={index}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={index * 100}
        >
          <label>{item.title}</label>
          {item.email && <a href={`mailto:${item.email}`}>{item.email}</a>}
          {item.tel && <a href={`tel:${item.tel}`}>{item.tel}</a>}
        </div>
      ))}
    </div>
  );
}
