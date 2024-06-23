import React from 'react';

export default function ContactInfo({service}) {
    return (
        <div className="contact-info">

            <div
                className="contact-info-in"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <label>Email</label>
                <a href={`mailto:${service?.email}`}>{service?.email}</a>
            </div>

            <div
                className="contact-info-in"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
            >
                <label>Numéro de téléphone</label>
                <a href={`tel:${service?.phoneNumber}`}>{service?.phoneNumber}</a>
            </div>

        </div>
    );
}
