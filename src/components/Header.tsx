import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Circle,
  CircleDot,
  GraduationCap,
  Library,
  Route,
  SlidersHorizontal,
  Sun,
  Moon,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { learningPaths } from "@/data/modules";
import { useDarkMode } from "@/hooks/useDarkMode";
import { learningPathIcons } from "@/lib/learningPathIcons";

const levelFilters = [
  {
    label: "Pemula",
    path: "/modul?level=pemula",
    description: "Fondasi web untuk pemula",
    icon: Circle,
  },
  {
    label: "Menengah",
    path: "/modul?level=menengah",
    description: "Membangun aplikasi nyata",
    icon: CircleDot,
  },
  {
    label: "Lanjutan",
    path: "/modul?level=lanjutan",
    description: "Production-ready dan engineering practice",
    icon: TrendingUp,
  },
  {
    label: "Spesialisasi",
    path: "/modul?level=spesialisasi",
    description: "Deep-dive sesuai jalur karier",
    icon: Sparkles,
  },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const navLinkBase = "flex items-center gap-1 font-body text-[13px] font-medium transition-normal px-2 py-2 rounded-md text-app-heading hover:bg-app-accent-subtle";
  const navLinkActive = "bg-app-accent-subtle text-app-accent font-semibold";
  const navIconClass = "shrink-0 text-app-muted";
  const menuIconBoxClass = "w-8 h-8 rounded-lg border border-app-default bg-app-surface flex items-center justify-center text-app-muted shrink-0";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[--z-sticky] bg-app-elevated/90 backdrop-blur-md border-b border-app-default transition-normal">
        <div className="max-w-content mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <GraduationCap size={22} strokeWidth={1.7} className="text-app-accent transition-normal group-hover:text-app-heading shrink-0" />
            <span className="font-display text-[14px] sm:text-[16px] xl:text-[18px] text-app-heading transition-normal">
              Webdev Learning
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center">
            {/* Level Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={navLinkBase}>
                  <SlidersHorizontal size={15} strokeWidth={1.7} className={navIconClass} /> Level <ChevronDown size={13} strokeWidth={1.7} className={navIconClass} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-app-elevated border-app-default">
                <DropdownMenuLabel className="font-body text-[11px] text-app-muted uppercase tracking-wide">Pilih level</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-app-default" />
                {levelFilters.map((level) => (
                  <DropdownMenuItem key={level.label} onClick={() => handleNavigate(level.path)} className="cursor-pointer text-app-body focus:bg-app-surface-card-hover">
                    <div className="flex items-center gap-3 py-1">
                      <div className={menuIconBoxClass}>
                        <level.icon size={15} strokeWidth={1.7} />
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold text-app-heading">{level.label}</p>
                        <p className="font-body text-[12px] text-app-muted">{level.description}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Jalur Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={navLinkBase}>
                  <Route size={15} strokeWidth={1.7} className={navIconClass} /> Jalur <ChevronDown size={13} strokeWidth={1.7} className={navIconClass} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 bg-app-elevated border-app-default">
                <DropdownMenuLabel className="font-body text-[11px] text-app-muted uppercase tracking-wide">Pilih jalur karir</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-app-default" />
                {learningPaths.map((path) => {
                  const PathIcon = learningPathIcons[path.icon];

                  return (
                    <DropdownMenuItem key={path.name} onClick={() => handleNavigate(`/modul?jalur=${encodeURIComponent(path.name)}`)} className="cursor-pointer text-app-body focus:bg-app-surface-card-hover">
                      <div className="flex items-center gap-3 py-1">
                        <div className={menuIconBoxClass}>
                          {PathIcon && <PathIcon size={15} strokeWidth={1.7} />}
                        </div>
                        <div>
                          <p className="font-body text-[14px] font-semibold text-app-heading">{path.name}</p>
                          <p className="font-body text-[12px] text-app-muted">{path.description}</p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Glosarium */}
            <Link to="/glosarium" aria-current={isActive("/glosarium") ? "page" : undefined}
              className={`${navLinkBase} ${isActive("/glosarium") ? navLinkActive : ""}`}
            >
              <Library size={15} strokeWidth={1.7} className={navIconClass} /> Glosarium
            </Link>

            {/* Divider */}
            <div className="w-px h-5 bg-app-default mx-1" />

            {/* Tentang */}
            <Link to="/tentang" aria-current={isActive("/tentang") ? "page" : undefined}
              className={`${navLinkBase} ${isActive("/tentang") ? navLinkActive : ""}`}
            >
              Tentang
            </Link>

            {/* Dark mode toggle */}
            <button onClick={toggle} className="flex items-center justify-center w-9 h-9 rounded-md text-app-heading hover:bg-app-surface-card-hover transition-normal"
              aria-label={isDark ? "Light mode" : "Dark mode"} title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={18} strokeWidth={1.7} /> : <Moon size={18} strokeWidth={1.7} />}
            </button>

            {/* Alat Bantu */}
            <a
              href="https://alatbantu.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka alatbantu.app"
              title="alatbantu.app"
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md border border-app-default bg-app-surface-card p-1 transition-normal hover:border-app-accent hover:bg-app-accent-subtle"
            >
              <img
                src="https://alatbantu.app/logo.svg"
                alt=""
                className="h-full w-full rounded"
                loading="lazy"
                decoding="async"
              />
            </a>
          </nav>

          {/* Mobile: hamburger + dark toggle */}
          <div className="flex items-center gap-1 xl:hidden">
            <Link
              to="/tentang"
              className="flex items-center justify-center w-10 h-10 rounded-md text-app-heading"
              aria-label="Tentang"
            >
              <span className="font-body text-[13px] font-semibold">?</span>
            </Link>
            <button onClick={toggle} className="flex items-center justify-center w-10 h-10 rounded-md text-app-heading" aria-label={isDark ? "Light mode" : "Dark mode"}>
              {isDark ? <Sun size={20} strokeWidth={1.7} /> : <Moon size={20} strokeWidth={1.7} />}
            </button>
            <button className="p-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={24} strokeWidth={1.7} className="text-app-heading" />
            </button>
            <a
              href="https://alatbantu.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka alatbantu.app"
              title="alatbantu.app"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-app-default bg-app-surface-card p-1"
            >
              <img
                src="https://alatbantu.app/logo.svg"
                alt=""
                className="h-full w-full rounded"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[--z-modal] bg-app-elevated flex h-[100svh] flex-col xl:hidden animate-in fade-in duration-200 transition-normal">
          <div className="flex items-center justify-between px-4 h-14 border-b border-app-default">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}>
              <GraduationCap size={22} strokeWidth={1.7} className="text-app-accent shrink-0" />
              <span className="font-display text-[14px] text-app-heading">Webdev Learning</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2" onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }} aria-label="Close menu">
                <X size={24} strokeWidth={1.7} className="text-app-heading" />
              </button>
              <a
                href="https://alatbantu.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka alatbantu.app"
                title="alatbantu.app"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-app-default bg-app-surface-card p-1"
              >
                <img
                  src="https://alatbantu.app/logo.svg"
                  alt=""
                  className="h-full w-full rounded"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
            {/* Beranda */}
            <Link to="/" aria-current={isActive("/") ? "page" : undefined}
              className={`font-body text-[16px] font-medium py-3 px-4 rounded-xl transition-normal ${
                isActive("/") ? `${navLinkActive}` : "text-app-heading hover:bg-app-surface-card-hover"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Beranda
            </Link>

            {/* Level submenu */}
            <div>
              <button onClick={() => setMobileSubmenu(mobileSubmenu === "level" ? null : "level")}
                className="w-full flex items-center justify-between font-body text-[16px] font-medium py-3 px-4 rounded-xl text-app-heading hover:bg-app-surface-card-hover transition-normal"
              >
                <span className="flex items-center gap-3"><SlidersHorizontal size={20} strokeWidth={1.7} className={navIconClass} /> Level</span>
                <ChevronDown size={18} strokeWidth={1.7} className={`transition-normal ${mobileSubmenu === "level" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenu === "level" && (
                <div className="ml-0 sm:ml-4 flex flex-col gap-1 mt-1">
                  {levelFilters.map((level) => (
                    <button key={level.label} onClick={() => handleNavigate(level.path)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-app-surface-card-hover transition-normal"
                    >
                      <div className={menuIconBoxClass}>
                        <level.icon size={15} strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-body text-[15px] font-semibold text-app-heading leading-snug">{level.label}</p>
                        <p className="font-body text-[12px] text-app-muted">{level.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Jalur submenu */}
            <div>
              <button onClick={() => setMobileSubmenu(mobileSubmenu === "jalur" ? null : "jalur")}
                className="w-full flex items-center justify-between font-body text-[16px] font-medium py-3 px-4 rounded-xl text-app-heading hover:bg-app-surface-card-hover transition-normal"
              >
                <span className="flex items-center gap-3"><Route size={20} strokeWidth={1.7} className={navIconClass} /> Jalur</span>
                <ChevronDown size={18} strokeWidth={1.7} className={`transition-normal ${mobileSubmenu === "jalur" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenu === "jalur" && (
                <div className="ml-0 sm:ml-4 flex flex-col gap-1 mt-1">
                  {learningPaths.map((path) => {
                    const PathIcon = learningPathIcons[path.icon];

                    return (
                      <button key={path.name} onClick={() => handleNavigate(`/modul?jalur=${encodeURIComponent(path.name)}`)}
                        className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-app-surface-card-hover transition-normal"
                      >
                        <div className={menuIconBoxClass}>
                          {PathIcon && <PathIcon size={15} strokeWidth={1.7} />}
                        </div>
                        <div className="min-w-0">
                          <p className="font-body text-[15px] font-semibold text-app-heading leading-snug">{path.name}</p>
                          <p className="font-body text-[12px] text-app-muted">{path.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Glosarium */}
            <Link to="/glosarium" aria-current={isActive("/glosarium") ? "page" : undefined}
              className={`flex items-center gap-3 font-body text-[16px] font-medium py-3 px-4 rounded-xl transition-normal ${
                isActive("/glosarium") ? navLinkActive : "text-app-heading hover:bg-app-surface-card-hover"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <Library size={20} strokeWidth={1.7} className={navIconClass} /> Glosarium
            </Link>

            <a
              href="https://alatbantu.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-3 rounded-xl border border-app-default px-4 py-3 font-body text-[16px] font-medium text-app-heading transition-normal hover:bg-app-surface-card-hover"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-app-default bg-app-surface-card p-1">
                <img
                  src="https://alatbantu.app/logo.svg"
                  alt=""
                  className="h-full w-full rounded"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              alatbantu.app
            </a>
          </div>
        </div>
      )}
    </>
  );
}
