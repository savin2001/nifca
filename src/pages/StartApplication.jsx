import React from "react";
import BreadCrumbMenu from "../components/BreadCrumbMenu";
import { Link } from "react-router-dom";

const StartYourApplication = () => {
    const breadcrumbLinks = [
        { to: "/becoming-nifc-firm", label: "Join the NIFC" },
        { to: "#", label: "Start Your Application" },
    ];

    return (
        <div className="relative">
            {/* Hero Carousel */}
            <div className="carousel w-full h-1/2">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div
                        className="hero h-[50vh]"
                        style={{
                            backgroundImage:
                                "url(https://images.unsplash.com/photo-1669127300649-940337f1487e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaXxlbnwwfHwwfHx8MA%3D%3D)",
                        }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div>
                                <h1 className="mb-5 text-5xl font-light uppercase">
                                    Start Your Application
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pass breadcrumb links as a prop */}
            <BreadCrumbMenu links={breadcrumbLinks} />
            <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
                <p className="text-neutral text-lg font-light">
                    Joining the Nairobi International Financial Centre (NIFC) is a
                    straightforward process designed to support businesses in achieving
                    their financial goals. Our application process is crafted to ensure
                    that companies can seamlessly gain the benefits of operating within
                    Nairobi’s robust financial ecosystem.
                </p>
                <br />
                <p className="text-neutral">
                    Whether you are a multinational corporation, an investment firm, or a
                    fintech startup, our platform offers tailored solutions to suit your
                    needs. By starting your application today, you take the first step
                    towards accessing a network of global opportunities, favorable
                    government policies, and world-class infrastructure. Let us guide you
                    through every stage of the application to ensure a smooth and
                    efficient onboarding experience.
                </p>
                <br />
            </div>

            {/* Application Steps Title */}
            <div className="max-w-screen-lg mx-auto text-left mt-12">
                <h2 className="text-3xl font-semibold">Follow these simple steps to complete your application</h2>
                <p className="text-neutral text-lg font-light mt-4">
                    The following steps will guide you through the application process. Each step is designed to be quick and easy, ensuring your journey with NIFC is seamless.
                </p>
            </div>

            {/* Application Steps */}
            <div className="w-full max-w-screen-lg mx-auto mt-8">
                <ul className="steps steps-vertical w-full">
                    <li className="step step-primary">
                        <div className="text-left mb-4">
                            <h3 className="text-xl mb-2">Register Your Company</h3>
                            <p className="w-full">Begin by providing your company details, including name, registration number, and nature of business. This ensures your application is tailored to your needs.</p>
                        </div>
                    </li>
                    <li className="step step-primary">
                        <div className="text-left mb-4">
                            <h3 className="text-xl mb-2">Choose Your Plan</h3>
                            <p className="w-full">Select the plan that best suits your business goals. Our plans offer various levels of support depending on your needs and aspirations.</p>
                        </div></li>
                    <li className="step step-primary">
                        <div className="text-left mb-4">
                            <h3 className="text-xl mb-2">Submit Required Documents</h3>
                            <p className="w-full">Upload the necessary legal and financial documents to verify your company’s credentials and ensure compliance with NIFC standards.</p>
                        </div></li>
                    <li className="step step-primary">
                        <div className="text-left mb-4">
                            <h3 className="text-xl mb-2">Review and Approvals</h3>
                            <p className="w-full">Our team will review the submitted documents and application. Expect timely communication regarding the status of your application.</p>
                        </div></li>
                    <li className="step"><div className="text-left mb-4">
                        <h3>5. Receive Confirmation</h3>
                        <p className="w-full">Once approved, you will receive confirmation and can begin operating within Nairobi’s thriving financial ecosystem.</p>
                    </div></li>
                </ul>
            </div>

            {/* Apply Now */}
            <div className="mt-12 flex flex-col justify-center items-center font-light">
                <div className="bg-base-300 w-full p-12 flex justify-center">
                    <Link
                        to="/apply"
                        className="capitalize btn btn-primary btn-lg text-3xl font-light"
                    >
                        Apply Now ❯
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartYourApplication;
