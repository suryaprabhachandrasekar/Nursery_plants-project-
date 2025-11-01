import React from 'react'
import Navbar from '../components/Navbar';

import FeatureCards from '../components/FeatureCards';
import PopularCourses from '../components/PopularCourses';
import MainFeature from '../components/MainFeature';
import OurTeacher from '../components/OurTeacher';
import StatsCounter from '../components/StatsCounter';
import ContactSection from '../components/ContactSection';
export const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <FeatureCards></FeatureCards>
            <PopularCourses></PopularCourses>
            <MainFeature></MainFeature>
            <OurTeacher></OurTeacher>
            <StatsCounter></StatsCounter>
            <ContactSection></ContactSection>
        </>
    )
}
