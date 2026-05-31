import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-6 max-w-full overflow-hidden">
      <ol className="flex items-center gap-1 text-[12px] sm:text-[13px] font-body text-app-muted flex-wrap min-w-0">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1 min-w-0">
            {i > 0 && (
              <ChevronRight size={14} strokeWidth={1.75} className="text-app-muted shrink-0 mx-0.5" />
            )}
            {item.path ? (
              <Link to={item.path} className="hover:text-app-accent transition-normal shrink-0 flex items-center gap-1">
                {i === 0 && <Home size={13} strokeWidth={1.75} className="sm:hidden" />}
                <span className={i === 0 ? "hidden sm:inline" : ""}>{item.label}</span>
              </Link>
            ) : (
              <span className="font-semibold text-app-heading truncate max-w-[180px] sm:max-w-[300px]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
