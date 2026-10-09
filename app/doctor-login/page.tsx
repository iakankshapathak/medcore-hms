export default function DoctorLogin() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-4xl font-bold text-[#2563a8]">
          Doctor Login
        </h1>

        <p className="mt-3 text-[#526579]">
          Login to your Medcore HMS doctor account.
        </p>

        <div className="mt-8">
          <label className="text-sm font-medium text-[#526579]">
            Doctor Login ID
          </label>

          <input
            type="text"
            placeholder="Enter your Doctor Login ID"
            className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
          />
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-[#526579]">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
          />
        </div>

        <div className="mt-3 text-right">
          <a
  href="/doctor-forgot-password"
  className="text-sm font-medium text-[#4f8fc5] hover:underline"
>
  Forgot Password?
</a>
        </div>

        <button className="mt-6 w-full rounded-xl bg-[#6fa8dc] py-3 font-medium text-white shadow-sm transition hover:bg-[#5d96ca]">
          Login
        </button>

        <p className="mt-6 text-center text-sm text-[#718096]">
          Don't have a doctor account?{" "}
          <a
            href="/doctor-register"
            className="font-medium text-[#4f8fc5] hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </main>
  );
}