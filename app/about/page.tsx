import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold">
            ABOUT US
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Building Trust Through
            <br />
            Expertise & Integrity.
          </h1>

          <p className="mt-8 text-lg text-slate-300 max-w-3xl leading-8">
            Smita Patni & Associates is a Chartered Accountancy firm
            committed to delivering taxation, regulatory, audit and
            advisory solutions to Indian businesses, multinational
            corporations and global investors.
          </p>

        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div className="rounded-3xl bg-slate-100 h-[420px] flex items-center justify-center text-slate-400 text-xl">
            Company / Office Image
          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold">
              WHO WE ARE
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Trusted advisors for
              modern businesses.
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Smita Patni & Associates has built a reputation for
              providing dependable professional services across
              taxation, regulatory compliance, audit and financial
              advisory. Our approach combines technical excellence
              with practical business understanding.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              We believe every client deserves strategic guidance,
              timely execution and long-term partnership rather
              than transactional consulting.
            </p>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold text-center">
            OUR VALUES
          </p>

          <h2 className="text-center text-4xl font-bold text-slate-900 mt-4">
            Principles that guide every engagement
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {[
              "Integrity & Ethics",
              "Technical Excellence",
              "Client-Centric Approach",
              "Long-Term Relationships",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex gap-4"
              >
                <CheckCircle2 className="text-amber-500 mt-1" />

                <div>
                  <h3 className="font-semibold text-xl text-slate-900">
                    {item}
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Delivering professional advice with quality,
                    transparency and commitment.
                  </p>
                </div>

              </div>
            ))}

                      </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold text-center">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-4xl font-bold text-center text-slate-900">
            Experience. Trust. Results.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

  {[
    { number: "20+", label: "Serving Clients for Over 20 Years" },
    { number: "2", label: "Office Locations" },
    { number: "100%", label: "Client Commitment" },
    { number: "Global", label: "Business Advisory" },
  ].map((item) => (
    <div
                key={item.label}
                className="rounded-2xl border border-slate-200 p-8 text-center hover:shadow-lg transition"
              >
                <h3 className="text-5xl font-bold text-amber-500">
                  {item.number}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Let's build a stronger financial future together.
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Whether you're a growing business, an international investor,
            or an established enterprise, our team is ready to provide
            strategic advice tailored to your needs.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}