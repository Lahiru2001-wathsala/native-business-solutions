import {
  FaChartLine,
  FaUsers,
  FaEnvelope,
  FaDollarSign,
  FaCog,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";

export default function Dashboard() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white/5 backdrop-blur-2xl border-r border-white/10 p-6 hidden lg:flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-14">

            <img
              src="/logo.jpeg"
              alt="logo"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>

              <h1 className="text-xl font-bold">
                Native Business
              </h1>

              <p className="text-xs text-gray-400">
                Admin Dashboard
              </p>

            </div>

          </div>

          {/* MENU */}
          <div className="space-y-4">

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition">

              <FaHome />

              Dashboard

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition">

              <FaUsers />

              Users

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition">

              <FaEnvelope />

              Messages

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition">

              <FaChartLine />

              Analytics

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition">

              <FaCog />

              Settings

            </button>

          </div>

        </div>

        {/* LOGOUT */}
        <button className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 py-4 rounded-2xl transition">

          <FaSignOutAlt />

          Logout

        </button>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-4xl font-black mb-2">

              Welcome Back 👋

            </h1>

            <p className="text-gray-400">

              Here's what's happening in your business today.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl">

            <p className="text-sm text-gray-400">

              Total Revenue

            </p>

            <h2 className="text-3xl font-bold text-green-400">

              Rs. 2.4M

            </h2>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-[30px]">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl">

                <FaUsers />

              </div>

              <span className="text-green-400 text-sm">

                +12%

              </span>

            </div>

            <h2 className="text-4xl font-black mb-2">

              1,245

            </h2>

            <p className="text-gray-400">

              Total Users

            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-[30px]">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center text-2xl">

                <FaEnvelope />

              </div>

              <span className="text-green-400 text-sm">

                +8%

              </span>

            </div>

            <h2 className="text-4xl font-black mb-2">

              324

            </h2>

            <p className="text-gray-400">

              Messages

            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-[30px]">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-2xl">

                <FaDollarSign />

              </div>

              <span className="text-green-400 text-sm">

                +18%

              </span>

            </div>

            <h2 className="text-4xl font-black mb-2">

              Rs. 450K

            </h2>

            <p className="text-gray-400">

              Monthly Revenue

            </p>

          </div>

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-[30px]">

            <div className="flex items-center justify-between mb-6">

              <div className="w-14 h-14 rounded-2xl bg-cyan-600 flex items-center justify-center text-2xl">

                <FaChartLine />

              </div>

              <span className="text-green-400 text-sm">

                +25%

              </span>

            </div>

            <h2 className="text-4xl font-black mb-2">

              89%

            </h2>

            <p className="text-gray-400">

              Growth Rate

            </p>

          </div>

        </div>

        {/* CHART + ACTIVITY */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* CHART */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-2xl font-bold mb-2">

                  Revenue Analytics

                </h2>

                <p className="text-gray-400">

                  Monthly business performance overview

                </p>

              </div>

            </div>

            {/* FAKE CHART */}
            <div className="h-[300px] flex items-end gap-4">

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[40%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[65%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[50%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[85%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[70%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[95%]"></div>

              <div className="flex-1 bg-blue-500 rounded-t-3xl h-[80%]"></div>

            </div>

          </div>

          {/* ACTIVITY */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">

            <h2 className="text-2xl font-bold mb-8">

              Recent Activity

            </h2>

            <div className="space-y-6">

              <div className="border-b border-white/10 pb-4">

                <p className="font-semibold mb-1">

                  New User Registered

                </p>

                <span className="text-sm text-gray-400">

                  5 minutes ago

                </span>

              </div>

              <div className="border-b border-white/10 pb-4">

                <p className="font-semibold mb-1">

                  New Contact Message

                </p>

                <span className="text-sm text-gray-400">

                  18 minutes ago

                </span>

              </div>

              <div className="border-b border-white/10 pb-4">

                <p className="font-semibold mb-1">

                  Revenue Updated

                </p>

                <span className="text-sm text-gray-400">

                  1 hour ago

                </span>

              </div>

              <div>

                <p className="font-semibold mb-1">

                  System Backup Completed

                </p>

                <span className="text-sm text-gray-400">

                  Today

                </span>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

}