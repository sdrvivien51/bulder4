import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Simple. Beautiful. Minimal.</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the power of minimalism in your digital workspace. Clean design, powerful features.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/login">
            <Button size="lg">Get Started</Button>
          </Link>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </main>
    </div>
  );
}