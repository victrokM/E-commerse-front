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
      <main className="flex w-full justify-center items-center">
        <div className="flex w-full justify-center items-center flex-col max-w-[1400px] h-full gap-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
