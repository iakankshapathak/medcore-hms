export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#2563a8]">
          Welcome Back
        </h1>

        <p className="mt-2 text-[#526579]">
          Login to your Medcore HMS account.
        </p>

        <div className="mt-8">
          <label className="text-sm font-medium text-[#526579]">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-xl border border-[#cbddea] bg-[#f8fbfd] px-4 py-3 outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-[#526579]">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="mt-2 w-full rounded-xl border border-[#cbddea] bg-[#f8fbfd] px-4 py-3 outline-none"
          />
        </div>

        <button className="mt-7 w-full rounded-xl bg-[#6fa8dc] py-3 font-medium text-white">
          Login
        </button>
      </div>
    </main>
  );
}