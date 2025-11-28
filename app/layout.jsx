import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

export const metadata = {
  title: "Maxum CNC",
  description: "Manufacturer of high precision metal components",
  icons: {
    icon: "/images/maxum-favicon.png",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <main>
            <Nav />            
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
