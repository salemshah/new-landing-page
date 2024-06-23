import React, {useEffect, useState} from 'react';
import {
    auth,
    // provider
} from "../db-config/firebase";
// import {signInWithPopup} from "firebase/auth"
import {useNavigate, Navigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";

const Auth = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Handler for input field changes
    const handleInputChange = event => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onSubmit = async event => {
        event.preventDefault()
        if (!formData.email || !formData.password) return alert("Entre votre email et mots de passe")
        setLoading(true)
        signInWithEmailAndPassword(auth, formData.email, formData.password).then(data => {
            if (data) {
                localStorage.setItem("email", data?.user?.email)
                navigate("/admin")
            }
            setLoading(false)
        }).catch(e => {
            alert(e.message)
            console.log(e)
        })
    }

    useEffect(() => {
        setEmail(localStorage.getItem("email"))
    }, [])


    return (
        email ? <Navigate to="/admin"/> : (
            <div className="mt-5 container d-flex w-100 justify-content-center align-content-center">
                <div style={{maxWidth: "50rem"}} className="d-flex bg-dark justify-content-center mt-5 p-5 rounded-5">
                    <form id="contact-form" onSubmit={onSubmit}>
                        <div className="row gx-3 gy-4">
                            <div className="col-12">
                                <div className="form-group">
                                    <input
                                        name="email"
                                        placeholder="Entre votre email"
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
                                    <input
                                        name="password"
                                        placeholder="Entre votre mots de passe"
                                        className="form-control"
                                        type="password"
                                        value={formData.password}
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
                                        {loading ? 'login...' : 'loging'}
                                    </button>
                                </div>
                            </div>

                            {/*  ===================== GOOGLE LOGIN ================*/}
                            {/*<div className="col-md-12">*/}
                            {/*    <div className="send">*/}
                            {/*        <button*/}
                            {/*            disabled={loading}*/}
                            {/*            onClick={signIn}*/}
                            {/*            className={`px-btn w-100 ${loading ? 'disabled' : ''}`}*/}
                            {/*        >*/}
                            {/*            {loading ? 'Google Login...' : 'Google Login'}*/}
                            {/*        </button>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                        </div>
                    </form>
                </div>
                {/*<button className="btn" onClick={signIn}> Google Signin</button>*/}
            </div>)
    );
};

export default Auth;