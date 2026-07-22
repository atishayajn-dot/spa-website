import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-5xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-slate-700">
            We'd love to hear from you. Get in touch using the details below.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-16">

            {/* Left Side */}

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Office Information
              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Delhi Office
                  </h3>
                  <p className="text-slate-700 mt-1">
                    Winter Hills Apartments, Flat No. G-1004, Shanti Park,
Dwarka New Delhi -110059

                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Jaipur Office
                  </h3>
                  <p className="text-slate-700 mt-1">
                    SB-2, Bhawani Singh Marg, Bapu Nagar, Jaipur-302015
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Phone
                  </h3>
                  <p className="text-slate-700 mt-1">
                    +91-9310955444
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Email
                  </h3>
                  <p className="text-slate-700 mt-1">
                     smitapassociates@gmail.com and
                     tax@smitapassociates.com
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side */}

            <div>

              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Send us a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-slate-600 focus:border-slate-900 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-slate-600 focus:border-slate-900 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-slate-600 focus:border-slate-900 focus:outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full rounded-lg border border-gray-300 bg-white p-4 text-slate-900 placeholder:text-slate-600 focus:border-slate-900 focus:outline-none"
                />

                <button
                  type="submit"
                  className="rounded-lg bg-slate-900 px-8 py-4 text-white hover:bg-slate-800 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}