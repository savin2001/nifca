
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import ApplicationProcess from './pages/ApplicationProcess';
import NotFound from './pages/NotFound';
import Enquiry from './pages/Enquiry';
import Events from './pages/Events';
import GreenFinance from './pages/GreenFinance';
import Laws from './pages/Laws';
import Leadership from './pages/Leadership';
import WhyNairobi from './pages/WhyNairobi';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/application-process" element={<ApplicationProcess/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/green-finance" element={<GreenFinance/>} />
          <Route path="/laws" element={<Laws/>} />
          <Route path="/leadership" element={<Leadership/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/why-nairobi" element={<WhyNairobi/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

