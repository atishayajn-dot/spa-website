"use client";

import { Building2, Globe2, ShieldCheck, Award } from "lucide-react";

export default function Stats() {
  const stats = [
   {
  icon: <Award size={32} />,
  number: "Since 2006",
  title: "Firm Established",
  description: "Smita Patni & Associates has been serving businesses for over 20 years.",
},
    {
      icon: <Building2 size={32} />,
      number: "2",
      title: "Office Locations",
      description: "Serving clients from Delhi and Jaipur.",
    },
    {
      icon: <Globe2 size={32} />,
      number: "Global",
      title: "International Advisory",
      description: "Specialists in FEMA, RBI and cross-border taxation.",
    },
    {
      icon: <ShieldCheck size={32} />,
      number: "100%",
      title: "Client Commitment",
      description: "Professional, confidential and reliable service.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Trusted by Businesses Across India & Beyond
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-amber-600">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-slate-900">
                {item.number}
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-3 text-slate-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}