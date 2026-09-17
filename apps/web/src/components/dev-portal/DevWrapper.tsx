function DevWrapper({ children }: { children: React.ReactNode }) {
  return <div className="text-on-surface min-h-screen flex">{children}</div>;
}

export default DevWrapper;
