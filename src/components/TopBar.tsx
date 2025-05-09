// components/TopBar.tsx
import React from 'react';
import {useNavigate} from 'react-router-dom';
export const TopBar: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className=" mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">Email: Info@lynnietravis-adventuers.com
        | Phone: +254 759491995‬
        </div>
        <div>
          <button onClick={()=>navigate('/contact')} className="text-sm px-3 py-1 bg-transparent border border-white rounded-md">Contact Us</button>
        </div>
      </div>
    </div>
  );
};