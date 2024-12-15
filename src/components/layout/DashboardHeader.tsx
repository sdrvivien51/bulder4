import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function DashboardHeader() {
  const { signOut } = useAuth();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-6 h-6" />
          <span className="font-bold text-xl">Dashboard</span>
        </div>
        <Button variant="ghost" onClick={signOut}>
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </nav>
  );
}