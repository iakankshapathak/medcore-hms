import Link from "next/link";

export default function PatientDoctors() {
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
            <Link
              href="/patient-dashboard"
              className="block rounded-xl px-4 py-3 text-[#315d6e] transition hover:bg-[#80d4e5]"
            >
              Dashboard
            </Link>

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
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6 md:p-10">

          <div>
            <p className="text-sm font-medium text-[#4d7d8e]">
              Patient Portal
            </p>

            <h2 className="mt-1 text-3xl font-bold text-[#16495c]">
              Find a Doctor
            </h2>

            <p className="mt-2 text-[#527383]">
              Search for doctors and choose the right specialist for your healthcare needs.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-3">

              <input
                type="text"
                placeholder="Search doctor name"
                className="rounded-xl border border-[#c5e4eb] bg-[#f2fbfd] px-4 py-3 outline-none focus:border-[#70c9dc]"
              />

              <select
                className="rounded-xl border border-[#c5e4eb] bg-[#f2fbfd] px-4 py-3 outline-none focus:border-[#70c9dc]"
              >
                <option>All Specializations</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>General Physician</option>
                <option>Dentist</option>
              </select>

              <button className="rounded-xl bg-[#80d4e5] px-5 py-3 font-semibold text-[#16495c] transition hover:bg-[#70c9dc]">
                Search Doctors
              </button>

            </div>
          </div>

          {/* Doctors */}
          <div className="mt-8">

            <h3 className="text-xl font-bold text-[#16495c]">
              Available Doctors
            </h3>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">

              {/* Doctor 1 */}
              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a9dfea] text-2xl font-bold text-[#16495c]">
                    DS
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#24445a]">
                      Dr. Sharma
                    </h4>

                    <p className="text-sm text-[#527383]">
                      Cardiologist
                    </p>

                    <p className="mt-1 text-sm text-[#6b8995]">
                      10+ years experience
                    </p>
                  </div>

                </div>

                <div className="mt-5 border-t border-[#e0f1f4] pt-4">

                  <p className="text-sm text-[#527383]">
                    ⭐ 4.8 • 120 patient reviews
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#24445a]">
                    Consultation Fee: ₹800
                  </p>

                </div>

                <a
  href="/doctor-profile"
  className="mt-5 block w-full rounded-xl bg-[#80d4e5] py-3 text-center font-semibold text-[#16495c] transition hover:bg-[#70c9dc]"
>
  View Profile
</a>

              </div>

              {/* Doctor 2 */}
              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a9dfea] text-2xl font-bold text-[#16495c]">
                    PS
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#24445a]">
                      Dr. Priya Singh
                    </h4>

                    <p className="text-sm text-[#527383]">
                      Dermatologist
                    </p>

                    <p className="mt-1 text-sm text-[#6b8995]">
                      8+ years experience
                    </p>
                  </div>

                </div>

                <div className="mt-5 border-t border-[#e0f1f4] pt-4">

                  <p className="text-sm text-[#527383]">
                    ⭐ 4.7 • 95 patient reviews
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#24445a]">
                    Consultation Fee: ₹700
                  </p>

                </div>

                <a
  href="/doctor-profile?doctor=priya"
  className="mt-5 block w-full rounded-xl bg-[#80d4e5] py-3 text-center font-semibold text-[#16495c] transition hover:bg-[#70c9dc]"
>
  View Profile
</a>
              </div>

              {/* Doctor 3 */}
              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a9dfea] text-2xl font-bold text-[#16495c]">
                    AK
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#24445a]">
                      Dr. Amit Kumar
                    </h4>

                    <p className="text-sm text-[#527383]">
                      General Physician
                    </p>

                    <p className="mt-1 text-sm text-[#6b8995]">
                      12+ years experience
                    </p>
                  </div>

                </div>

                <div className="mt-5 border-t border-[#e0f1f4] pt-4">

                  <p className="text-sm text-[#527383]">
                    ⭐ 4.9 • 180 patient reviews
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#24445a]">
                    Consultation Fee: ₹500
                  </p>

                </div>

                <button className="mt-5 w-full rounded-xl bg-[#80d4e5] py-3 font-semibold text-[#16495c] transition hover:bg-[#70c9dc]">
                  View Profile
                </button>

              </div>

              {/* Doctor 4 */}
              <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex items-start gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a9dfea] text-2xl font-bold text-[#16495c]">
                    RM
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-[#24445a]">
                      Dr. Riya Mehta
                    </h4>

                    <p className="text-sm text-[#527383]">
                      Dentist
                    </p>

                    <p className="mt-1 text-sm text-[#6b8995]">
                      7+ years experience
                    </p>
                  </div>

                </div>

                <div className="mt-5 border-t border-[#e0f1f4] pt-4">

                  <p className="text-sm text-[#527383]">
                    ⭐ 4.6 • 88 patient reviews
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#24445a]">
                    Consultation Fee: ₹600
                  </p>

                </div>

                <button className="mt-5 w-full rounded-xl bg-[#80d4e5] py-3 font-semibold text-[#16495c] transition hover:bg-[#70c9dc]">
                  View Profile
                </button>

              </div>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}