import { Facebook, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate()
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
              <li><button onClick={()=>navigate('/')} className="hover:text-green-300 transition duration-200">Home</button></li>
              <li><button onClick={()=>navigate('/AboutUsPage')} className="hover:text-green-300 transition duration-200">About Us</button></li>
              <li><button onClick={()=>navigate('/testimonials')} className="hover:text-green-300 transition duration-200">Testimonials</button></li>
              <li><button onClick={()=>navigate('/bloga&vlogs')} className="hover:text-green-300 transition duration-200">Blogs & Vlogs</button></li>
              <li><button onClick={()=>navigate('/contact')} className="hover:text-green-300 transition duration-200">Contact Us</button></li>
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
                <span>Info@lynnietravis-adventuers.com.com</span>
              </li>
              {/* <li className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>Hr@lynnietravisadventures.com</span>
              </li> */}
              {/* <li className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>Ceo@lynnietravisadventures.com</span>
              </li> */}
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
            <a href="https://www.facebook.com/lynnietravis19820?mibextid=ZbWKwL" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/lynnietravis_adventures/profilecard/?igsh=MWV6NzBmZ2Fqcm51OQ==" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
              <Instagram size={16} />
            </a>
            {/* <a href="" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
             size={16} />
            </a> */}
            <a href="https://youtube.com/@lynnietravisadventures20travel?si=0YvCcqJmNSGtscMA" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
              <Youtube size={16} />
            </a>
              <a href="https://vm.tiktok.com/ZMSegAP9j/" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </a>
      <a href="https://whatsapp.com/channel/0029VbATYBSHVvTfnqy1Xj1U" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z" />
          <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1z" />
          <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5z" />
        </svg>
      </a>
       <a href="https://www.linkedin.com/in/your-profile" className="bg-green-700 p-1.5 rounded-full hover:bg-green-600 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;