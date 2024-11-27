import React from 'react';
import Hero from "../components/Hero";
import HomePagdData from '../data/HomePagdData.json';
import About from '../components/About';
import Overview from "../components/Overview";
import Approche from "../components/Approche";
import Contact from '../components/Contact';
import axiosInstance from "../client/axiosInstence";
import {useQuery} from "@tanstack/react-query";
import Loading from "react-fullscreen-loading";


const fetchHero = async () => {
    const {data} = await axiosInstance.get('/landing-page-setting-one');
    return data?.data;
};

export default function Home() {
    const {hero, about, service, contact, approche} = HomePagdData;
    const {data, isLoading} = useQuery({queryKey: ['setting'], queryFn: fetchHero});

    if (isLoading) {
        return (
            <Loading
                loading={isLoading}
                background="rgb(38 59 219 / 92%)"
                loaderColor="rgb(100 252 197)"
            />
        );
    }

    return (<>
        <Hero data={hero} service={data}/>
        <About data={about}/>
        <Overview data={service}/>
        <Approche data={approche}/>
        <Contact data={contact} service={data}/>
    </>);
}
