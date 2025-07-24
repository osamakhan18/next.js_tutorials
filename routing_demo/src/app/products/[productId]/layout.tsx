export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>This is the layout of the product</h1>
    </>
  );
}
