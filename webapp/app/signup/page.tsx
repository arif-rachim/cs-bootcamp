import AuthForm from "@/components/AuthForm";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-sm">
      <h1 className="text-2xl font-bold mb-6">Daftar Akun</h1>
      <AuthForm mode="signup" />
    </div>
  );
}
