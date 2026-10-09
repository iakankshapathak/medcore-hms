import Link from "next/link";
export default function PatientLogin() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-4xl font-bold text-[#2563a8]">
          Patient Login
        </h1>

        <p className="mt-3 text-[#526579]">
          Login to your Medcore HMS patient account.
        </p>

        <div className="mt-8">
          <label className="text-sm font-medium text-[#526579]">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
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
  href="/patient-forgot-password"
  className="text-sm text-[#4f8fc5] hover:underline"
>
  Forgot Password?
</a>
</div>
        <button className="mt-7 w-full rounded-xl bg-[#6fa8dc] py-3 font-medium text-white shadow-sm transition hover:bg-[#5d96ca]">
          Login
        </button>
        <p className="mt-6 text-center text-sm text-[#526579]">
  Don't have an account?{" "}
  <Link
  href="/patient-register"
  className="font-medium text-[#4f8fc5] hover:underline"
>
  Register
</Link>
</p>
      </div>
    </main>
  );
}