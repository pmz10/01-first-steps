import { Navbar } from "@/Components";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span>Hola Mundo</span>
        {children}
      </main>
    </>
  );
}