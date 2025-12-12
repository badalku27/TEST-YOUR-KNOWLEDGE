import React from 'react';
import BestOfLuck from './components/BestOfLuck';

const BestOfLuckDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <BestOfLuck />
      </div>
    </div>
  );
};

export default BestOfLuckDemo;
