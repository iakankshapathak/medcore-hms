export default function PatientDashboard() {
  return (
    <main className="min-h-screen bg-[#f2fbfd] text-[#24445a]">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="hidden w-64 flex-col bg-[#a9dfea] p-6 md:flex">
          <h1 className="text-2xl font-bold text-[#16495c]">
            Medcore HMS
          </h1>

          <p className="mt-1 text-sm text-[#3f6878]">
            Patient Portal
          </p>

          <nav className="mt-10 space-y-2">
            <a
              href="/patient-dashboard"
              className="block rounded-xl bg-[#80d4e5] px-4 py-3 font-semibold text-[#16495c]"
            >
              Dashboard
            </a>

            <a
              href="/patient-doctors"
                            className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Find Doctors
            </a>

            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Appointments
            </a>

            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Appointment History
            </a>

            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Prescriptions
            </a>

            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Reports
            </a>

            <a
              href="#"
              className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Profile
            </a>
          </nav>

          <div className="mt-auto">
            <a
              href="/patient-login"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Logout
            </a>
          </div>
        </aside>

        {/* Main Dashboard */}
        <section className="flex-1 p-6 md:p-10">

          {/* Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium text-[#4d7d8e]">
                Patient Dashboard
              </p>

              <h2 className="mt-1 text-3xl font-bold text-[#16495c]">
                Welcome back, Rahul 👋
              </h2>

              <p className="mt-2 text-[#527383]">
                Here is your healthcare overview for today.
              </p>
            </div>

            <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
              <p className="text-xs text-[#6b8995]">
                Today's Date
              </p>

              <p className="font-semibold text-[#24445a]">
                1 October 2026
              </p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl bg-[#a9dfea] p-5 shadow-sm transition hover:bg-[#80d4e5]">
              <p className="text-sm font-medium text-[#3f6878]">
                Today's Appointment
              </p>

              <p className="mt-3 text-3xl font-bold text-[#16495c]">
                1
              </p>

              <p className="mt-1 text-sm text-[#527383]">
                Scheduled today
              </p>
            </div>

            <div className="rounded-2xl bg-[#a9dfea] p-5 shadow-sm transition hover:bg-[#80d4e5]">
              <p className="text-sm font-medium text-[#3f6878]">
                Upcoming Appointments
              </p>

              <p className="mt-3 text-3xl font-bold text-[#16495c]">
                2
              </p>

              <p className="mt-1 text-sm text-[#527383]">
                Appointments scheduled
              </p>
            </div>

            <div className="rounded-2xl bg-[#a9dfea] p-5 shadow-sm transition hover:bg-[#80d4e5]">
              <p className="text-sm font-medium text-[#3f6878]">
                Completed
              </p>

              <p className="mt-3 text-3xl font-bold text-[#16495c]">
                5
              </p>

              <p className="mt-1 text-sm text-[#527383]">
                Completed appointments
              </p>
            </div>

            <div className="rounded-2xl bg-[#a9dfea] p-5 shadow-sm transition hover:bg-[#80d4e5]">
              <p className="text-sm font-medium text-[#3f6878]">
                Total Spent
              </p>

              <p className="mt-3 text-3xl font-bold text-[#16495c]">
                ₹5,600
              </p>

              <p className="mt-1 text-sm text-[#527383]">
                Healthcare expenses
              </p>
            </div>

          </div>

          {/* Today's Appointment + Expenses */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {/* Today's Appointment */}
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#16495c]">
                  Today's Appointment
                </h3>

                <span className="rounded-full bg-[#a9dfea] px-3 py-1 text-xs font-semibold text-[#315d6e]">
                  Confirmed
                </span>
              </div>

              <div className="mt-6 rounded-xl bg-[#f2fbfd] p-5">
                <p className="text-sm text-[#6b8995]">
                  10:30 AM
                </p>

                <h4 className="mt-1 text-lg font-bold text-[#24445a]">
                  Dr. Sharma
                </h4>

                <p className="mt-1 text-sm text-[#527383]">
                  Cardiologist
                </p>

                <p className="mt-4 text-sm text-[#527383]">
                  Medcore HMS Clinic
                </p>

                <button className="mt-5 rounded-xl bg-[#80d4e5] px-5 py-2.5 font-semibold text-[#16495c] transition hover:bg-[#70c9dc]">
                  View Appointment
                </button>
              </div>
            </div>

            {/* Expenses */}
            <div className="rounded-2xl bg-[#a9dfea] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#16495c]">
                Healthcare Expenses
              </h3>

              <div className="mt-6">
                <p className="text-sm text-[#527383]">
                  Spent Today
                </p>

                <p className="mt-1 text-3xl font-bold text-[#16495c]">
                  ₹800
                </p>
              </div>

              <div className="mt-6 border-t border-[#8ccfdd] pt-5">
                <p className="text-sm text-[#527383]">
                  This Month
                </p>

                <p className="mt-1 text-2xl font-bold text-[#16495c]">
                  ₹3,200
                </p>
              </div>

              <div className="mt-6 border-t border-[#8ccfdd] pt-5">
                <p className="text-sm text-[#527383]">
                  Total Spent
                </p>

                <p className="mt-1 text-2xl font-bold text-[#16495c]">
                  ₹5,600
                </p>
              </div>
            </div>

          </div>

          {/* Upcoming Appointments */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#16495c]">
                Upcoming Appointments
              </h3>

              <button className="text-sm font-semibold text-[#3d91a6] hover:underline">
                View All
              </button>
            </div>

            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead>
                  <tr className="border-b border-[#d8edf2] text-sm text-[#6b8995]">
                    <th className="px-4 py-3">Doctor</th>
                    <th className="px-4 py-3">Specialization</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Time</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-[#eef7f9]">
                    <td className="px-4 py-4 font-semibold text-[#24445a]">
                      Dr. Priya Singh
                    </td>

                    <td className="px-4 py-4 text-[#527383]">
                      Dermatologist
                    </td>

                    <td className="px-4 py-4 text-[#527383]">
                      5 Oct 2026
                    </td>

                    <td className="px-4 py-4 text-[#527383]">
                      11:00 AM
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#a9dfea] px-3 py-1 text-xs font-semibold text-[#315d6e]">
                        Confirmed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 font-semibold text-[#24445a]">
                      Dr. Amit Kumar
                    </td>

                    <td className="px-4 py-4 text-[#527383]">
                      General Physician
                    </td>

                    <td className="px-4 py-4 text-[#527383]">
                      9 Oct 2026
                    </td>

                    <td className="px-4 py-4 text-[#527383]">
                      4:30 PM
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#80d4e5] px-3 py-1 text-xs font-semibold text-[#16495c]">
                        Confirmed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}