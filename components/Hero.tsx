import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#08101F] text-white flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      <div className="relative max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold">
            Since 2006
          </p>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Strategic Tax
            <br />
            & Legal Solutions
            <br />
            for Indian &
            <br />
            Global Businesses.
          </h1>

          <p className="mt-10 text-xl leading-9 text-slate-300 max-w-xl">
            Smita Patni & Associates provides expert advisory in
            International Taxation, FEMA, RBI Regulations, GST,
            Corporate Law and Business Consulting with a client-first
            approach.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/services"
              className="border border-white/30 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl transition"
            >
              Explore Services
            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hidden lg:flex justify-center">

          <div className="w-[500px] h-[500px] rounded-3xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border border-white/10 shadow-2xl flex items-center justify-center">

            <div className="text-center px-10">

              <h3 className="text-3xl font-bold">
                Smita Patni
              </h3>

              <p className="mt-4 text-slate-300">
                Founder & Managing Partner
              </p>

              <div className="mt-10 space-y-4 text-slate-300">

                <p>International Taxation</p>

                <p>Corporate Advisory</p>

                <p>FEMA & RBI</p>

                <p>GST & Regulatory Services</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}