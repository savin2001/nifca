import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const NIFCFirm = () => {
    // Define breadcrumb links
    const breadcrumbLinks = [
        { to: "/becoming-nifc-firm", label: "Join The NIFC" }
    ];

    const sections = [
        {
            title: "Start Your Application",
            description: `
                Becoming an NIFC-accredited firm is your gateway to unlocking exclusive opportunities in Kenya's financial ecosystem. 
                The application process is straightforward and designed to minimize bureaucratic hurdles, allowing businesses to 
                quickly gain access to the benefits of NIFC accreditation.
                
                Accredited firms enjoy a range of advantages, including tax incentives, simplified regulations, and access to 
                international markets. With these benefits, your business is well-positioned to lead in innovation and financial growth.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/start-application"
        },
        {
            title: "NIFC One-Stop Shop",
            description: `
                The NIFC One-Stop Shop is designed to streamline business operations for accredited firms. From registration to 
                compliance, this centralized platform provides a seamless experience for businesses, ensuring that they can focus 
                on growth rather than administrative tasks.
                
                This service also offers a dedicated support team to guide firms through legal, regulatory, and operational 
                processes. By simplifying these critical aspects, the NIFC One-Stop Shop empowers businesses to thrive in a competitive market.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/one-stop-shop"
        },
        {
            title: "Apply for Immigration Support Services",
            description: `
                The NIFC provides tailored immigration support services to help firms attract and retain global talent. These 
                services include expedited work permits, visa processing, and relocation support, ensuring that your team can 
                operate seamlessly in Kenya.
                
                By prioritizing immigration efficiency, the NIFC enhances its position as a global financial hub, fostering a 
                diverse workforce that drives innovation and growth across industries.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/immigration-support"
        },
        {
            title: "Apply for Business Support Services",
            description: `
                NIFC-accredited firms gain access to a range of business support services, including market analysis, strategic 
                advisory, and networking opportunities. These services are designed to help firms navigate Kenya’s dynamic 
                financial ecosystem effectively.
                
                The NIFC also fosters partnerships with local and international stakeholders, providing firms with valuable 
                connections that drive business growth and long-term success.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/business-support"
        },
        {
            title: "The SDG Pipeline Builder",
            description: `
                The SDG Pipeline Builder is an innovative initiative by the NIFC to align business growth with the United Nations 
                Sustainable Development Goals (SDGs). This platform connects firms with impactful projects that drive environmental 
                and social progress.
                
                By participating in the SDG Pipeline Builder, firms can enhance their ESG credentials while contributing to Kenya’s 
                sustainable development agenda, making a positive impact both locally and globally.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/sdg-pipeline-builder"
        },
        {
            title: "NIFC Tech Accelerator",
            description: `
                The NIFC Tech Accelerator is a hub for innovation, offering startups and established firms access to cutting-edge 
                technology, mentorship, and funding opportunities. This initiative is designed to nurture tech-driven financial 
                solutions that transform industries.
                
                Participants in the accelerator program benefit from a vibrant ecosystem of innovation, gaining insights, 
                partnerships, and resources to scale their operations and drive digital transformation.
            `,
            image: "https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D",
            exploreLink: "/tech-accelerator"
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
                                Becoming an NIFC Firm
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
                            <a href={section.exploreLink} className="btn btn-primary w-40">
                                Find out more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NIFCFirm;
