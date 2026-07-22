export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <h2 className="text-2xl font-bold">
          Smita Patni & Associates
        </h2>

        <p className="mt-3 text-gray-300">
          Professional taxation, regulatory and corporate advisory services.
        </p>

        <div className="mt-8 flex justify-between flex-wrap gap-6">

          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-3">Delhi Office</p>
            <p>Jaipur Office</p>
            <p>Email will be added later</p>
          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Smita Patni & Associates. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}