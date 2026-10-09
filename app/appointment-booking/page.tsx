export default function AppointmentBooking() {
  return (
    <main className="min-h-screen bg-[#f2fbfd] text-[#24445a]">
      <div className="mx-auto max-w-3xl px-6 py-10">

        <a
          href="/doctor-profile"
          className="text-sm font-medium text-[#527383] hover:underline"
        >
          ← Back to Doctor Profile
        </a>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">

          <h1 className="text-3xl font-bold text-[#16495c]">
            Book Appointment
          </h1>

          <p className="mt-2 text-[#527383]">
            Schedule your consultation with Dr. Sharma.
          </p>

          {/* Doctor */}
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#a9dfea] p-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-bold text-[#16495c]">
              DS
            </div>

            <div>
              <h2 className="font-bold text-[#16495c]">
                Dr. Sharma
              </h2>

              <p className="text-sm text-[#527383]">
                Cardiologist
              </p>

              <p className="mt-1 text-sm text-[#527383]">
                Consultation Fee: ₹800
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="mt-7">
            <label className="text-sm font-medium text-[#527383]">
              Select Appointment Date
            </label>

            <input
              type="date"
              className="mt-2 w-full rounded-xl border border-[#c5e4eb] bg-[#f2fbfd] px-4 py-3 outline-none focus:border-[#70c9dc]"
            />
          </div>

          {/* Time */}
          <div className="mt-5">
            <label className="text-sm font-medium text-[#527383]">
              Select Appointment Time
            </label>

            <select className="mt-2 w-full rounded-xl border border-[#c5e4eb] bg-[#f2fbfd] px-4 py-3 outline-none focus:border-[#70c9dc]">
              <option>10:30 AM</option>
              <option>11:30 AM</option>
              <option>2:00 PM</option>
              <option>4:30 PM</option>
            </select>
          </div>

          {/* Reason */}
          <div className="mt-5">
            <label className="text-sm font-medium text-[#527383]">
              Reason for Visit
            </label>

            <textarea
              placeholder="Briefly describe your reason for consultation"
              rows={4}
              className="mt-2 w-full rounded-xl border border-[#c5e4eb] bg-[#f2fbfd] px-4 py-3 outline-none focus:border-[#70c9dc]"
            />
          </div>

          {/* Summary */}
          <div className="mt-7 rounded-2xl bg-[#f2fbfd] p-5">
            <h2 className="font-bold text-[#16495c]">
              Appointment Summary
            </h2>

            <div className="mt-3 flex justify-between text-sm">
              <span className="text-[#527383]">
                Consultation Fee
              </span>

              <span className="font-semibold text-[#16495c]">
                ₹800
              </span>
            </div>
          </div>

          {/* Button */}
          <a
            href="/appointment-confirmation"
            className="mt-7 block w-full rounded-xl bg-[#80d4e5] py-3 text-center font-semibold text-[#16495c] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#70c9dc] hover:shadow-md"
          >
            Confirm Appointment
          </a>

        </div>
      </div>
    </main>
  );
}