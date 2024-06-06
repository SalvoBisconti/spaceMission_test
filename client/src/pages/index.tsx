import FormLogin from "@/components/formLogin";
import "animate.css";

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1 className="text-text font-bold text-2xl mb-4 uppercase">
        ShuttleWatch
      </h1>
      <FormLogin />
    </main>
  );
}
