import FormLogin from "@/components/formLogin";

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1 className="text-text font-bold text-2xl mb-4">
        IN THE SPACE WITH US{" "}
      </h1>
      <FormLogin />
    </main>
  );
}
