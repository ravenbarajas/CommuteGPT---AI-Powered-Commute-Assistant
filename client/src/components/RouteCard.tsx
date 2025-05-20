import React from 'react';
import { RouteResponse } from '@/lib/mockData';

interface RouteCardProps {
  route: RouteResponse;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  return (
    <div className="mt-4 bg-[#f7f7f8] p-4 rounded-lg border border-gray-200">
      <h3 className="font-medium text-gray-900 mb-3">{route.title}</h3>
      <div className="space-y-3">
        {route.steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-3 text-lg flex-shrink-0">{step.icon}</span>
            <p className="text-gray-700">{step.text}</p>
          </div>
        ))}
        <div className="mt-4 pt-3 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="flex items-center">
            <span className="text-lg mr-2">💸</span>
            <span className="text-gray-700">Estimated Cost: {route.cost}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-2">⏱️</span>
            <span className="text-gray-700">{route.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
