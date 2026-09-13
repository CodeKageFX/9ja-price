interface DocsHeaderProps {
  pageTitle: string;
}

function DocsHeader({ pageTitle }: DocsHeaderProps) {
  return (
    <header className="h-18 bg-surface-container-lowest border-b border-border-subtle px-margin-mobile flex items-center justify-between shrink-0 sticky top-0 z-30">
      <div className="pl-12 lg:pl-0">
        <h2 className="font-headline-lg text-title-md text-on-surface capitalize">
          {pageTitle}
        </h2>
      </div>
    </header>
  );
}

export default DocsHeader;
