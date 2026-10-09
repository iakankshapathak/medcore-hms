import Link from "next/link";
export default function RolePage() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">

        <h1 className="text-4xl font-bold text-[#2563a8]">
          Welcome to Medcore HMS
        </h1>

        <p className="mt-4 text-lg text-[#526579]">
          Please select how you would like to continue.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">

          <Link
  href="/patient-login"
  className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md"
>
  <h2 className="text-2xl font-semibold text-[#2563a8]">
    Patient
  </h2>

  <p className="mt-3 text-[#526579]">
    Find doctors and manage your healthcare.
  </p>
</Link>

          <Link
  href="/doctor-login"
  className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-md"
>
  <h2 className="text-2xl font-semibold text-[#2563a8]">
    Doctor
  </h2>

  <p className="mt-3 text-[#526579]">
    Manage your patients and healthcare services.
  </p>
</Link>

        </div>
      </div>
    </main>
  );
}