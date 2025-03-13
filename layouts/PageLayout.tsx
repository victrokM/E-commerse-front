import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { JSX } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props): JSX.Element {
  return (
    <div>
      <Header></Header>
      <main className="flex justify-center items-center flex-col max-w-[1400px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
