import React from 'react'
import BreadCrumbMenu from '../components/BreadCrumbMenu';

const Contact = () => {
   // Define breadcrumb links
    const breadcrumbLinks = [
      { to: "/contact", label: "Make an Enquiry" },
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
                    Make an Enquiry
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pass breadcrumb links as a prop */}
        <BreadCrumbMenu links={breadcrumbLinks} />
  
        {/* Description */}
        <div className="max-w-screen-lg mx-auto text-left flex flex-col my-20">
          <h2 className="text-center mb-8 font-light text-2xl">
            Collaborating with our trusted partners to drive innovation, growth,
            and success within the Nairobi International Financial Centre.
          </h2>
        </div>
  
        {/* Contact Section with FAQs and Form */}
        <div className="max-w-screen-lg mx-auto flex gap-10 my-20">
          {/* FAQ Section */}
          <div className="w-1/2">
            <h3 className="text-xl font-medium mb-4">FAQs</h3>
            {/* Sample FAQ - Repeatable */}
            <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
              <div className="collapse-title text-xl font-medium">What is the Nairobi International Financial Centre?</div>
              <div className="collapse-content">
                <p>The Nairobi International Financial Centre (NIFC) is an economic hub designed to position Nairobi as a regional financial services center.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border-base-300 bg-base-200 border mb-4">
              <div className="collapse-title text-xl font-medium">How can I partner with NIFC?</div>
              <div className="collapse-content">
                <p>To partner with the NIFC, you can reach out to us through the contact form, and our team will get back to you with more information.</p>
              </div>
            </div>
            {/* Add more FAQs as needed */}
          </div>

          {/* Enquiry Form Section */}
          <div className="w-1/2">
            <h3 className="text-xl font-medium mb-4">Enquiry Form</h3>
            <form action="" method="post">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="input input-bordered w-full" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="input input-bordered w-full" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" className="input input-bordered w-full" required />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium">Country</label>
                  <input type="text" id="country" name="country" className="input input-bordered w-full" required />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium">Telephone</label>
                  <input type="tel" id="telephone" name="telephone" className="input input-bordered w-full" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium">Company</label>
                <input type="text" id="company" name="company" className="input input-bordered w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" name="message" className="textarea textarea-bordered w-full" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Contact;
