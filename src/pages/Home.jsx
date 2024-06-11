import React from 'react';
import Hero from "../components/Hero";
import HomePagdData from '../data/HomePagdData.json';
import About from '../components/About';
import Overview from "../components/Overview";


export default function Home() {
    const {
        hero, socialBtns, about, service, contact, approche
    } = HomePagdData;

    return (<>
        <Hero data={hero} socialData={socialBtns}/>
        <About data={about}/>
        <Overview data={service}/>
    </>);
}
