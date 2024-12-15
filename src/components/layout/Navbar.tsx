import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  showSignIn?: boolean;
}

export function Navbar({ showSignIn = true }: NavbarProps) {
  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6" />
        <span className="font-bold text-xl">Minimalist</span>
      </div>
      {showSignIn && (
        <Link to="/login">
          <Button variant="outline">Sign In</Button>
        </Link>
      )}
    </nav>
  );
}