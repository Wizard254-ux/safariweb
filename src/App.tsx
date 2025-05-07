// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage'; // Example for future page
import TestimonialsPage from './Pages/Testimonials'; // Example for future page
import VlogAndBlogsPage from './Pages/Blogs&Vlogs'; // Example for future page
import ContactUsPage from './Pages/ContactPage'; // Example for future page
import { SafariDetailsComponent } from './Pages/PackagesDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/bloga&vlogs" element={<VlogAndBlogsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/details/:id/:category" element={<DetailsPage />} />
        <Route path="pkgdetails/:id/safariPackage" element={<SafariDetailsComponent />} />

      </Routes>
    </Router>
  );
};

export default App;
