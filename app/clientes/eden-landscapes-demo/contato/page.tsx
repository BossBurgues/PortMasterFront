"use client";

import React from "react";

/**
 * Eden Landscapes Contact Page
 * Premium contact form with clear action-oriented layout and localized details.
 * Content in English for the UK market.
 */
export default function Contato87() {
  return (
    <div className="flex flex-col pb-20">
      {/* Hero Section */}
      <section className="bg-white py-24 border-b border-[#183102]/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#183102]/40 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 text-[#183102]">Start Your Transformation</h1>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to redesign your garden? Contact us for a free, no-obligation quote or to discuss your ideas.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-6xl">
        {/* Contact Information */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl text-[#183102] mb-8">Contact Details</h2>
            <div className="space-y-8">
              <ContactInfoItem 
                title="Location" 
                detail="Whitley Bay, Newcastle, UK" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>}
              />
              <ContactInfoItem 
                title="Phone" 
                detail="T: 0191 251 2057 | M: 07912161651" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>}
              />
              <ContactInfoItem 
                title="Email" 
                detail="hello@edenlandscapes.uk.net" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>}
              />
            </div>
          </div>
          
          <div className="p-8 bg-[#183102]/5 rounded-4xl border border-[#183102]/10 space-y-4">
             <h3 className="font-serif text-xl text-[#183102]">Consultation Process</h3>
             <p className="text-sm text-[#4A4A4A] leading-relaxed">
                Initially, we will discuss your requirements either by phone or via the contact form. This is followed by a site visit to measure up and dive deeper into the design possibilities. You will then receive a tailored, no-obligation quote.
             </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-[#183102]/5">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormGroup label="Full Name" placeholder="Your name…" type="text" />
              <FormGroup label="Email Address" placeholder="Email address…" type="email" />
            </div>
            <FormGroup label="Phone Number" placeholder="Your phone…" type="tel" />
            <FormGroup label="Service Required" placeholder="Choose service (e.g. Fencing, Design)…" type="text" />
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#183102]/40 ml-4">Message</label>
              <textarea 
                className="w-full bg-[#183102]/5 rounded-2xl p-6 min-h-37.5 outline-none border border-transparent focus:border-[#183102]/20 focus:bg-white transition-all text-sm placeholder:text-[#9A9A9A]"
                placeholder="How can we help you?…"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#183102] text-white py-6 rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
              onClick={(e) => e.preventDefault()}
            >
              Send Enquiry
            </button>
            <p className="text-[10px] text-center text-[#9A9A9A] px-12">
              By submitting this form, you agree to our privacy policy. We will only use your details to contact you regarding your enquiry.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

function ContactInfoItem({ title, detail, icon }: { title: string, detail: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-6 group">
      <div className="w-14 h-14 bg-[#183102]/5 text-[#183102] rounded-2xl flex items-center justify-center transition-colors group-hover:bg-[#183102] group-hover:text-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-widest text-[#183102]/40 mb-1">{title}</span>
        <span className="text-lg font-serif text-[#183102] leading-tight">{detail}</span>
      </div>
    </div>
  );
}

function FormGroup({ label, placeholder, type }: { label: string, placeholder: string, type: string }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs font-bold uppercase tracking-widest text-[#183102]/40 ml-4">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-[#183102]/5 rounded-full px-6 py-4 outline-none border border-transparent focus:border-[#183102]/20 focus:bg-white transition-all text-sm placeholder:text-[#9A9A9A]"
      />
    </div>
  );
}
