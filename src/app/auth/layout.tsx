export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container max-w-md mt-32">
      <div className="flex-row justify-between">
        <nav></nav>
        {children}
      </div>
    </div>
  );
}
