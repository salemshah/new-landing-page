import React from 'react';
import Hero from "../components/Hero";
import HomePagdData from '../data/HomePagdData.json';
import About from '../components/About';
import Overview from "../components/Overview";
import Approche from "../components/Approche";
import Contact from '../components/Contact';


export default function Home() {
    const {
        hero, socialBtns, about, service, contact, approche
    } = HomePagdData;

    return (<>
        <Hero data={hero} socialData={socialBtns}/>
        <About data={about}/>
        <Overview data={service}/>
        <Approche data={approche}/>
        <Contact data={contact} socialData={socialBtns}/>
    </>);
}
