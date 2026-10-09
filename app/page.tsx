import Header from "./Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="min-h-screen bg-[#f4f8fb] px-8 py-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-12">

          <div className="max-w-xl">
            <h1 className="text-5xl font-bold leading-tight text-[#2563a8]">
              Your Health, Our Priority
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#526579]">
              Medcore HMS is a healthcare platform designed to make it easier
              for patients to connect with doctors and manage their healthcare
              needs.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
  href="/role"
  className="rounded-lg bg-[#6fa8dc] px-7 py-3 text-white shadow-sm hover:bg-[#5d96ca]"
>
  Login
</Link>

              <button className="rounded-lg border border-[#6fa8dc] px-7 py-3 text-[#4f8fc5] hover:bg-[#e8f2fa]">
                Register
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src="/healthcare.jpg"
              alt="Healthcare"
              className="block h-auto w-96 rounded-3xl"
            />
          </div>

        </div>
      </section>
    </main>
  );
}