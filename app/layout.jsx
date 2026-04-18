import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <TimelineProvider>
          <Navbar />
          <Toaster />
          {children}
          <Footer />
        </TimelineProvider>
      </body>
    </html>
  );
}