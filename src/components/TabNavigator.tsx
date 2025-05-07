
// components/TabNavigator.tsx
import React from 'react';

interface TabNavigatorProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const TabNavigator: React.FC<TabNavigatorProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'bush-safaris', label: 'Bush Safaris' },
    { id: 'air-safaris', label: 'Air Safaris' },
    { id: 'beach-excursions', label: 'Beach Excursions' },
    { id: 'cultural-safaris', label: 'Cultural Safaris' },
    { id: 'sports-golf', label: 'Sports & Golf' },
    { id: 'Travel-Packages', label: 'Travel packages' },
  ];
  
  return (
    <div className="flex overflow-x-auto py-2 scrollbar-hide">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
