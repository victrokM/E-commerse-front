import Header from "@/components/Header";
import React, { JSX } from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props): JSX.Element {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
}
