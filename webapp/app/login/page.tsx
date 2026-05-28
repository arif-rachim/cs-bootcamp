import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-sm">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <AuthForm mode="login" />
    </div>
  );
}
