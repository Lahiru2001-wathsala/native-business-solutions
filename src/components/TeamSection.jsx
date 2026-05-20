export default function TeamSection() {

  const team = [

    {
      image: "/Team/1.jfif",
      name: "W.M.G.A. Wanninayaka",
      role: "Director",
    },

    {
      image: "/Team/2.jfif",
      name: "R.M.S.T. Rathnayaka",
      role: "Director",
    },

    {
      image: "/Team/3.jfif",
      name: "L.M.G.G. Lansakkara",
      role: "Account Executive",
    },

    {
      image: "/Team/4.jpeg",
      name: "N.P.K.D.L.R. Nanayakkara",
      role: "HR Manager",
    },

  ];

  return (

    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* TITLE */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >

          <h1 className="text-4xl md:text-5xl font-bold mb-6">

            Meet Our Team

          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">

            Experienced professionals dedicated to your success.

          </p>

        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {team.map((member, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              className="
              bg-white/60
              dark:bg-slate-900/60
              backdrop-blur-xl
              shadow-2xl
              p-8
              rounded-[30px]
              text-center
              hover:-translate-y-3
              duration-300
              border
              border-white/20
              dark:border-slate-700/50
              overflow-hidden
              "
            >

              {/* IMAGE */}
              <img
                src={member.image}
                alt={member.name}
                className="
                w-28
                h-28
                rounded-full
                mx-auto
                mb-6
                object-cover
                border-4
                border-blue-600
                shadow-xl
                "
              />

              {/* NAME */}
              <h2 className="text-lg font-bold mb-2 break-words">

                {member.name}

              </h2>

              {/* ROLE */}
              <p className="text-blue-600 text-sm font-medium">

                {member.role}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}