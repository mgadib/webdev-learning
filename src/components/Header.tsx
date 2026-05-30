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
  Target,
  Sparkles,
  Sun,
  Moon,
  Code2,
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
    color: "#10b981",
  },
  {
    label: "Menengah",
    path: "/modul?level=menengah",
    description: "Membangun aplikasi nyata",
    icon: TreePine,
    color: "#3b82f6",
  },
  {
    label: "Lanjut",
    path: "/modul?level=lanjut",
    description: "Spesialisasi deep-dive",
    icon: Rocket,
    color: "#8b5cf6",
  },
];

const pathIcons: Record<string, React.ReactNode> = {
  monitor: <Monitor size={16} />,
  server: <Server size={16} />,
  layers: <Layers size={16} />,
  cloud: <Cloud size={16} />,
  shield: <Shield size={16} />,
};

const fullstackMenu = [
  {
    label: "Frontend Modern",
    path: "/modul/16",
    description: "React, Vite, Tailwind, shadcn/ui, Radix",
    icon: Monitor,
    color: "#3b82f6",
  },
  {
    label: "Backend Modern",
    path: "/modul/17",
    description: "Bun, Hono, Drizzle, Redis, Supabase",
    icon: Server,
    color: "#f59e0b",
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm border-b-2 border-aw-black dark:border-white/20 transition-colors">
        <div className="max-w-content mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <GraduationCap
              size={22}
              strokeWidth={2}
              className="text-aw-blue transition-transform group-hover:scale-110"
            />
            <span className="font-display text-[18px] sm:text-[20px] xl:text-[24px] leading-none text-aw-black dark:text-[#f0f0f0] transition-colors">
              Webdev Learning
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center">
            {/* Level Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 font-body text-[13px] font-medium text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10 px-2 py-2 rounded-lg transition-colors">
                  <Target size={14} />
                  Level
                  <ChevronDown size={13} strokeWidth={2} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-56 dark:bg-[#1a1a1a] dark:border-white/20"
              >
                <DropdownMenuLabel className="font-body text-[11px] text-aw-border-mid uppercase tracking-wide dark:text-gray-400">
                  Pilih level
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-white/10" />
                {levelFilters.map((level) => (
                  <DropdownMenuItem
                    key={level.label}
                    onClick={() => handleNavigate(level.path)}
                    className="cursor-pointer dark:text-gray-200 dark:focus:bg-white/10"
                  >
                    <div className="flex items-center gap-3 py-1">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: level.color }}
                      >
                        <level.icon size={16} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold">
                          {level.label}
                        </p>
                        <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400">
                          {level.description}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Jalur Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 font-body text-[13px] font-medium text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10 px-2 py-2 rounded-lg transition-colors">
                  <GraduationCap size={14} />
                  Jalur
                  <ChevronDown size={13} strokeWidth={2} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-64 dark:bg-[#1a1a1a] dark:border-white/20"
              >
                <DropdownMenuLabel className="font-body text-[11px] text-aw-border-mid uppercase tracking-wide dark:text-gray-400">
                  Pilih jalur karir
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-white/10" />
                {learningPaths.map((path) => (
                  <DropdownMenuItem
                    key={path.name}
                    onClick={() =>
                      handleNavigate(
                        `/modul?jalur=${encodeURIComponent(path.name)}`
                      )
                    }
                    className="cursor-pointer dark:text-gray-200 dark:focus:bg-white/10"
                  >
                    <div className="flex items-center gap-3 py-1">
                      <div className="w-8 h-8 rounded-full bg-aw-blue text-white flex items-center justify-center shrink-0">
                        {pathIcons[path.icon]}
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold">
                          {path.name}
                        </p>
                        <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400">
                          {path.description}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Fullstack JS Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 font-body text-[13px] font-medium text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10 px-2 py-2 rounded-lg transition-colors">
                  <Code2 size={14} />
                  Fullstack JS
                  <ChevronDown size={13} strokeWidth={2} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-64 dark:bg-[#1a1a1a] dark:border-white/20"
              >
                <DropdownMenuLabel className="font-body text-[11px] text-aw-border-mid uppercase tracking-wide dark:text-gray-400">
                  Ekosistem Modern
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-white/10" />
                {fullstackMenu.map((item) => (
                  <DropdownMenuItem
                    key={item.label}
                    onClick={() => handleNavigate(item.path)}
                    className="cursor-pointer dark:text-gray-200 dark:focus:bg-white/10"
                  >
                    <div className="flex items-center gap-3 py-1">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="font-body text-[14px] font-semibold">
                          {item.label}
                        </p>
                        <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Glosarium */}
            <Link
              to="/glosarium"
              aria-current={isActive("/glosarium") ? "page" : undefined}
              className={`flex items-center gap-1 font-body text-[13px] font-medium transition-colors px-2 py-2 rounded-lg ${
                isActive("/glosarium")
                  ? "bg-aw-blue/10 text-aw-blue font-semibold"
                  : "text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <BookOpen size={14} strokeWidth={2} />
              Glosarium
            </Link>

            {/* Tentang */}
            <Link
              to="/tentang"
              aria-current={isActive("/tentang") ? "page" : undefined}
              className={`flex items-center gap-1 font-body text-[13px] font-medium transition-colors px-2 py-2 rounded-lg ${
                isActive("/tentang")
                  ? "bg-aw-blue/10 text-aw-blue font-semibold"
                  : "text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
            >
              <Sparkles size={14} strokeWidth={2} />
              Tentang
            </Link>

            {/* Divider */}
            <div className="w-px h-5 bg-aw-border-dim dark:bg-white/20 mx-0.5" />

            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="flex items-center justify-center w-9 h-9 rounded-lg text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label={isDark ? "Light mode" : "Dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile: hamburger + dark toggle */}
          <div className="flex items-center gap-1 xl:hidden">
            <button
              onClick={toggle}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-aw-black dark:text-[#f0f0f0]"
              aria-label={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} className="text-aw-black dark:text-[#f0f0f0]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-[#121212] flex flex-col xl:hidden animate-in fade-in duration-200 transition-colors">
          <div className="flex items-center justify-between px-4 h-14 border-b-2 border-aw-black dark:border-white/20">
            <div className="flex items-center gap-2">
              <GraduationCap
                size={22}
                strokeWidth={2}
                className="text-aw-blue"
              />
              <span className="font-display text-[18px] text-aw-black dark:text-[#f0f0f0]">
                Webdev Learning
              </span>
            </div>
            <button
              className="p-2"
              onClick={() => {
                setMobileOpen(false);
                setMobileSubmenu(null);
              }}
              aria-label="Close menu"
            >
              <X size={24} className="text-aw-black dark:text-[#f0f0f0]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
            {/* Beranda */}
            <Link
              to="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`font-body text-[16px] font-medium py-3 px-4 rounded-xl transition-colors ${
                isActive("/")
                  ? "bg-aw-blue/10 text-aw-blue font-semibold"
                  : "text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Beranda
            </Link>

            {/* Level submenu */}
            <div>
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "level" ? null : "level"
                  )
                }
                className="w-full flex items-center justify-between font-body text-[16px] font-medium py-3 px-4 rounded-xl text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Target size={20} /> Level
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileSubmenu === "level" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSubmenu === "level" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {levelFilters.map((level) => (
                    <button
                      key={level.label}
                      onClick={() => handleNavigate(level.path)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: level.color }}
                      >
                        <level.icon size={16} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold text-aw-black dark:text-[#f0f0f0]">
                          {level.label}
                        </p>
                        <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400">
                          {level.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Jalur submenu */}
            <div>
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "jalur" ? null : "jalur"
                  )
                }
                className="w-full flex items-center justify-between font-body text-[16px] font-medium py-3 px-4 rounded-xl text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <GraduationCap size={20} /> Jalur
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileSubmenu === "jalur" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSubmenu === "jalur" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {learningPaths.map((path) => (
                    <button
                      key={path.name}
                      onClick={() =>
                        handleNavigate(
                          `/modul?jalur=${encodeURIComponent(path.name)}`
                        )
                      }
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      <div className="w-8 h-8 rounded-full bg-aw-blue text-white flex items-center justify-center shrink-0">
                        {pathIcons[path.icon]}
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold text-aw-black dark:text-[#f0f0f0]">
                          {path.name}
                        </p>
                        <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400">
                          {path.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fullstack JS submenu */}
            <div>
              <button
                onClick={() =>
                  setMobileSubmenu(
                    mobileSubmenu === "fullstack" ? null : "fullstack"
                  )
                }
                className="w-full flex items-center justify-between font-body text-[16px] font-medium py-3 px-4 rounded-xl text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <Code2 size={20} /> Fullstack JS
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileSubmenu === "fullstack" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileSubmenu === "fullstack" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  {fullstackMenu.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavigate(item.path)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl text-left hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="font-body text-[15px] font-semibold text-aw-black dark:text-[#f0f0f0]">
                          {item.label}
                        </p>
                        <p className="font-body text-[12px] text-aw-border-mid dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Glosarium */}
            <Link
              to="/glosarium"
              aria-current={isActive("/glosarium") ? "page" : undefined}
              className={`flex items-center gap-3 font-body text-[16px] font-medium py-3 px-4 rounded-xl transition-colors ${
                isActive("/glosarium")
                  ? "bg-aw-blue/10 text-aw-blue font-semibold"
                  : "text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <BookOpen size={20} strokeWidth={2} /> Glosarium
            </Link>

            {/* Tentang */}
            <Link
              to="/tentang"
              aria-current={isActive("/tentang") ? "page" : undefined}
              className={`flex items-center gap-3 font-body text-[16px] font-medium py-3 px-4 rounded-xl transition-colors ${
                isActive("/tentang")
                  ? "bg-aw-blue/10 text-aw-blue font-semibold"
                  : "text-aw-black dark:text-[#f0f0f0] hover:bg-gray-100 dark:hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              <Sparkles size={20} strokeWidth={2} /> Tentang
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
