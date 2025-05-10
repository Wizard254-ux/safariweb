// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import TestimonialsPage from './Pages/Testimonials';
import VlogAndBlogsPage from './Pages/Blogs&Vlogs';
import ContactUsPage from './Pages/ContactPage';
import { SafariDetailsComponent } from './Pages/PackagesDetails';
import PostDetailPage from './Pages/PostDetailsPage';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual loading logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/bloga&vlogs" element={<VlogAndBlogsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/details/:id/:category" element={<DetailsPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="pkgdetails/:id/safariPackage" element={<SafariDetailsComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
