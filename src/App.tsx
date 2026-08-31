/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { StoryCallout } from './components/StoryCallout';
import { MembershipBenefits } from './components/MembershipBenefits';
import { Testimonials } from './components/Testimonials';
import { RecentWork } from './components/RecentWork';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LoginModal, CheckoutModal, ProjectLightbox } from './components/Modals';
import { ShowcaseProject } from './types';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const scrollToBooking = () => {
    const bookEl = document.getElementById('book');
    if (bookEl) {
      bookEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] relative selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
      
      {/* Centered Structured Container with Signature Side Grid Border Lines */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 border-x border-white/5 relative">
        
        {/* Navigation Header */}
        <Header
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenBooking={scrollToBooking}
        />

        {/* Hero Section */}
        <HeroSection
          onOpenBooking={scrollToBooking}
          onOpenJoin={() => setIsCheckoutOpen(true)}
        />

        {/* How It Works 3-Step Cards & Logos */}
        <HowItWorks />

        {/* Founder Story Callout */}
        <StoryCallout />

        {/* Membership Benefits Grid & Carousel */}
        <MembershipBenefits />

        {/* Testimonials (Webflow & Kevin O'Leary) */}
        <Testimonials />

        {/* Recent Work Infinite Marquee & Service Tags */}
        <RecentWork
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Pricing Plan & Guarantees */}
        <PricingSection
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenBooking={scrollToBooking}
        />

        {/* FAQ Accordion & Quick Call Card */}
        <FaqSection
          onOpenBooking={scrollToBooking}
        />

      </div>

      {/* Full-width Dark Interactive Footer & Booking Scheduler */}
      <Footer />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
