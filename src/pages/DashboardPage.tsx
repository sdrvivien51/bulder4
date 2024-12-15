import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { LoadingPage } from '@/components/layout/LoadingPage';
import { PageContainer } from '@/components/layout/PageContainer';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '@/lib/constants';

export function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return (
    <PageContainer>
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
          <p className="text-muted-foreground">
            This is a blank dashboard ready for your content.
          </p>
        </div>
      </main>
    </PageContainer>
  );
}