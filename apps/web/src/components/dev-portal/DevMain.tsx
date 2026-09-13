function DevMain({ children }: { children: React.ReactNode }) {
  return (
    <main className="lg:ml-0 flex-1 flex flex-col grow min-w-0">
      {children}
    </main>
  );
}

export default DevMain;
