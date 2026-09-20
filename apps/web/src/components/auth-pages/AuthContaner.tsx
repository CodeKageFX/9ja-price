export default function AuthContaner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-120 mx-auto bg-white border border-border-subtle rounded-xl p-8 sm:p-10 shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
}
