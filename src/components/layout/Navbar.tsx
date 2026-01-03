import { Wallet, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  activeView: 'donor' | 'admin' | 'validator';
  onViewChange: (view: 'donor' | 'admin' | 'validator') => void;
}

const Navbar = ({ activeView, onViewChange }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-emerald shadow-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            FundTrack
          </span>
        </div>

        <nav className="flex items-center gap-1 rounded-lg bg-muted p-1">
          <Button
            variant={activeView === 'donor' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('donor')}
            className="gap-2"
          >
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Donor Dashboard</span>
            <span className="sm:hidden">Donor</span>
          </Button>
          <Button
            variant={activeView === 'admin' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('admin')}
            className="gap-2"
          >
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">NGO Admin</span>
            <span className="sm:hidden">Admin</span>
          </Button>
          <Button
            variant={activeView === 'validator' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onViewChange('validator')}
            className="gap-2"
          >
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Validator</span>
            <span className="sm:hidden">Validate</span>
          </Button>
        </nav>

        <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary">
          <Wallet className="h-4 w-4" />
          <span className="hidden sm:inline">Connect Wallet</span>
          <span className="sm:hidden">Connect</span>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
