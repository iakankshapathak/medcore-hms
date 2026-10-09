export default function AppointmentConfirmation() {
  return (
    <main className="min-h-screen bg-[#f2fbfd] text-[#24445a]">
      <div className="flex min-h-screen items-center justify-center px-6 py-10">

        <div className="w-full max-w-2xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">

          {/* Celebration */}
          <div className="text-6xl healthcare-dance">
  🎉
</div>

          <h1 className="mt-5 text-4xl font-bold text-[#16495c]">
            Hurray! Your Appointment Is Booked!
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#527383]">
            You’ve taken an important step toward better health. 💙
          </p>

          <p className="mx-auto mt-2 max-w-xl leading-7 text-[#6b8995]">
            Your appointment has been successfully confirmed.
            We look forward to helping you on your journey toward
            a healthier and happier you.
          </p>

          {/* Character Area */}
          <div className="mt-8 rounded-3xl bg-[#a9dfea] px-6 py-10">

           <div className="healthcare-dance text-8xl">
  👩‍⚕️
</div>

            <p className="mt-4 text-lg font-semibold text-[#16495c]">
              Your healthcare journey continues! 🌷
            </p>

            <p className="mt-2 text-sm text-[#527383]">
              Take care of yourself — your health matters.
            </p>

          </div>

          {/* Appointment Details */}
          <div className="mt-7 rounded-2xl bg-[#f2fbfd] p-5 text-left">

            <h2 className="font-bold text-[#16495c]">
              Appointment Details
            </h2>

            <div className="mt-4 space-y-2 text-sm">

              <div className="flex justify-between">
                <span className="text-[#527383]">
                  Doctor
                </span>

                <span className="font-semibold text-[#24445a]">
                  Dr. Sharma
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#527383]">
                  Specialization
                </span>

                <span className="font-semibold text-[#24445a]">
                  Cardiologist
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#527383]">
                  Consultation Fee
                </span>

                <span className="font-semibold text-[#24445a]">
                  ₹800
                </span>
              </div>

            </div>

          </div>

          {/* Dashboard Button */}
          <a
            href="/patient-dashboard"
            className="mt-7 block w-full rounded-xl bg-[#80d4e5] py-3 font-semibold text-[#16495c] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#70c9dc] hover:shadow-md"
          >
            Go to Patient Dashboard
          </a>

        </div>
      </div>
    </main>
  );
}