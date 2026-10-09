
export default function AppointmentConfirmation() {
  const [gender, setGender] = useState("");

  useEffect(() => {
    const savedGender = localStorage.getItem("patientGender");
    setGender(savedGender || "female");
  }, []);
  return (
    <main className="min-h-screen bg-[#f4f8fb] px-6 py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-4xl font-bold text-[#2563a8]">
          Create Patient Account
        </h1>

        <p className="mt-3 text-[#526579]">
          Register with Medcore HMS to manage your healthcare.
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
    Gender
  </label>

  <select 
   name="gender"
    className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
  >
    <option value="">Select your gender</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
  </select>
</div>
<div className="mt-5">
  <label className="text-sm font-medium text-[#526579]">
    Password
  </label>

  <input
    type="password"
    placeholder="Create a password"
    className="mt-2 w-full rounded-xl border border-[#cbddea] bg-white px-4 py-3 outline-none focus:border-[#6fa8dc]"
  />
</div>

<button
  type="button"
  onClick={() => {
    const gender = (
      document.querySelector('select[name="gender"]') as HTMLSelectElement
    )?.value;

    localStorage.setItem("patientGender", gender);

    window.location.href = "/patient-success";
  }}
  className="mt-7 w-full rounded-xl bg-[#6fa8dc] py-3 text-center font-medium text-white shadow-sm transition hover:bg-[#5d96ca]"
>
  Create Account
</button>
<p className="mt-6 text-center text-sm text-[#526579]">
  Already have an account?{" "}
  <Link
    href="/patient-login"
    className="font-medium text-[#4f8fc5] hover:underline"
  >
    Login
  </Link>
</p>
      </div>
    </main>
  );
}