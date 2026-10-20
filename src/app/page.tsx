'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveTicker from "@/components/LiveTicker";
import InteractiveDemo from "@/components/InteractiveDemo";
import HowItWorks from "@/components/HowItWorks";
import EarningsCalculator from "@/components/EarningsCalculator";
import OpenSource from "@/components/OpenSource";
import ForAdvertisers from "@/components/ForAdvertisers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import InstallModal from "@/components/InstallModal";

export default function Home() {
  const [installModalOpen, setInstallModalOpen] = useState(false);

  const openInstall = () => setInstallModalOpen(true);
  const closeInstall = () => setInstallModalOpen(false);

  return (
    <main className="relative min-h-screen bg-[#05070a] text-white selection:bg-emerald-500 selection:text-black">
      <Navbar onOpenInstall={openInstall} />
      <Hero onOpenInstall={openInstall} />
      <LiveTicker />
      <InteractiveDemo />
      <HowItWorks />
      <EarningsCalculator onOpenInstall={openInstall} />
      <OpenSource />
      <ForAdvertisers />
      <FAQ />
      <Footer />

      {/* Interactive Install Modal & Direct ZIP Downloader */}
      <InstallModal isOpen={installModalOpen} onClose={closeInstall} />
    </main>
  );
}
