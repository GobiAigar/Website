import Footer from "@/components/statics/Footer";
import { Navbar } from "@/components/statics/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
