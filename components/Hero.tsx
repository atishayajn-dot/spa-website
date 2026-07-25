import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#08101F] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-amber-400 font-semibold text-sm">
              Serving Clients Since 2006
            </p>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Strategic Tax &
              <br />
              Legal Solutions
              <br />
              For Growing
              <br />
              Businesses
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
              Smita Patni & Associates delivers expert advisory in
              International Taxation, FEMA, RBI Regulations, GST,
              Corporate Law and Business Consulting with a strong
              commitment to professionalism, integrity and long-term
              client relationships.
            </p>

            {/* Trust Badges */}

            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={20} />
                <span>20+ Years Serving Clients</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={20} />
                <span>Delhi & Jaipur Offices</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={20} />
                <span>International Tax Specialists</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-amber-400" size={20} />
                <span>Client-First Approach</span>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-7 py-4 rounded-xl font-semibold transition"
              >
                Schedule Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white hover:text-slate-900 px-7 py-4 rounded-xl transition"
              >
                Explore Services
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-10">

              <div className="w-24 h-24 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-3xl font-bold mx-auto">
                SP
              </div>

              <h3 className="mt-6 text-3xl font-bold text-center">
                CA Smita Patni
              </h3>

              <p className="mt-2 text-center text-slate-300">
                Founder & Managing Partner
              </p>

              <div className="mt-8 border-t border-white/10 pt-8 space-y-4 text-slate-300">

                <div className="flex justify-between">
                  <span>Experience</span>
                  <span className="font-semibold text-white">25+ Years</span>
                </div>

                <div className="flex justify-between">
                  <span>Specialization</span>
                  <span className="font-semibold text-white">International Tax</span>
                </div>

                <div className="flex justify-between">
                  <span>Locations</span>
                  <span className="font-semibold text-white">Delhi & Jaipur</span>
                </div>

                <div className="flex justify-between">
                  <span>Services</span>
                  <span className="font-semibold text-white">Global Advisory</span>
                </div>

              </div>

              <Link
                href="/leadership"
                className="mt-10 block w-full text-center bg-white/10 hover:bg-white hover:text-slate-900 transition rounded-xl py-4 font-semibold"
              >
                Meet Our Leadership
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}