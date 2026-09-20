function AuthMain({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-surface min-h-screen w-full flex flex-col justify-center items-center px-4 py-12 ">
      {children}
    </main>
  );
}

export default AuthMain;
