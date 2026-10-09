export default function PatientForgotPassword() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-4xl font-bold text-[#2563a8]">
          Forgot Password
        </h1>

        <p className="mt-3 text-[#526579]">
          Enter your registered email address to reset your password.
        </p>

        <div className="mt-8">
          <label className="text-sm font-medium text-[#526579]">
            Registered Email
          </label>

          <input
            type="email"
            placeholder="Enter your registered email"
            className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
          />
        </div>

        <button className="mt-7 w-full rounded-xl bg-[#6fa8dc] py-3 font-medium text-white shadow-sm transition hover:bg-[#5d96ca]">
          Send Reset Instructions
        </button>
      </div>
    </main>
  );
}