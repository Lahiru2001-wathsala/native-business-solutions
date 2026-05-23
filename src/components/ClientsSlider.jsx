export default function ClientsSlider() {

  const clients = [
    "/clients/1.png",
    "/clients/2.png",
    "/clients/3.png",
    "/clients/4.png",
    "/clients/5.png",
    "/clients/6.png",
    "/clients/7.png",
    "/clients/8.png",
    "/clients/9.png",
    "/clients/10.png",
    "/clients/11.png",
    "/clients/12.png",
    "/clients/13.png",
    "/clients/14.png",
    "/clients/15.png",
    "/clients/16.png",
  ];

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Trusted By Leading Companies
          </h1>
          <p className="text-gray-400 text-lg">
            Trusted by businesses across Sri Lanka.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-4 gap-8">
          {clients.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">

              {/* CIRCLE — fixed px size so width always = height */}
              <div style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "4px solid #3b82f6",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                transition: "transform 0.3s",
                flexShrink: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              >
                <img
                  src={logo}
                  alt="client"
                  style={{ width: "90px", height: "90px", objectFit: "contain" }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}