import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">DBT</span>
          </div>
          <div>
            <h1 className="font-semibold text-foreground">DBT Awareness Portal</h1>
            <p className="text-xs text-muted-foreground">Direct Benefit Transfer Information</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#overview" className="text-sm font-medium hover:text-primary transition-smooth">
            Overview
          </a>
          <a href="#checker" className="text-sm font-medium hover:text-primary transition-smooth">
            Status Checker
          </a>
          <a href="#resources" className="text-sm font-medium hover:text-primary transition-smooth">
            Resources
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-smooth">
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-1">
            <Globe className="w-4 h-4" />
            <span>हिंदी</span>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;