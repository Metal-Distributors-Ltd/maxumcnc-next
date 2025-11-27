import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Maxum CNC",
  description: "Precision CNC machining in lead, zinc, aluminum and steel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
