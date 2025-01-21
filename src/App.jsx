
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
import NIFCFirm from './pages/NIFCFirm';
import Media from './pages/Media';
import Articles from './pages/Articles';
import Article from './pages/Article';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover-nifc" element={<About />} />
          <Route path="/apply" element={<ApplicationProcess/>} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/green-finance" element={<GreenFinance/>} />
          <Route path="/laws" element={<Laws/>} />
          <Route path="/leadership" element={<Leadership/>} />
          <Route path="/becoming-nifc-firm" element={<NIFCFirm/>} />
          <Route path="/why-nairobi" element={<WhyNairobi/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/apply" element={<Enquiry/>} />
          <Route path="/press-releases" element={<Articles/>} />
          <Route path="/article" element={<Article/>} />
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

