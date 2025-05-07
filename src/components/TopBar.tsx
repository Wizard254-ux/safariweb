// components/TopBar.tsx
import React from 'react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className=" mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">Email: info@safariexplorer.com | Phone: +123-456-7890</div>
        <div>
          <button className="text-sm px-3 py-1 bg-transparent border border-white rounded-md">Sign In</button>
        </div>
      </div>
    </div>
  );
};