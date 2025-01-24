import { Link } from "react-router-dom";
import BreadCrumbMenu from "../components/BreadCrumbMenu";

const ApplicationProcess = () => {
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
                  Application Process
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadCrumbMenu />
      <div className="max-w-screen-lg mx-auto text-left flex flex-col mt-20">
        <p className="text-neutral text-lg font-light">
          Starting a business in Kenya involves a step-by-step process that
          ensures legal compliance and sets the foundation for a successful
          venture. Understanding the application process is crucial for
          entrepreneurs looking to establish their business in Kenya.
        </p>
        <br />

        <p className="text-neutral">
          The first step in the business registration process is to decide on
          the type of business structure you want to establish. Common options
          include sole proprietorships, partnerships, and limited liability
          companies (LLCs). Choosing the right structure depends on factors such
          as liability, taxation, and the number of owners.
        </p>
        <br />

        <p className="text-neutral">
          Once you've decided on the business structure, you will need to
          register the business name with the Kenya Industrial Property
          Institute (KIPI). The name should be unique and not conflict with any
          existing business names. This process can be done online through the
          KIPI portal, which provides an efficient way to check for name
          availability and complete the registration.
        </p>
        <br />

        <p className="text-neutral">
          After securing the business name, the next step is to incorporate the
          company. This is done through the eCitizen platform, which is an
          online government service portal. Through eCitizen, you can complete
          the registration process, including submitting the necessary documents
          like the Memorandum and Articles of Association, ID copies of the
          directors, and the business address.
        </p>
        <br />

        <p className="text-neutral">
          Following incorporation, it's essential to obtain a Personal
          Identification Number (PIN) from the Kenya Revenue Authority (KRA).
          The PIN is required for tax purposes and is necessary for opening a
          business bank account, paying taxes, and other official transactions.
          You can apply for a PIN online through the KRA's iTax platform.
        </p>
        <br />

        <p className="text-neutral">
          The next step is to register for taxes with the KRA. Depending on your
          business's activities, you may be required to register for Value Added
          Tax (VAT), Pay As You Earn (PAYE) for employees, or other relevant
          taxes. The registration process is also done online via the iTax
          platform, which simplifies the process for businesses.
        </p>
        <br />

        <p className="text-neutral">
          If your business requires specific licenses or permits, you will need
          to apply for these from the relevant authorities. For example,
          businesses in the food, health, or hospitality sectors may need to
          acquire licenses from the Kenya Bureau of Standards (KEBS) or the
          Ministry of Health. Local county governments also issue business
          permits to ensure that businesses operate within their jurisdiction.
        </p>
        <br />

        <p className="text-neutral">
          Once you have completed these steps, you can proceed to open a
          business bank account. This requires presenting your registration
          documents, PIN, and identification documents. A business bank account
          is essential for handling transactions and managing your business
          finances effectively.
        </p>
        <br />

        <p className="text-neutral">
          Finally, it is important to keep in mind ongoing compliance
          requirements. Businesses in Kenya are required to file annual returns,
          submit tax filings, and renew licenses as needed. Staying compliant
          with these regulations helps avoid fines and ensures the long-term
          success of your business.
        </p>
        <br />

        <p className="text-neutral">
          In conclusion, the process of starting a business in Kenya is
          streamlined through online platforms like eCitizen and iTax, making it
          easier for entrepreneurs to establish their ventures. By following the
          steps of registering the business, obtaining necessary licenses, and
          staying compliant with tax regulations, you can successfully start and
          run your business in Kenya.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mt-12 flex flex-col justify-center items-center font-light">
        <div className="bg-base-300 w-full  p-12 flex justify-between space-x-8">
          <button className="capitalize flex-grow btn btn-ghost btn-lg text-3xl font-light">
            Start application ❯
          </button>
          <Link to="/contact" className="capitalize flex-grow btn btn-ghost  btn-lg text-3xl font-light">
            Make an enquiry ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
