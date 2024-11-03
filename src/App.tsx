import React from 'react';
import { Globe2, Recycle, Leaf, Trash2, LineChart, BookOpen, Users, FileText, GraduationCap, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalWaste from './components/GlobalWaste';
import WasteLifecycle from './components/WasteLifecycle';
import EnvironmentalImpact from './components/EnvironmentalImpact';
import DisposalMethods from './components/DisposalMethods';
import SustainableSolutions from './components/SustainableSolutions';
import WasteTips from './components/WasteTips';
import Regulations from './components/Regulations';
import Blog from './components/Blog';
import Education from './components/Education';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

const sections = [
  { id: 'global-waste', icon: Globe2, title: 'Global Waste Overview' },
  { id: 'lifecycle', icon: Recycle, title: 'Waste Lifecycle' },
  { id: 'impact', icon: Leaf, title: 'Environmental Impact' },
  { id: 'disposal', icon: Trash2, title: 'Current Disposal Methods' },
  { id: 'solutions', icon: LineChart, title: 'Sustainable Solutions' },
  { id: 'tips', icon: BookOpen, title: 'Waste Reduction Tips' },
  { id: 'regulations', icon: Users, title: 'Regulations & Policies' },
  { id: 'blog', icon: FileText, title: 'Blog & News' },
  { id: 'education', icon: GraduationCap, title: 'Educational Resources' },
  { id: 'involved', icon: Heart, title: 'Get Involved' },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar sections={sections} />
      <main>
        <Hero />
        <GlobalWaste />
        <WasteLifecycle />
        <EnvironmentalImpact />
        <DisposalMethods />
        <SustainableSolutions />
        <WasteTips />
        <Regulations />
        <Blog />
        <Education />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}

export default App;