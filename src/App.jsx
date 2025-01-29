import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ApplicationProcess from "./pages/ApplicationProcess";
import NotFound from "./pages/NotFound";
import Enquiry from "./pages/Enquiry";
import Events from "./pages/Events";
import GreenFinance from "./pages/GreenFinance";
import Laws from "./pages/Laws";
import Leadership from "./pages/Leadership";
import WhyNairobi from "./pages/WhyNairobi";
import NIFCFirm from "./pages/NIFCFirm";
import Media from "./pages/Media";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import TargetSector from "./pages/TargetSector";
import StartBusiness from "./pages/StartBusiness";
import OperatingNIFC from "./pages/OperatingNIFC";
import Frameworks from "./pages/Frameworks";
import Team from "./pages/Team";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import FinancialGateway from "./pages/FinancialGateway";
import FinancialServices from "./pages/FinancialServices";
import Sustainability from "./pages/Sustainability";
import Tourism from "./pages/Tourism";
import Lifestyle from "./pages/Lifestyle";
import Innovation from "./pages/Innovation";
import StartYourApplication from "./pages/StartApplication";
import NIFCOneStopShop from "./pages/OneStopShop";
import ImmigrationSupport from "./pages/ImmigrationSupport";
import BusinessSupport from "./pages/BusinessSupport";
import SDGPipelineBuilder  from "./pages/SDGPipelineBuilder";
import NIFCTechAccelerator from "./pages/NIFCTechAccelerator";
import ComingSoon from "./pages/ComingSoon";
import Careers from "./pages/Careers";
// import StartYourApplication from "./pages/StartApplication";
// import StartYourApplication from "./pages/StartApplication";
// import StartYourApplication from "./pages/StartApplication";
// import StartYourApplication from "./pages/StartApplication";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover-nifc" element={<About />} />
          <Route path="/apply" element={<ComingSoon />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/events" element={<Events />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/becoming-nifc-firm" element={<NIFCFirm />} />
          <Route path="/why-nairobi" element={<WhyNairobi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/apply" element={<Enquiry />} />
          <Route path="/press-releases" element={<Articles />} />
          <Route path="/article" element={<ComingSoon />} />
          <Route path="/green-finance" element={<GreenFinance />} />
          <Route path="/investment-funds" element={<ComingSoon />} />
          <Route path="/fintech" element={<ComingSoon />} />
          <Route path="/multinationals" element={<ComingSoon />} />
          <Route path="/professional-services" element={<ComingSoon />} />
          <Route path="/other" element={<ComingSoon />} />
          <Route path="/target-sector" element={<TargetSector />} />
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/application-process" element={<ApplicationProcess />} />
          <Route path="/operating-in-nifc" element={<OperatingNIFC />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/global-financial-gateway" element={<FinancialGateway />} />
          <Route path="/strength-in-financial-services" element={<FinancialServices />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/lifestyle-nightlife" element={<Lifestyle />} />
          <Route path="/innovations" element={<Innovation />} />
          <Route path="/company-ledger" element={<ComingSoon />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/start-application" element={<StartYourApplication />} />
          <Route path="/one-stop-shop" element={<NIFCOneStopShop />} />
          <Route path="/immigration-support" element={<ImmigrationSupport />} />
          <Route path="/business-support" element={<BusinessSupport />} />
          <Route path="/sdg-pipeline-builder" element={<SDGPipelineBuilder  />} />
          <Route path="/tech-accelerator" element={<NIFCTechAccelerator />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/enquiry" element={<ComingSoon />} />
          <Route path="/enquiry" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
