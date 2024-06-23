import React from 'react';
import Hero from "../components/Hero";
import HomePagdData from '../data/HomePagdData.json';
import About from '../components/About';
import Overview from "../components/Overview";
import Approche from "../components/Approche";
import Contact from '../components/Contact';
import useSWR from "swr";
import fetcher from "../client/httpRequests";


export default function Home() {
    const {hero, about, service, contact, approche} = HomePagdData;
    const {data} = useSWR('/landing-page-setting-one', fetcher)

    return (<>
        <Hero data={hero} service={data}/>
        <About data={about}/>
        <Overview data={service}/>
        <Approche data={approche}/>
        <Contact data={contact} service={data}/>
    </>);
}
