import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}