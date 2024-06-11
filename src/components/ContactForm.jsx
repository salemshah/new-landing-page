import React, {useEffect, useState} from 'react';
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "../db-config/firebase";
import emailjs from "@emailjs/browser";
import {useTranslation} from "react-i18next";

export default function ContactForm() {
    const {t} = useTranslation();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handler for input field changes
    const handleInputChange = event => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => emailjs.init("l6oIXPqM4hQPIIsv-"), []);

    const onSubmit = async event => {
        event.preventDefault();
        setLoading(true);
        if (!formData.name && !formData.email && !formData.subject && !formData.message) return console.error("nullllllllllll")

        const serviceId = "service_o0p6igt"
        const templateId = "template_i3qkk58"

        try {
            await emailjs.sendForm(serviceId, templateId, event.target)
            const docRef = await addDoc(collection(db, "messages"), formData);
            console.log("Document written with ID: ", docRef.id);
            setFormData({name: '', email: '', subject: '', message: ''});
            setLoading(false);
            alert("Nous avons reçu votre message et nous vous contacterons dans les plus brefs délais")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return (
        <form id="contact-form" onSubmit={onSubmit}>
            <div className="row gx-3 gy-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">{t("contact.form.name.label")}</label>
                        <input
                            name="name"
                            placeholder={t("contact.form.name.placeholder")}
                            className="form-control"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">{t("contact.form.email.label")}</label>
                        <input
                            name="email"
                            placeholder={t("contact.form.email.placeholder")}
                            className="form-control"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="form-label">{t("contact.form.subject.label")}</label>
                        <input
                            name="subject"
                            placeholder={t("contact.form.subject.placeholder")}
                            className="form-control"
                            type="text"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-12">
                <div className="form-group">
                        <label className="form-label">{t("contact.form.message.label")}</label>
                        <textarea
                            name="message"
                            placeholder={t("contact.form.message.placeholder")}
                            rows={4}
                            className="form-control"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="send">
                        <button
                            className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
                            type="submit"
                        >
                            {loading ? 'Sending...' : 'Envoyer Message'}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
