export default function DoctorSuccess() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-10 text-center shadow-sm">

          <div className="text-7xl">
            🎉
          </div>

          <h1 className="mt-6 text-4xl font-bold text-[#2563a8]">
            Registration Submitted
          </h1>

          <p className="mt-5 text-lg text-[#526579]">
            Your application has been received successfully.
          </p>

          <p className="mt-4 leading-7 text-[#526579]">
            Our team will verify your email, phone number, and qualification
            documents.
          </p>

          <div className="mt-6 rounded-2xl bg-[#eef6fb] px-6 py-5">
            <p className="font-semibold text-[#4f8fc5]">
              Verification may take up to 24 hours.
            </p>
          </div>

          <p className="mt-6 leading-7 text-[#526579]">
            Once verification is complete, your Doctor Login ID and temporary
            password will be sent to your registered email address.
          </p>

          <p className="mt-8 text-sm text-[#718096]">
            Have a nice day! 🌷
          </p>

          <p className="mt-2 text-sm text-[#718096]">
            Thank you for choosing Medcore HMS.
          </p>

        </div>
      </div>
    </main>
  );
}