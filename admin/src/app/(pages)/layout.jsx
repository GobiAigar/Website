import Navbar from "@/components/static/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
