import { AuthForm } from '@/components/auth/AuthForm';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center">
      <AuthForm />
    </div>
  );
}