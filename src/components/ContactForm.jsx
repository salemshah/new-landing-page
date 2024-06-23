import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import axiosInstance from "../client/axiosInstence";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
    name: yup.string().required('Le nom est requis'),
    email: yup.string().email('Email invalide').required('L\'email est requis'),
    subject: yup.string().required('Le sujet est requis'),
    message: yup.string().required('Le message est requis'),
    terms: yup.bool().oneOf([true], 'Les termes doivent être acceptés'),
});

export default function ContactForm() {
    const {handleSubmit, reset, control, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await axiosInstance.post('/message', data);
            toast.success('Message envoyé avec succès!');
            reset()
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Échec de l\'envoi du message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-3 gy-4">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Nom</label>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <input
                                        {...field}
                                        placeholder="Entrez votre nom"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    />
                                )}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <input
                                        {...field}
                                        placeholder="Entrez votre email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        type="email"
                                    />
                                )}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="form-label">Sujet</label>
                            <Controller
                                name="subject"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <input
                                        {...field}
                                        placeholder="Entrez le sujet"
                                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                    />
                                )}
                            />
                            {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <Controller
                                name="message"
                                control={control}
                                defaultValue=""
                                render={({field}) => (
                                    <textarea
                                        {...field}
                                        placeholder="Entrez votre message"
                                        rows={4}
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                    />
                                )}
                            />
                            {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-check">
                            <Controller
                                name="terms"
                                control={control}
                                defaultValue={false}
                                render={({field}) => (
                                    <input
                                        {...field}
                                        className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                                        type="checkbox"
                                        id="term-condation"
                                    />
                                )}
                            />
                            <label className="form-label" htmlFor="term-condation">
                                J'accepte les <a href="/term-condition" target="_blank">termes et conditions</a>.
                            </label>
                            {errors.terms && <div className="invalid-feedback">{errors.terms.message}</div>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="send">
                            <button
                                className={`px-btn w-100 ${loading ? 'disabled' : ''}`}
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Envoi...' : 'Envoyer le message'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
