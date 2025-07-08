'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; 
import Image from 'next/image';

const services = [
  {
    title: 'AI & Automation',
    price: '$ Xxx',
    icon: '/icons/ai.png',
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
    icon: '/icons/website.png',
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
    icon: '/icons/support.png',
    features: [
      'Growth Strategy Planning',
      'Conversion Optimization',
      'Maintenance & Support',
      'Analytics & Tracking Setup'
    ]
  }
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
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl p-6 transition-all"
          >
            {/* Glowing top bar */}
            <div className="absolute top-0 left-1/2 h-[5px] w-[80%] -translate-x-1/2 rounded-full bg-primary blur-sm shadow-[0_0_15px_theme(colors.primary)]"></div>

            {/* Icon */}
            <div className="flex items-center justify-start mb-4">
              <Image src={service.icon} alt={service.title} width={60} height={60} className="drop-shadow-lg" />
            </div>

            {/* Title + Price */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-accent font-medium">{service.price}</p>
            </div>

            {/* Feature List */}
            <ul className="space-y-2 text-sm mb-6 text-white/90">
              {service.features.map((feature, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-primary">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Start Button */}
            <div className="text-center">
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Start Now
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
