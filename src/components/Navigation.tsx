import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get active page from URL instead of localStorage
  const getActivePage = () => {
    const path = location.pathname.substring(1); // Remove leading slash
    return path;
  };
  
  // Only use localStorage for sidebar state
  const [isSidebarOpen, setSidebarOpen] = useState(() => {
    try {
      return localStorage.getItem('sidebarOpen') === 'true';
    } catch (error) {
      console.error('localStorage error:', error);
      return false;
    }
  });
    
  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tabName: string) => {
    // Only navigate, don't close the sidebar
    navigate(`/${tabName}`);
  };

  // Store sidebar state in localStorage but with less frequency
  const toggleSidebar = () => {
    setSidebarOpen(prev => {
      try {
        // Update localStorage on toggle
        localStorage.setItem('sidebarOpen', (!prev).toString());
        return !prev;
      } catch (error) {
        console.error('localStorage error:', error);
        return !prev;
      }
    });
  };

  // Get active page from URL path
  const activePage = getActivePage();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-2 ">
          <div className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="h-18 w-18 p-0 mr-3" />
            <span className="font-bold text-xl text-green-600 hidden sm:inline">LYNNIE TRAVIS ADVENTURE</span>
            <span className="font-bold text-lg text-green-600 sm:hidden">LYNNIE TRAVIS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleTabChange("")} 
              className={`p-2 rounded-sm font-medium ${
                activePage === "" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </button>

            <button 
              onClick={() => handleTabChange("bloga&vlogs")} 
              className={`p-2 rounded-sm font-medium ${
                activePage === "bloga&vlogs" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Blogs & Vlogs
            </button>


            <button 
              onClick={() => handleTabChange("AboutUsPage")} 
              className={`p-2 rounded-sm font-medium ${
                activePage === "AboutUsPage" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              About Us
            </button>

            <button 
              onClick={() => handleTabChange("testimonials")} 
              className={`p-2 rounded-sm font-medium ${
                activePage === "testimonials" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Testimonials
            </button>
            
            <button 
              onClick={() => handleTabChange("contact")} 
              className={`p-2 rounded-sm font-medium ${
                activePage === "contact" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div 
            className={`fixed top-0 bottom-0 left-0 w-64 bg-gray-900 md:hidden transition-transform duration-300 ease-in-out z-[100000] flex flex-col justify-between ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <span className="text-white font-bold text-xl">Menu</span>
                <X className="h-6 w-6 text-white cursor-pointer" onClick={toggleSidebar} />
              </div>
              
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => handleTabChange("")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    activePage === "" 
                      ? "bg-green-600 text-white" 
                      : "text-white hover:bg-green-700 hover:text-white"
                  }`}
                >
                  Home
                </button>

                <button 
                  onClick={() => handleTabChange("testimonials")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    activePage === "testimonials" 
                      ? "bg-green-600 text-white" 
                      : "text-white hover:bg-green-700 hover:text-white"
                  }`}
                >
                  Testimonials
                </button>

                <button 
                  onClick={() => handleTabChange("AboutUsPage")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    activePage === "bloga&vlogs" 
                      ? "bg-green-600 text-white" 
                      : "text-white hover:bg-green-700 hover:text-white"
                  }`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => handleTabChange("bloga&vlogs")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    activePage === "bloga&vlogs" 
                      ? "bg-green-600 text-white" 
                      : "text-white hover:bg-green-700 hover:text-white"
                  }`}
                >
                  Blogs & Vlogs
                </button>

                <button 
                  onClick={() => handleTabChange("contact")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    activePage === "contact" 
                      ? "bg-green-600 text-white" 
                      : "text-white hover:bg-green-700 hover:text-white"
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <button onClick={() => handleTabChange('contact')} className="bg-green-600 w-full text-white px-3 py-2 rounded-md hover:bg-green-700">
                Book Now
              </button>
            </div>
         
          </div>
          
          {/* Overlay when sidebar is open */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 md:hidden z-40"
              onClick={toggleSidebar}
            />
          )}
          
          <div className="flex items-center">
            <button onClick={() => handleTabChange('contact')} className="bg-green-600 hidden md:block text-white px-3 py-2 rounded-md hover:bg-green-700">
              Book Now
            </button>
            <Menu 
              className="md:hidden h-6 w-6 text-gray-700 cursor-pointer ml-4" 
              onClick={toggleSidebar}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};