import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";

export function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
