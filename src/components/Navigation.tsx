import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(() => {
    return localStorage.getItem('sidebarOpen') === 'true';
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
    localStorage.setItem('activePage', tabName);
    navigate(`/${tabName}`);
    // Don't close sidebar on navigation - let it persist
  };

  const toggleSidebar = () => {
    const newSidebarState = !isSidebarOpen;
    setSidebarOpen(newSidebarState);
    localStorage.setItem('sidebarOpen', newSidebarState.toString());
  };

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
                localStorage.getItem('activePage') === "" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
            </button>

            <button 
              onClick={() => handleTabChange("bloga&vlogs")} 
              className={`p-2 rounded-sm font-medium ${
                localStorage.getItem('activePage') === "bloga&vlogs" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Blogs & Vlogs
            </button>

            <button 
              onClick={() => handleTabChange("contact")} 
              className={`p-2 rounded-sm font-medium ${
                localStorage.getItem('activePage') === "contact" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Contact
            </button>

            <button 
              onClick={() => handleTabChange("testimonials")} 
              className={`p-2 rounded-sm font-medium ${
                localStorage.getItem('activePage') === "testimonials" 
                  ? "bg-green-100 text-green-600" 
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              Testimonials
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div 
            className={`fixed top-0 bottom-0 left-0 w-64 bg-gray-900 md:hidden transition-transform duration-300 ease-in-out z-50 flex flex-col justify-between ${
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
                    localStorage.getItem('activePage') === "" 
                      ? "bg-green-700 text-white" 
                      : "text-white hover:text-green-600"
                  }`}
                >
                  Home
                </button>

                <button 
                  onClick={() => handleTabChange("testimonials")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    localStorage.getItem('activePage') === "testimonials" 
                      ? "bg-green-700 text-white" 
                      : "text-white hover:text-green-600"
                  }`}
                >
                  Testimonials
                </button>

                <button 
                  onClick={() => handleTabChange("bloga&vlogs")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    localStorage.getItem('activePage') === "bloga&vlogs" 
                      ? "bg-green-700 text-white" 
                      : "text-white hover:text-green-600"
                  }`}
                >
                  Blogs & Vlogs
                </button>

                <button 
                  onClick={() => handleTabChange("contact")} 
                  className={`p-2 rounded-sm font-medium text-left ${
                    localStorage.getItem('activePage') === "contact" 
                      ? "bg-green-700 text-white" 
                      : "text-white hover:text-green-600"
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <button className="bg-green-600 w-full text-white px-3 py-2 rounded-md hover:bg-green-700">
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
            <button className="bg-green-600 hidden md:block text-white px-3 py-2 rounded-md hover:bg-green-700">
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