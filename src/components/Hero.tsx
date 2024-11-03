import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Understanding Global Waste Management
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Explore the challenges and solutions in waste management across the globe.
          Learn how we can work together for a cleaner, sustainable future.
        </p>
        <a
          href="#global-waste"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          Start Exploring
          <ArrowDown size={20} />
        </a>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-white" />
      </div>
    </div>
  );
}