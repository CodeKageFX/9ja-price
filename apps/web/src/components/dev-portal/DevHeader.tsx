import { Bell } from "lucide-react";

interface DevHeaderProps {
  pageTitle: string;
}

function DevHeader({ pageTitle }: DevHeaderProps) {
  return (
    <header className="h-20 bg-surface-container-lowest border-b border-border-subtle px-margin-mobile flex items-center justify-between shrink-0 sticky top-0 z-30">
      <div className="pl-12 lg:pl-0">
        <h2 className="font-headline-lg text-title-md text-on-surface capitalize">
          {pageTitle}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-on-surface-variant" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-sm shadow-sm">
            OA
          </div>
          <div className="hidden md:block">
            <p className="font-title-md text-body-sm font-semibold text-on-surface leading-tight">
              Oluwaseun A.
            </p>
            <p className="font-label-caps text-[10px] text-on-surface-variant uppercase">
              Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DevHeader;
