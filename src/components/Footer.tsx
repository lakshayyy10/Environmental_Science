import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">EcoWaste</h3>
            <p className="text-gray-400">
              Working together for a cleaner, sustainable future through better waste management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#global-waste" className="text-gray-400 hover:text-emerald-400">Global Overview</a></li>
              <li><a href="#solutions" className="text-gray-400 hover:text-emerald-400">Solutions</a></li>
              <li><a href="#tips" className="text-gray-400 hover:text-emerald-400">Tips</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-emerald-400">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#education" className="text-gray-400 hover:text-emerald-400">Educational Materials</a></li>
              <li><a href="#regulations" className="text-gray-400 hover:text-emerald-400">Regulations</a></li>
              <li><a href="#involved" className="text-gray-400 hover:text-emerald-400">Get Involved</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EcoWaste. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}