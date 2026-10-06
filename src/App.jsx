import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Labs from './pages/Labs.jsx';
import LabDetail from './pages/LabDetail.jsx';
import Research from './pages/Research.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  // Block body: scrollTo may return a Promise, which React would treat as a cleanup function.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/labs/:slug" element={<LabDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
