function DocsContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-sm lg:px-margin-desktop grid lg:grid-cols-[2fr_1fr] gap-6">
      {children}
    </div>
  );
}

export default DocsContainer;
