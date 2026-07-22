import Navbar from "@/components/Navbar";

export default function Team() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-5xl font-bold text-slate-900">
            Our Team
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            Our strength lies in our experienced professionals who are committed
            to delivering practical, timely, and reliable financial, taxation,
            and regulatory solutions.
          </p>

          <div className="mt-16 grid lg:grid-cols-2 gap-12">

            <div className="border rounded-xl p-8 shadow-sm">

              <div className="w-36 h-36 rounded-full bg-slate-200 mb-6"></div>

              <h2 className="text-3xl font-bold text-slate-900">
                Smita Patni
              </h2>

              <p className="text-slate-600 mt-2">
                Founder & Managing Partner
              </p>

              <p className="text-slate-700 mt-6 leading-8">
                With more than 30 years of experience in Chartered Accountancy,
                taxation, FEMA, RBI regulations, corporate advisory, and
                international taxation, she has advised businesses across
                multiple industries with practical and strategic solutions.
              </p>

            </div>

            <div className="border rounded-xl p-8 shadow-sm">

              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Professional Team
              </h2>

              <ul className="space-y-5 text-lg text-slate-700">
                <li>• Chartered Accountants</li>
                <li>• Tax Consultants</li>
                <li>• Corporate Advisors</li>
                <li>• GST Specialists</li>
                <li>• FEMA & RBI Consultants</li>
                <li>• Compliance Professionals</li>
              </ul>

              <p className="mt-10 text-slate-700">
                Together, our professionals work closely with clients to
                provide tailored financial and regulatory solutions while
                maintaining the highest standards of integrity and
                professionalism.
              </p>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}