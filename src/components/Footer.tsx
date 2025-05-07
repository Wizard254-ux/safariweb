import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';



const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Top Section with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 pb-10 border-b border-green-700">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              {/* <img src="/Logo.png" alt="Lynnie Travis Adventure" className="h-16 w-16 rounded-full mr-3" /> */}
              <div>
                <h3 className="text-xl font-bold">LYNNIE TRAVIS</h3>
                <h4 className="text-green-400 font-semibold">ADVENTURE</h4>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mt-4">Experience the magic of Africa with our expertly guided safaris and adventures, creating memories that will last a lifetime.</p>
          </div>
          
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l text-white w-full border-2 border-white md:w-64 focus:outline-none" 
              />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r font-medium transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-200">Bush Safaris</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Air Safaris</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Beach Excursions</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Cultural Safaris</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Sports & Golf</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Blogs & Vlogs</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Travel Tips</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300 transition duration-200">Maasai Mara</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Diani Beach</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Mount Kenya</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Amboseli National Park</a></li>
              <li><a href="#" className="hover:text-green-300 transition duration-200">Lake Nakuru</a></li>
            </ul>

          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>07118875444</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@lynnietravis.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-3 border-t border-green-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} Lynnie Travis Adventure. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-200">
              <Facebook size={18} />
            </a>
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-200">
              <Instagram size={18} />
            </a>
            <a href="#" className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition duration-200">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;