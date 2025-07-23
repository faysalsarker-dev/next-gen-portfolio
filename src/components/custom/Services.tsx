'use client';


import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'AI & Automation',
    price: '$ Xxx',
    icon: '/ai.png',
    features: [
      'AI Chatbots & Agents',
      'Custom Automation Tools',
      'Data-Driven Optimization',
      'Auto Lead Gen & CRM'
    ]
  },
  {
    title: 'Web & App Development',
    price: '$ Xxx',
    icon: '/atom.png',
    features: [
      'Modern UI/UX Design',
      'Full-stack Development',
      'Responsive Mobile Support',
      'SEO + Performance Boost'
    ]
  },
  {
    title: 'Tech Growth Support',
    price: '$ Xxx',
    icon: '/lightbulb.png',
    features: [
      'Growth Strategy Planning',
      'Conversion Optimization',
      'Maintenance & Support',
      'Analytics & Tracking Setup'
    ]
  },
  {
    title: 'AI & Automation',
    price: '$ Xxx',
    icon: '/ai.png',
    features: [
      'AI Chatbots & Agents',
      'Custom Automation Tools',
      'Data-Driven Optimization',
      'Auto Lead Gen & CRM'
    ]
  },
  {
    title: 'Web & App Development',
    price: '$ Xxx',
    icon: '/atom.png',
    features: [
      'Modern UI/UX Design',
      'Full-stack Development',
      'Responsive Mobile Support',
      'SEO + Performance Boost'
    ]
  },
  {
    title: 'Tech Growth Support',
    price: '$ Xxx',
    icon: '/lightbulb.png',
    features: [
      'Growth Strategy Planning',
      'Conversion Optimization',
      'Maintenance & Support',
      'Analytics & Tracking Setup'
    ]
  },
];

export default function Services() {
  return (
    <section className="relative z-10 px-4 py-24 bg-background text-white max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto text-center mb-16">
        
        <h2 className="text-4xl font-bold">What I Can Build For You</h2>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Future-ready digital solutions — fast, reliable, and aligned with your goals
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            idx={idx}
            title={service.title}
            icon={service.icon}
            price={service.price}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
}
