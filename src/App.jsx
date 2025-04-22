import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import PrivateRoute from "./components/PrivateRoute";

// Pages
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
import SDGPipelineBuilder from "./pages/SDGPipelineBuilder";
import NIFCTechAccelerator from "./pages/NIFCTechAccelerator";
import ComingSoon from "./pages/ComingSoon";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all public pages with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/discover-nifc"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/apply"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/enquiry"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/events"
          element={
            <MainLayout>
              <Events />
            </MainLayout>
          }
        />
        <Route
          path="/laws"
          element={
            <MainLayout>
              <Laws />
            </MainLayout>
          }
        />
        <Route
          path="/leadership"
          element={
            <MainLayout>
              <Leadership />
            </MainLayout>
          }
        />
        <Route
          path="/becoming-nifc-firm"
          element={
            <MainLayout>
              <NIFCFirm />
            </MainLayout>
          }
        />
        <Route
          path="/why-nairobi"
          element={
            <MainLayout>
              <WhyNairobi />
            </MainLayout>
          }
        />
        <Route
          path="/media"
          element={
            <MainLayout>
              <Media />
            </MainLayout>
          }
        />
        <Route
          path="/press-releases"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/article"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/green-finance"
          element={
            <MainLayout>
              <GreenFinance />
            </MainLayout>
          }
        />
        <Route
          path="/investment-funds"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/fintech"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/multinationals"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/professional-services"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/other"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/target-sector"
          element={
            <MainLayout>
              <TargetSector />
            </MainLayout>
          }
        />
        <Route
          path="/start-business"
          element={
            <MainLayout>
              <StartBusiness />
            </MainLayout>
          }
        />
        <Route
          path="/application-process"
          element={
            <MainLayout>
              <ApplicationProcess />
            </MainLayout>
          }
        />
        <Route
          path="/operating-in-nifc"
          element={
            <MainLayout>
              <OperatingNIFC />
            </MainLayout>
          }
        />
        <Route
          path="/frameworks"
          element={
            <MainLayout>
              <Frameworks />
            </MainLayout>
          }
        />
        <Route
          path="/our-team"
          element={
            <MainLayout>
              <Team />
            </MainLayout>
          }
        />
        <Route
          path="/partners"
          element={
            <MainLayout>
              <Partners />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/global-financial-gateway"
          element={
            <MainLayout>
              <FinancialGateway />
            </MainLayout>
          }
        />
        <Route
          path="/strength-in-financial-services"
          element={
            <MainLayout>
              <FinancialServices />
            </MainLayout>
          }
        />
        <Route
          path="/sustainability"
          element={
            <MainLayout>
              <Sustainability />
            </MainLayout>
          }
        />
        <Route
          path="/tourism"
          element={
            <MainLayout>
              <Tourism />
            </MainLayout>
          }
        />
        <Route
          path="/lifestyle-nightlife"
          element={
            <MainLayout>
              <Lifestyle />
            </MainLayout>
          }
        />
        <Route
          path="/innovations"
          element={
            <MainLayout>
              <Innovation />
            </MainLayout>
          }
        />
        <Route
          path="/company-ledger"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <MainLayout>
              <Careers />
            </MainLayout>
          }
        />
        <Route
          path="/start-application"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/one-stop-shop"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/immigration-support"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/business-support"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/sdg-pipeline-builder"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/tech-accelerator"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="/coming-soon"
          element={
            <MainLayout>
              <ComingSoon />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

        {/* Auth & Admin - outside MainLayout */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
