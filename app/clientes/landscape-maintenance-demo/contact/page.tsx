"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiMailLine, RiMapPinLine, RiPhoneLine, RiMailSendLine, RiCheckLine } from "@remixicon/react";
import { useState } from "react";

/**
 * Contact Page of the Demo.
 * Includes functional form and contact details.
 * Translated to English.
 */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full bg-lm-fundo min-h-screen">
      {/* Header Section */}
      <section className="bg-lm-secundaria text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Request a free quote or ask about our seasonal ground maintenance services.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-lm-primaria/20 rounded-full -mr-48 -mt-48 blur-3xl" />
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form Container */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-lm-secundaria">Send a Message</h2>
                <p className="text-gray-500">Our team will get back to you within 24 business hours.</p>
              </div>

              {!submitted ? (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-bold text-lm-secundaria">Full Name</Label>
                      <Input id="name" placeholder="E.g. John Smith" required className="rounded-xl border-gray-300 focus:border-lm-primaria h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-bold text-lm-secundaria">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="rounded-xl border-gray-300 focus:border-lm-primaria h-12" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-bold text-lm-secundaria">Phone / WhatsApp</Label>
                    <Input id="phone" placeholder="00000 000000" required className="rounded-xl border-gray-300 focus:border-lm-primaria h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-bold text-lm-secundaria">Service of Interest</Label>
                    <Input id="service" placeholder="E.g. Lawn Maintenance" className="rounded-xl border-gray-300 focus:border-lm-primaria h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-bold text-lm-secundaria">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" required className="min-h-37.5 rounded-xl border-gray-300 focus:border-lm-primaria" />
                  </div>

                  <Button type="submit" className="w-full bg-lm-primaria hover:bg-lm-primaria/90 text-white font-bold h-14 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3">
                    <RiMailSendLine className="h-5 w-5" />
                    <span>Send Request</span>
                  </Button>
                </form>
              ) : (
                <div className="bg-white p-12 rounded-3xl shadow-2xl text-center space-y-6 border-2 border-lm-primaria animate-in zoom-in duration-500">
                  <div className="bg-lm-fundo w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <RiCheckLine className="h-12 w-12 text-lm-primaria" />
                  </div>
                  <h3 className="text-3xl font-bold text-lm-secundaria">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for contacting us. Our team will review your request and get back to you shortly.</p>
                  <Button variant="ghost" onClick={() => setSubmitted(false)} className="text-lm-primaria font-bold">
                    Send another message
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Details & Map Sidebar */}
            <div className="space-y-12">
              <Card className="bg-white border-none shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-lm-primaria text-white p-10">
                  <CardTitle className="text-2xl font-bold">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-lm-fundo p-4 rounded-2xl group-hover:bg-lm-primaria transition-colors duration-300">
                      <RiMapPinLine className="h-6 w-6 text-lm-primaria group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lm-secundaria text-lg">Our Address</h4>
                      <p className="text-gray-500">Unit 37, Finedon Road, Irthlingborough, Northamptonshire, NN9 5TY</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="bg-lm-fundo p-4 rounded-2xl group-hover:bg-lm-primaria transition-colors duration-300">
                      <RiPhoneLine className="h-6 w-6 text-lm-primaria group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lm-secundaria text-lg">Phone</h4>
                      <p className="text-gray-500">07887 555080</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="bg-lm-fundo p-4 rounded-2xl group-hover:bg-lm-primaria transition-colors duration-300">
                      <RiMailLine className="h-6 w-6 text-lm-primaria group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lm-secundaria text-lg">Email Address</h4>
                      <p className="text-gray-500">enquiries@LandscapeMaintenanceUK.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours Container */}
              <div className="bg-lm-secundaria rounded-3xl p-10 shadow-2xl text-white space-y-6">
                <h4 className="text-xl font-bold flex items-center space-x-3">
                  <div className="h-2 w-2 bg-lm-primaria rounded-full animate-pulse" />
                  <span>Business Hours</span>
                </h4>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Monday — Friday</span>
                    <span className="font-bold text-white">08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Saturday</span>
                    <span className="font-bold text-white">09:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between border-gray-700 pb-2">
                    <span>Sunday</span>
                    <span className="font-bold text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
