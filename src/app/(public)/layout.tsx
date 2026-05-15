import Navbar from "@/components/public/Navbar";
import BackToTop from "@/components/public/BackToTop";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">{children}</main>
      <BackToTop />
    </div>
  );
}
