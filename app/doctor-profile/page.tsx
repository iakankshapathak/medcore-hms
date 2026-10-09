export default async function DoctorProfile({
  searchParams,
}: {
  searchParams: Promise<{ doctor?: string }>;
}) {
  const { doctor } = await searchParams;
  return (
    <main className="min-h-screen bg-[#f2fbfd] text-[#24445a]">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Back */}
        <a
          href="/patient-doctors"
          className="text-sm font-medium text-[#527383] hover:underline"
        >
          ← Back to Doctors
        </a>

        {/* Doctor Header */}
        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#a9dfea] text-3xl font-bold text-[#16495c]">
              DS
            </div>

            <div>
              <h1 className="text-3xl font-bold text-[#16495c]">
                Dr. Sharma
              </h1>

              <p className="mt-1 text-lg text-[#527383]">
                Cardiologist
              </p>

              <p className="mt-2 text-sm text-[#6b8995]">
                10+ years of experience
              </p>

              <p className="mt-2 text-sm text-[#527383]">
                ⭐ 4.8 • 120 patient reviews
              </p>
            </div>

          </div>

          {/* Doctor Details */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl bg-[#a9dfea] p-5">
              <p className="text-sm text-[#527383]">
                Qualification
              </p>
              <p className="mt-1 font-semibold text-[#16495c]">
                MBBS, MD
              </p>
            </div>

            <div className="rounded-2xl bg-[#a9dfea] p-5">
              <p className="text-sm text-[#527383]">
                Consultation Fee
              </p>
              <p className="mt-1 font-semibold text-[#16495c]">
                ₹800
              </p>
            </div>

            <div className="rounded-2xl bg-[#a9dfea] p-5">
              <p className="text-sm text-[#527383]">
                Availability
              </p>
              <p className="mt-1 font-semibold text-[#16495c]">
                Mon - Sat
              </p>
            </div>

          </div>

          {/* About */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-[#16495c]">
              About Doctor
            </h2>

            <p className="mt-3 leading-7 text-[#527383]">
              Dr. Sharma is an experienced cardiologist providing
              professional consultation and personalized healthcare
              guidance to patients.
            </p>
          </div>

          {/* Appointment */}
          <div className="mt-8 rounded-2xl bg-[#f2fbfd] p-6">

            <h2 className="text-xl font-bold text-[#16495c]">
              Book an Appointment
            </h2>

            <p className="mt-2 text-sm text-[#527383]">
              Choose a convenient time for your consultation.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">

              <div>
                <label className="text-sm font-medium text-[#527383]">
                  Select Date
                </label>

                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-[#c5e4eb] bg-white px-4 py-3 outline-none focus:border-[#70c9dc]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#527383]">
                  Select Time
                </label>

                <select className="mt-2 w-full rounded-xl border border-[#c5e4eb] bg-white px-4 py-3 outline-none focus:border-[#70c9dc]">
                  <option>10:30 AM</option>
                  <option>11:30 AM</option>
                  <option>2:00 PM</option>
                  <option>4:30 PM</option>
                </select>
              </div>

            </div>

          <a
  href="/appointment-booking"
  className="mt-6 block w-full rounded-xl bg-[#80d4e5] py-3 text-center font-semibold text-[#16495c] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#70c9dc] hover:shadow-md"
>
  Book Appointment
</a>

          </div>

        </div>
      </div>
    </main>
  );
}