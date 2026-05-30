/**
 * Skip to Content link for keyboard navigation
 * Visible only when focused (Tab key), helps screen reader users
 * bypass repetitive navigation
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] 
                 focus:bg-aw-blue focus:text-white focus:px-4 focus:py-2.5 focus:rounded-lg 
                 focus:font-body focus:text-[14px] focus:font-semibold focus:shadow-lg
                 transition-all duration-150"
    >
      Lompat ke konten utama
    </a>
  );
}
