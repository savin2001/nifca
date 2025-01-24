import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const Innovation = () => {
    const breadcrumbLinks = [
        { to: "/innovations", label: "Innovation, Growth and Strategic Initiative" },
    ];

    const sections = [
        {
            title: "Fintech/Startup Accelerator",
            description: `
                Nairobi has become a hub for fintech innovation, providing a fertile ground for startups to thrive. 
                With access to cutting-edge technology, funding opportunities, and a vibrant entrepreneurial ecosystem, 
                the city has nurtured some of the most successful fintech startups in Africa.
                
                Startup accelerators in Nairobi play a pivotal role in mentoring and supporting early-stage companies. 
                These programs offer not just financial backing but also access to networks, industry expertise, and 
                strategic partnerships, enabling startups to scale quickly and sustainably.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/fintech-accelerator"
        },
        {
            title: "Green Finance & Carbon Market Framework",
            description: `
                Nairobi is leading the charge in green finance, integrating sustainable practices into its financial 
                ecosystem. The city's commitment to green bonds and renewable energy investments demonstrates its 
                dedication to combating climate change while fostering economic growth.
                
                The carbon market framework is gaining traction in Nairobi, enabling businesses to trade carbon credits 
                and incentivize lower emissions. This innovative approach not only supports environmental conservation 
                but also opens new avenues for sustainable business models.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/green-finance"
        },
        {
            title: "Fintech, Banking & Insurance",
            description: `
                Nairobi’s financial sector is an ecosystem where fintech, banking, and insurance converge to drive 
                innovation and financial inclusion. Mobile banking solutions like M-Pesa have revolutionized how 
                people access and manage their finances.
                
                Insurance companies in Nairobi are leveraging technology to offer microinsurance products, enabling 
                underserved populations to access coverage. This integration of fintech with traditional banking and 
                insurance creates a dynamic and inclusive financial landscape.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/fintech-banking-insurance"
        },
        {
            title: "Private Equity & Venture Capital",
            description: `
                Nairobi's private equity and venture capital landscape is experiencing unprecedented growth, with 
                investors keen to tap into the city's entrepreneurial talent and market opportunities. PE firms and 
                VCs are driving innovation by funding businesses across various sectors, from healthcare to technology.
                
                The city offers a robust ecosystem for deal-making, supported by favorable policies, a growing number of 
                investment funds, and a high-caliber professional workforce. These factors make Nairobi a hotspot for 
                impactful investments.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/private-equity"
        }
    ];

    return (
        <div className="relative">
            {/* Hero Carousel */}
            <div className="carousel w-full h-1/2">
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero h-[50vh]"
                        style={{
                            backgroundImage: "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <h1 className="mb-5 text-5xl font-light uppercase">
                                Innovation, Growth and Strategic Initiatives
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <BreadCrumbMenu links={breadcrumbLinks} />

            {/* Sections */}
            <div className="max-w-screen-lg mx-auto mt-20 space-y-16">
                {sections.map((section, index) => (
                    <div key={section.title} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                        <div className="md:w-1/2">
                            <img src={section.image} alt={section.title} className="rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center px-6">
                            <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
                            <p className="text-neutral mb-4">{section.description.split("\n")[0]}</p>
                            <p className="text-neutral mb-6">{section.description.split("\n")[1]}</p>
                            <Link to="#" className="btn btn-primary w-40">
                            {/* to={section.exploreLink} */}
                                Explore More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Innovation;
