export default function AboutPreview() {
  const stats = [
  {
    number: "20+",
    label: "years Of Serving Clients",
  },,
    {
      number: "2",
      label: "Offices",
    },
    {
      number: "100%",
      label: "Client Focus",
    },
    {
      number: "Global",
      label: "Business Advisory",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item) => (
            <div
              key={item.label}
              className="border border-slate-200 rounded-2xl p-10 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-6xl font-bold text-slate-900">
                {item.number}
              </h2>

              <p className="mt-4 text-lg text-slate-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}