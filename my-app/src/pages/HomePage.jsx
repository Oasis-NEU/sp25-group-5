import React from 'react';
import Header from '../components/Header/Header.jsx';
import IconGrid from '../components/Icons/IconGrid.jsx';
import AboutSection from '../components/AboutTheCreators/AboutSection.jsx';
import SourcesSection from '../components/Sources/SourcesSection.jsx';
import RequestForm from '../components/RequestForm/RequestForm.jsx';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <IconGrid />
            <AboutSection />
            <SourcesSection />
            <RequestForm />
        </div>
    );
};

export default HomePage;