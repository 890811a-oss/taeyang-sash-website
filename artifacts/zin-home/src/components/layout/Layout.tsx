import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Navbar />
      <main className="flex-1 flex flex-col relative">
        {children}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
