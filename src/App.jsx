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

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover-nifc" element={<About />} />
          <Route path="/apply" element={<ApplicationProcess />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/events" element={<Events />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/becoming-nifc-firm" element={<NIFCFirm />} />
          <Route path="/why-nairobi" element={<WhyNairobi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/apply" element={<Enquiry />} />
          <Route path="/press-releases" element={<Articles />} />
          <Route path="/article" element={<Article />} />
          <Route path="/green-finance" element={<GreenFinance />} />
          <Route path="/investment-funds" element={<GreenFinance />} />
          <Route path="/multinationals" element={<GreenFinance />} />
          <Route path="/professional-services" element={<GreenFinance />} />
          <Route path="/other" element={<GreenFinance />} />
          <Route path="/target-sector" element={<TargetSector />} />
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/application-process" element={<ApplicationProcess />} />
          <Route path="/operating-in-nifc" element={<OperatingNIFC />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<GreenFinance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
