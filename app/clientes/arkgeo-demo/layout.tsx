import type { Metadata } from "next";
import React from "react";
import "./theme.css";

/**
 * Metadados — ArkGeo 3.0 (Blue Edition)
 */
export const metadata: Metadata = {
  title: "ArkGeo Engineering S.r.l. | Multisectoral Engineering",
  description: "Advanced engineering, surveying, and architectural projects since 2007. Leading innovation in Maglie and Roma.",
};

export default function ArkGeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Otimização de Fontes via Layout - WIG & Next.js Best Practices */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet"
      />
      
      <div className="arkgeo-3-theme min-h-screen selection:bg-blue-600 selection:text-white">
        {children}
      </div>
    </>
  );
}
