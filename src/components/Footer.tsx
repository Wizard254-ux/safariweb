import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-5">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 pb-8 border-b border-green-700">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-3">
              <div>
                <h3 className="text-lg font-bold">LYNNIE TRAVIS</h3>
                <h4 className="text-green-400 text-sm font-semibold">ADVENTURE</h4>
              </div>
            </div>
            <p className="text-gray-300 text-sm max-w-md mt-3">Experience the magic of Africa with our expertly guided safaris and adventures, creating memories that will last a lifetime.</p>
          </div>
          
          <div className="w-full md:w-auto">
            <h3 className="text-base font-semibold mb-3">Subscribe to Our Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-3 py-2 rounded-l text-white w-full border-2 border-white md:w-60 focus:outline-none text-sm" 
              />
              <button className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded-r text-sm font-medium transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="text-base font-semibold mb-3">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-300 transition duration-200">Bush Safaris</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Air Safaris</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Beach Excursions</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Cultural Safaris</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Sports & Golf</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3">Information</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-green-300 transition duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Blogs & Vlogs</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Travel Tips</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3">Top Destinations</h3>
            <div className="text-xs">
              <span className="text-green-400 font-semibold">AFRICA:</span>
              <span className="text-gray-300"> Kenya, Tanzania, Uganda, Rwanda, South Africa, Egypt</span>
              
              <div className="mt-1.5">
                <span className="text-green-400 font-semibold">ASIA:</span>
                <span className="text-gray-300"> Malaysia, Thailand, Singapore, Bali, China, Japan, Vietnam</span>
              </div>
              
              <div className="mt-1.5">
                <span className="text-green-400 font-semibold">MIDDLE EAST:</span>
                <span className="text-gray-300"> Turkey, Dubai, Jordan, Israel</span>
              </div>
              
              <div className="mt-1.5">
                <span className="text-green-400 font-semibold">EUROPE:</span>
                <span className="text-gray-300"> Greece, France, Italy, Switzerland, Belgium, Netherlands, Germany, Austria</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span>+254 759491995‬</span>
              </li>
              <li className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span>‪+254 745470217‬</span>
              </li>
              <li className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>Info@lynnietravis-adventuers.com</span>
              </li>
              <li className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>Hr@lynnietravisadventures.com</span>
              </li>
              <li className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>Ceo@lynnietravisadventures.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={14} className="mr-2 mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-3 border-t border-green-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <p className="text-xs text-gray-300">© {new Date().getFullYear()} Lynnie Travis Adventure. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-3">
            <a href="#" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
              <Facebook size={16} />
            </a>
            <a href="#" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
              <Instagram size={16} />
            </a>
            <a href="#" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;