import { Link, useLocation } from "react-router-dom";
import { WalletConnect } from "./WalletConnect";
import { DarkModeToggle } from "./DarkModeToggle";
import { Zap, Search, PlusCircle, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/explore", label: "Explore", icon: Search },
    { path: "/create", label: "Create", icon: PlusCircle },
    { path: "/my-campaigns", label: "My Campaigns", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen relative" style={{ minHeight: '100vh' }}>
      {/* Floating Glass Navbar */}
      <header
        className="glass-nav px-6 py-4"
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          right: 16,
          zIndex: 50,
          background: 'rgba(3, 7, 18, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#f1f5f9',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent group-hover:from-primary-200 group-hover:to-primary-400 transition-all duration-300" style={{ color: '#22d3ee' }}>Impact-X</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                  isActive(path)
                    ? "bg-primary-500/15 text-primary-400 font-medium"
                    : "text-dark-300 hover:text-dark-100 hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-body">{label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <WalletConnect />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-dark-300 hover:text-dark-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive(path)
                      ? "bg-primary-500/15 text-primary-400 font-medium"
                      : "text-dark-300 hover:text-dark-100 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-body">{label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12" style={{ paddingTop: 7 * 16, minHeight: 400, color: '#f1f5f9' }}>{children}</main>

      {/* Footer — Impact-X, yours */}
      <footer className="glass-card mx-4 mb-4 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-glow">
                <Zap className="w-4 h-4 text-dark-950" />
              </div>
              <span className="font-heading font-semibold text-dark-100">Impact-X</span>
              <span className="text-dark-600 hidden sm:inline">·</span>
              <span className="text-sm text-dark-400">
                Crowdfunding for builders.
              </span>
            </div>
            <a
              href="https://github.com/abnormalforhad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-dark-400 hover:text-primary-400 font-body transition-colors cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
