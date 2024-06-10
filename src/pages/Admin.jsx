import * as React from 'react';
import {collection, getDocs} from "firebase/firestore";
import {db, auth,} from "../db-config/firebase";
import {useEffect, useState} from "react";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    if (!email) navigate("/auth")

    useEffect(() => {
        setEmail(localStorage.getItem("email"))
    }, [])

    const [messages, setMessages] = useState([])
    useEffect(() => {
        const fetchPost = async () => {
            await getDocs(collection(db, "messages"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                    setMessages(newData);
                })
        }
        fetchPost();
    }, [])

    const logout = async () => {
        await signOut(auth).then(() => {
            localStorage.setItem("email", "")
            navigate("/")
        }).catch(console.error)
    }


    return (<main style={{padding: 80, minHeight: "100vh"}}>
        <div className="container pt-3">
            <div className="d-flex justify-content-between">
                <h2 className="py-3">Message de clients</h2>
                <div className="align-items-center d-flex">
                    <button className="btn bg-danger" onClick={logout}>Logout</button>
                </div>
            </div>
            <div className="rounded-4 overflow-hidden">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Sujet</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages?.map((message, index) => {
                        return (<tr key={index?.toString()}>
                            <th scope="row">{index + 1}</th>
                            <td>{message?.name}</td>
                            <td>{message?.subject}</td>
                            <td>{message?.email}</td>
                            <td>{message?.message}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </main>);
};

export default Admin