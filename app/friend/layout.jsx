import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TimelineProvider } from "@/context/timelineContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
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