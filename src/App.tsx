/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import PriceList from './pages/PriceList';
import QuoteCalculator from './pages/QuoteCalculator';
import ThankYou from './pages/ThankYou';
import FreeStorage from './pages/FreeStorage';
import Guide from './pages/Guide';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="price-list" element={<PriceList />} />
            <Route path="quote" element={<QuoteCalculator />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="free-storage" element={<FreeStorage />} />
            <Route path="guide" element={<Guide />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
