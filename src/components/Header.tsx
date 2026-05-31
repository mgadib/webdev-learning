import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  Server,
  Layers,
  Cloud,
  Shield,
  GraduationCap,
  Leaf,
  TreePine,
  Rocket,
  Compass,
  Map,
  Terminal,
  Sparkles,
  Sun,
  Moon,
  BookOpen,
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

const levelFilters = [
  {
    label: "Pemula",
    path: "/modul?level=pemula",
    description: "Fondasi web untuk pemula",
    icon: Leaf,
    color: "var(--app-accent)",
  },
  {
    label: "Menengah",
    path: "/modul?level=menengah",
    description: "Membangun aplikasi nyata",
    icon: TreePine,
    color: "var(--app-accent-hover)",
  },
  {
    label: "Lanjut",
    path: "/modul?level=lanjut",
    description: "Spesialisasi deep-dive",
    icon: Rocket,
    color: "var(--app-primary)",
  },
];

const pathIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor size={16} strokeWidth={1.75} />,
  server: <Server size={16} strokeWidth={1.75} />,
  layers: <Layers size={16} strokeWidth={1.75} />,
  cloud: <Cloud size={16} strokeWidth={1.75} />,
  shield: <Shield size={16} strokeWidth={1.75} />,
};

const fullstackMenu = [
  {
    label: "Frontend Modern",
    path: "/modul/16",
    description: "React, Vite, Tailwind, shadcn/ui, Radix",
    icon: Monitor,
    color: "var(--app-accent)",
  },
  {
    label: "Backend Modern",
    path: "/modul/17",
    description: "Bun, Hono, Drizzle, Redis, Supabase",
    icon: Server,
    color: "var(--app-primary)",
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[--z-sticky] bg-app-elevated/90 backdrop-blur-md border-b border-app-default transition-normal">
        <div className="max-w-content mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <GraduationCap size={22} strokeWidth={1.75} className="text-app-accent transition-normal group-hover:scale-110 shrink-0" />
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
                  <Compass size={14} strokeWidth={1.75} /> Level <ChevronDown size={13} strokeWidth={1.75} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-app-elevated border-app-default">
                <DropdownMenuLabel className="font-body text-[11px] text-app-muted uppercase tracking-wide">Pilih level</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-app-default" />
                {levelFilters.map((level) => (
                  <DropdownMenuItem key={level.label} onClick={() => handleNavigate(level.path)} className="cursor-pointer text-app-body focus:bg-app-surface-card-hover">
                    <div className="flex items-center gap-3 py-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-app-on-accent shrink-0" style={{ backgroundColor: level.color }}>
                        <level.icon size={16} strokeWidth={1.75} />
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
                  <Map size={14} strokeWidth={1.75} /> Jalur <ChevronDown size={13} strokeWidth={1.75} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 bg-app-elevated border-app-default">
                <DropdownMenuLabel className="font-body text-[11px] text-app-muted uppercase tracking-wide">Pilih jalur karir</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-app-default" />
                {learningPaths.map((path) => (
                  <DropdownMenuItem key={path.name} onClick={() => handleNavigate(`/modul?jalur=${encodeURIComponent(path.name)}`)} className="cursor-pointer text-app-body focus:bg-app-surface-card-hover">
                    <div className="flex items-center gap-3 py-1">
                      <div className="w-8 h-8 rounded-full bg-app-accent text-app-on-accent flex items-center justify-center shrink-0">
                        {pathIcons[path.icon]}
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold text-app-heading">{path.name}</p>
                        <p className="font-body text-[12px] text-app-muted">{path.description}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Fullstack JS Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={navLinkBase}>
                  <Terminal size={14} strokeWidth={1.75} /> Fullstack JS <ChevronDown size={13} strokeWidth={1.75} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-64 bg-app-elevated border-app-default">
                <DropdownMenuLabel className="font-body text-[11px] text-app-muted uppercase tracking-wide">Ekosistem Modern</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-app-default" />
                {fullstackMenu.map((item) => (
                  <DropdownMenuItem key={item.label} onClick={() => handleNavigate(item.path)} className="cursor-pointer text-app-body focus:bg-app-surface-card-hover">
                    <div className="flex items-center gap-3 py-1">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-app-on-accent shrink-0" style={{ backgroundColor: item.color }}>
                        <item.icon size={16} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold text-app-heading">{item.label}</p>
                        <p className="font-body text-[12px] text-app-muted">{item.description}</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Glosarium */}
            <Link to="/glosarium" aria-current={isActive("/glosarium") ? "page" : undefined}
              className={`${navLinkBase} ${isActive("/glosarium") ? navLinkActive : ""}`}
            >
              <BookOpen size={14} strokeWidth={1.75} /> Glosarium
            </Link>

            {/* Tentang */}
            <Link to="/tentang" aria-current={isActive("/tentang") ? "page" : undefined}
              className={`${navLinkBase} ${isActive("/tentang") ? navLinkActive : ""}`}
            >
              <Sparkles size={14} strokeWidth={1.75} /> Tentang
            </Link>

            {/* Divider */}
            <div className="w-px h-5 bg-app-default mx-1" />

            {/* Dark mode toggle */}
            <button onClick={toggle} className="flex items-center justify-center w-9 h-9 rounded-md text-app-heading hover:bg-app-surface-card-hover transition-normal"
              aria-label={isDark ? "Light mode" : "Dark mode"} title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
            </button>
          </nav>

          {/* Mobile: hamburger + dark toggle */}
          <div className="flex items-center gap-1 xl:hidden">
            <button onClick={toggle} className="flex items-center justify-center w-10 h-10 rounded-md text-app-heading" aria-label={isDark ? "Light mode" : "Dark mode"}>
              {isDark ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
            </button>
            <button className="p-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={24} strokeWidth={1.75} className="text-app-heading" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[--z-modal] bg-app-elevated flex flex-col xl:hidden animate-in fade-in duration-200 transition-normal">
          <div className="flex items-center justify-between px-4 h-14 border-b border-app-default">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}>
              <GraduationCap size={22} strokeWidth={1.75} className="text-app-accent shrink-0" />
              <span className="font-display text-[14px] text-app-heading">Webdev Learning</span>
            </div>
            <button className="p-2" onClick={() => { setMobileOpen(false); setMobileSubmenu(null); }} aria-label="Close menu">
              <X size={24} strokeWidth={1.75} className="text-app-heading" />
            </button>
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
                <span className="flex items-center gap-3"><Compass size={20} strokeWidth={1.75} /> Level</span>
                <ChevronDown size={18} strokeWidth={1.75} className={`transition-normal ${mobileSubmenu === "level" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenu === "level" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {levelFilters.map((level) => (
                    <button key={level.label} onClick={() => handleNavigate(level.path)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-app-surface-card-hover transition-normal"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-app-on-accent shrink-0" style={{ backgroundColor: level.color }}>
                        <level.icon size={16} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold text-app-heading">{level.label}</p>
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
                <span className="flex items-center gap-3"><Map size={20} strokeWidth={1.75} /> Jalur</span>
                <ChevronDown size={18} strokeWidth={1.75} className={`transition-normal ${mobileSubmenu === "jalur" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenu === "jalur" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {learningPaths.map((path) => (
                    <button key={path.name} onClick={() => handleNavigate(`/modul?jalur=${encodeURIComponent(path.name)}`)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-app-surface-card-hover transition-normal"
                    >
                      <div className="w-8 h-8 rounded-full bg-app-accent text-app-on-accent flex items-center justify-center shrink-0">
                        {pathIcons[path.icon]}
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold text-app-heading">{path.name}</p>
                        <p className="font-body text-[12px] text-app-muted">{path.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fullstack JS submenu */}
            <div>
              <button onClick={() => setMobileSubmenu(mobileSubmenu === "fullstack" ? null : "fullstack")}
                className="w-full flex items-center justify-between font-body text-[16px] font-medium py-3 px-4 rounded-xl text-app-heading hover:bg-app-surface-card-hover transition-normal"
              >
                <span className="flex items-center gap-3"><Terminal size={20} strokeWidth={1.75} /> Fullstack JS</span>
                <ChevronDown size={18} strokeWidth={1.75} className={`transition-normal ${mobileSubmenu === "fullstack" ? "rotate-180" : ""}`} />
              </button>
              {mobileSubmenu === "fullstack" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {fullstackMenu.map((item) => (
                    <button key={item.label} onClick={() => handleNavigate(item.path)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-app-surface-card-hover transition-normal"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-app-on-accent shrink-0" style={{ backgroundColor: item.color }}>
                        <item.icon size={16} strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold text-app-heading">{item.label}</p>
                        <p className="font-body text-[12px] text-app-muted">{item.description}</p>
                      </div>
                    </button>
                  ))}
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
              <BookOpen size={20} strokeWidth={1.75} /> Glosarium
            </Link>

            {/* Tentang */}
            <Link to="/tentang" aria-current={isActive("/tentang") ? "page" : undefined}
              className={`flex items-center gap-3 font-body text-[16px] font-medium py-3 px-4 rounded-xl transition-normal ${
                isActive("/tentang") ? navLinkActive : "text-app-heading hover:bg-app-surface-card-hover"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles size={20} strokeWidth={1.75} /> Tentang
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
