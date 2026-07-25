import Link from "next/link";
import { ArrowRight, Award, Briefcase, GraduationCap } from "lucide-react";

export default function LeadershipPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.35em] text-amber-400 font-semibold">
            LEADERSHIP
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            Leadership Built
            <br />
            On Trust & Expertise.
          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-8 max-w-3xl">
            Meet the professionals leading Smita Patni & Associates with
            decades of experience in taxation, advisory, audit and
            regulatory consulting.
          </p>

        </div>
      </section>

      {/* Managing Partner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div className="h-[500px] rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 text-xl">
            Managing Partner Photo
          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-amber-500 font-semibold">
              FOUNDER & MANAGING PARTNER
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              CA Smita Patni
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Smita Patni leads the firm with decades of professional
              experience in international taxation, FEMA advisory,
              transfer pricing, audit and strategic financial consulting.
              Her approach combines technical excellence with practical
              business understanding to deliver long-term value for
              clients.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

              <div className="flex gap-4">
                <Award className="text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold">
                    Experience
                  </h3>
                  <p className="text-slate-600">
                    30+ Years
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <GraduationCap className="text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold">
                    Qualification
                  </h3>
                  <p className="text-slate-600">
                    Chartered Accountant
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Briefcase className="text-amber-500 mt-1" />
                <div>
                  <h3 className="font-semibold">
                    Expertise
                  </h3>
                  <p className="text-slate-600">
                    International Taxation
                  </p>
                </div>
              </div>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
            >
              Schedule Consultation
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>
      </section>

      {/* PROFESSIONAL TEAM */}

<section className="mt-24">
  <div className="text-center mb-14">
    <h2 className="text-4xl font-bold text-slate-900">
      Our Professional Team
    </h2>

    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
      A dedicated team of professionals committed to delivering
      exceptional service and building lasting client relationships.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

    {[
      {
        name: "Team Member",
        role: "Senior Associate",
        desc: "Experienced professional supporting taxation, advisory and client engagement."
      },
      {
        name: "Team Member",
        role: "Tax Consultant",
        desc: "Assists clients with direct taxation, GST and regulatory compliance."
      },
      {
        name: "Team Member",
        role: "Accountant",
        desc: "Manages accounting operations, reporting and financial documentation."
      },
      {
        name: "Team Member",
        role: "Compliance Executive",
        desc: "Coordinates statutory filings and corporate compliance requirements."
      },
      {
        name: "Team Member",
        role: "Accounts Executive",
        desc: "Supports bookkeeping, reconciliations and day-to-day financial operations."
      },
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
      >

        <div className="w-24 h-24 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-700">
          {member.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-2 text-amber-600 font-semibold">
          {member.role}
        </p>

        <p className="mt-5 text-slate-600 leading-7">
          {member.desc}
        </p>

      </div>
    ))}

  </div>
</section>

      {/* Leadership Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-slate-900">
            Our Leadership Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {[
              "Integrity",
              "Technical Excellence",
              "Client Focus",
              "Strategic Thinking",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 p-8 text-center hover:shadow-lg transition"
              >
                <Award className="mx-auto text-amber-500 mb-4" />

                <h3 className="text-xl font-semibold text-slate-900">
                  {item}
                </h3>

                <p className="mt-3 text-slate-600">
                  Professional advice delivered with trust,
                  expertise and long-term commitment.
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
            Work with our leadership team.
          </h2>

          <p className="mt-6 text-slate-300 text-lg leading-8">
            Connect with our experienced professionals to discuss your
            taxation, advisory or compliance requirements.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-amber-400 transition"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>

    </main>
  );
}