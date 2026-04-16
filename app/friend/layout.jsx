import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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