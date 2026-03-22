export default function Section({
  title,
  children,
  id,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-20 ${className}`}>
      {title && (
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
