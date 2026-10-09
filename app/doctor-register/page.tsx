import Link from "next/link";
export default function DoctorRegister() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-[#2563a8]">
          Doctor Registration
        </h1>

        <p className="mt-3 text-[#526579]">
          Register with Medcore HMS to create your professional doctor account.
        </p>
        <div className="mt-8">
  <label className="text-sm font-medium text-[#526579]">
    Full Name
  </label>

  <input
    type="text"
    placeholder="Enter your full name"
    className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
  />
</div>
<div className="mt-5">
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
    Phone Number
  </label>

  <input
    type="tel"
    placeholder="Enter your phone number"
    className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
  />
</div>
<div className="mt-5">
  <label className="text-sm font-medium text-[#526579]">
    Address
  </label>

  <textarea
    placeholder="Enter your complete address"
    rows={3}
    className="mt-2 w-full resize-none rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
  />
</div>
<div className="mt-5">
  <label className="text-sm font-medium text-[#526579]">
    Qualification
  </label>

  <input
    type="text"
    placeholder="Example: MBBS, MD, BDS"
    className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
  />
</div>
<div className="mt-5">
  <label className="text-sm font-medium text-[#526579]">
    Qualification Marksheet / Certificate
  </label>

  <input
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 text-sm text-[#526579]"
  />

  <p className="mt-2 text-xs text-[#718096]">
    Upload your qualification marksheet or certificate.
  </p>
</div>
<Link
  href="/doctor-success"
  className="mt-8 block w-full rounded-xl bg-[#6fa8dc] py-3 text-center font-medium text-white shadow-sm transition hover:bg-[#5d96ca]"
>
  Submit Registration
</Link>
      </div>
    </main>
  );
}