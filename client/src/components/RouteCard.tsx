import React from 'react';
import { RouteResponse } from '@/lib/mockData';

interface RouteCardProps {
  route: RouteResponse;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  return (
    <div className="mt-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-2">{route.title}</h3>
      <div className="space-y-2">
        {route.steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-2 text-lg">{step.icon}</span>
            <p className="text-gray-700">{step.text}</p>
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between">
          <div className="flex items-center">
            <span className="text-lg mr-1">💸</span>
            <span className="text-gray-700">Estimated Cost: {route.cost}</span>
          </div>
          <div className="flex items-center">
            <span className="text-lg mr-1">⏱️</span>
            <span className="text-gray-700">{route.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
