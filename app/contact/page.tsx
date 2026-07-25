import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900">
              Contact Us
            </h1>

            <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us through our offices,
              email, phone, or connect instantly on WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">

            {/* Left Side */}

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10">

              <h2 className="text-3xl font-bold text-slate-900 mb-10">
                Office Information
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Delhi Office
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    Winter Hills Apartments,
                    Flat No. G-1004,
                    Shanti Park,
                    Dwarka,
                    New Delhi – 110059
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Jaipur Office
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    SB-2,
                    Bhawani Singh Marg,
                    Bapu Nagar,
                    Jaipur – 302015
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Phone
                  </h3>

                  <a
                    href="tel:+919310955444"
                    className="mt-2 block text-slate-600 hover:text-amber-600 transition"
                  >
                    +91 93109 55444
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Email
                  </h3>

                  <a
                    href="mailto:smitapassociates@gmail.com"
                    className="mt-2 block text-slate-600 hover:text-amber-600 transition"
                  >
                    smitapassociates@gmail.com
                  </a>

                  <a
                    href="mailto:tax@smitapassociates.com"
                    className="block text-slate-600 hover:text-amber-600 transition"
                  >
                    tax@smitapassociates.com
                  </a>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-10 text-center">

              <h2 className="text-3xl font-bold text-slate-900">
                Connect on WhatsApp
              </h2>

              <p className="mt-4 text-slate-600">
                Scan the QR code below to start a conversation with our team.
              </p>

              <div className="mt-8 flex justify-center">

                <Image
                  src="/images/My_QR_Code_1-1024.jpeg"
                  alt="WhatsApp QR Code"
                  width={240}
                  height={240}
                  className="rounded-xl border border-slate-200 shadow-sm"
                />

              </div>

              <a
                href="https://wa.me/919310955444"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-2xl font-semibold text-slate-900 hover:text-amber-600 transition"
              >
                +91 93109 55444
              </a>

              <p className="mt-4 text-slate-500">
                We aim to respond to all enquiries within 24 working hours.
              </p>

              <a
                href="https://wa.me/919310955444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 rounded-xl bg-slate-900 px-8 py-4 text-white font-medium hover:bg-amber-600 transition"
              >
                Chat on WhatsApp
              </a>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}